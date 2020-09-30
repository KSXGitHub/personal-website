#! /usr/bin/env node
const { setFailed } = require('@actions/core')
const { main } = require('./index')
main().catch(error => {
  console.error(error)
  setFailed(String(error))
})
