import { error, startGroup, endGroup } from '@actions/core'
import places from '@tools/places'
import { spawnSync } from 'child_process'
import fs from 'fs'
import { remove, copy, readdir } from 'fs-extra'
import git from 'isomorphic-git'
import http from 'isomorphic-git/http/node'
import path from 'path'
import process from 'process'

export enum ExitStatusCode {
  Success = 0,
  Failure = 1,
  MissingRequiredEnvironmentVariable = 2,
  GitPushFailure = 3,
  GitAddFailure = 4,
}

function requireEnv<Name extends string>(...names: Name[]): Record<Name, string> {
  const result: any = {}

  let failed = false
  for (const name of names) {
    const value = process.env[name]
    if (value) {
      result[name] = value
    } else {
      error(`Missing required environment variable ${name}`)
      failed = true
    }
  }

  if (failed) throw process.exit(ExitStatusCode.MissingRequiredEnvironmentVariable)

  return result
}

const {
  GIT_REPO_URL,
  GIT_USERNAME,
  GIT_PASSWORD,
  GIT_AUTHOR_NAME,
  GIT_AUTHOR_EMAIL,
  GITHUB_SHA,
  GITHUB_REPOSITORY,
} = requireEnv(
  'GIT_REPO_URL',
  'GIT_USERNAME',
  'GIT_PASSWORD',
  'GIT_AUTHOR_NAME',
  'GIT_AUTHOR_EMAIL',
  'GITHUB_SHA',
  'GITHUB_REPOSITORY',
)

const onAuth = () => ({
  username: GIT_USERNAME,
  password: GIT_PASSWORD,
})

export async function main() {
  process.chdir(places.project)

  const dir = path.join(places.project, '.web-pages.tmp')
  await remove(dir)

  console.info(`Cloning ${GIT_REPO_URL} to ${dir}`)
  await git.clone({
    fs,
    http,
    dir,
    url: GIT_REPO_URL,
    onAuth,
  })

  startGroup(`Delete old files from ${dir}`)
  for (const name of await readdir(dir)) {
    if (name === '.git') {
      console.info(`skip ${name}`)
      continue
    }
    console.info(`removing ${name}`)
    await remove(path.join(dir, name))
  }
  endGroup()

  const srcDir = path.join(places.project, 'dist')
  startGroup(`Copy files from ${srcDir} to ${dir}`)
  for (const name of await readdir(srcDir)) {
    if (name === '.git') {
      console.info(`skip ${name}`)
      continue
    }
    console.info(`copying ${name}`)
    await copy(path.join(srcDir, name), path.join(dir, name), {
      dereference: false,
      overwrite: true,
    })
  }
  endGroup()

  console.info('Running git add')
  const gitAddResult = spawnSync('git', ['add', '-v', '.'], {
    cwd: dir,
    stdio: 'inherit',
  })
  if (gitAddResult.status) {
    error(`Command 'git add -v .' exits with code ${gitAddResult.status}`)
    throw process.exit(ExitStatusCode.GitAddFailure)
  }
  if (gitAddResult.error) {
    error(`Failed to execute 'git add -v .': ${error}`)
    console.error(error)
    throw process.exit(ExitStatusCode.GitAddFailure)
  }

  const [{
    commit: {
      message: latestCommitMessage,
    },
  }] = await git.log({
    fs,
    dir: places.project,
    ref: GITHUB_SHA,
    depth: 1,
  })

  console.info('Running git commit')
  const commit = await git.commit({
    fs,
    dir,
    author: {
      name: GIT_AUTHOR_NAME,
      email: GIT_AUTHOR_EMAIL,
    },
    message: [
      `Automatically updated by ${GITHUB_REPOSITORY}@${GITHUB_SHA}`,
      '',
      `ref: ${GITHUB_REPOSITORY}@${GITHUB_SHA}`,
      ...latestCommitMessage
        .trim()
        .split('\n')
        .map(line => 'msg: ' + line),
    ].join('\n'),
    ref: 'master',
  })
  console.info(`created commit ${commit}`)

  console.info(`Pushing to ${GIT_REPO_URL}`)
  const pushResult = await git.push({
    fs,
    http,
    dir,
    url: GIT_REPO_URL,
    ref: 'master',
    force: true,
    onAuth,
  })

  if (pushResult.ok) {
    console.info('DONE.')
  } else {
    error(`Failed to push ${commit} to ${GIT_REPO_URL}`)
    throw process.exit(ExitStatusCode.GitPushFailure)
  }

  return process.exit(ExitStatusCode.Success)
}

export default main
