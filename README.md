captain-git-hook [![version][1]][2] [![build][3]][4]
================

define git hooks in your package.json (requires node `>= 0.12`)

Usage
-----

__package.json__
```json
{
  "scripts": {
    "pre-commit": "echo 'this prevents commiting' && exit 1"
  }
}
```

Add a script to your `package.json` for any git hook you want to listen to.

Currently supported hooks:

```bash
pre-commit
post-commit
pre-push
```

Installation
------------

```bash
npm i captain-git-hook
```

LICENSE
-------

The MIT License (MIT) Maximilian Hoffmann

[1]: http://img.shields.io/npm/v/captain-git-hook.svg?style=flat
[2]: https://www.npmjs.org/package/captain-git-hook
[3]: http://img.shields.io/travis/maxhoffmann/captain-git-hook.svg?style=flat
[4]: https://travis-ci.org/maxhoffmann/captain-git-hook
