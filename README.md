captain-git-hook
================

define git hooks in your package.json

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
post-checkout

# server
pre-receive
post-receive
```

Installation
------------

```bash
npm i captain-git-hook
```

LICENSE
-------

The MIT License (MIT) Maximilian Hoffmann
