'use strict'
const { join } = require('path')
const project = join(__dirname, '../..')
const packages = join(project, 'packages')
const app = join(project, 'app')
const test = join(project, 'test')
const tools = join(project, 'tools')
const dist = join(project, 'dist')
Object.defineProperty(exports, '__esModule', { value: true })
Object.defineProperty(exports, 'default', { value: exports })
Object.assign(exports, { project, app, packages, test, tools, dist })
