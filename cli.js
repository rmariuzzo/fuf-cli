#!/usr/bin/env node

const fuf = require('fuf')
const command = require('meow')

/**
 * Command definition.
 */
const cli = command(`
  Usage
    $ fuf <target-dir> <source-dir>

  Options
    --match, -m How to match used files.
                Can be one of the following values:
                  ext - by file extension.
                  name - by file name.
                  path - by file path.
                  fullname - by file name with extention.

  Examples
    $ fuf app/**/* app/images/**/*
      Find unused files from 'app/images' in 'app'.

    $ fuf app/**/* app/images/**/* --match name
      Find unused files from 'app/images' in 'app' using file name.
`, {
  flags: {
    match: {
      type: 'string',
      alias: 'm',
      default: 'fullname'
    }
  }
})

const [target, source] = cli.input

if (!target || !source) {
  return cli.showHelp(2);
}

const options = { match: cli.flags.match }

fuf(target, source, options)
  .then((result) => {
    console.log(`Found: ${result.unused.length} unused files!`)
    console.log(result.unused.map(f => f.path).join('\n'))
    console.log(`Found: ${result.unused.length} unused files!`)
    process.exit(0)
  })
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })