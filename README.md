# pikkr-cli

> Pick something random from a list of items, on the command line.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/pikkr-cli.svg)](https://npmjs.org/package/pikkr-cli)
[![CircleCI](https://circleci.com/gh/melanieseltzer/pikkr-cli/tree/master.svg?style=shield)](https://circleci.com/gh/melanieseltzer/pikkr-cli/tree/master)

## Install

```
$ npm install -g pikkr-cli
```

## Usage

Feed it a list of items to choose from, and the result will be an item randomly chose from the list.

```
$ pikkr --list burger pasta sandwich
// => You should pick: burger!
```

## Commands

```
USAGE
  $ pikkr

OPTIONS
  -h, --help       show CLI help
  -l, --list=list  List of items, separated by spaces
  -v, --version    show CLI version

EXAMPLES
  $ pikkr --list burger pasta
  $ pikkr -l burger pasta
```

## Related

- [pikkr](https://github.com/melanieseltzer/pikkr)
