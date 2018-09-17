![fuf-cli – Find Unused Files in a directory with a single command](.github/banner.svg)

# Installation

```bash
npm install fuf-cli --global
```

# Usage

```bash
fuf 'app/**/*' 'app/images/**/*'
```

This will find any file at `app/images` that's unused on `app` directory. 🙌

This cli app is based on [fuf](https://github.com/rmariuzzo/fuf) – the node package.

# Development

  1. Clone and fork this repo.
  2. Install dependencies: `npm install`.
  3. Do your stuff.
  4. [Run tests](#test).
  5. Prepare a pull request.

## Releases

  1. `npm install --global np`
  2. `np`

<div align=center>

Made with :heart: by [Rubens Mariuzzo](https://github.com/rmariuzzo).

[MIT license](LICENSE)

</div>