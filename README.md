# collector-nodejs-memory

> **Collect Node.js memory metrics (RSS, heap and external).**  
> A [`telemetry`](https://github.com/telemetry-js/telemetry) plugin.

[![npm status](http://img.shields.io/npm/v/telemetry-js/collector-nodejs-memory.svg)](https://www.npmjs.org/package/@telemetry-js/collector-nodejs-memory)
[![node](https://img.shields.io/node/v/@telemetry-js/collector-nodejs-memory.svg)](https://www.npmjs.org/package/@telemetry-js/collector-nodejs-memory)
[![Test](https://github.com/telemetry-js/collector-nodejs-memory/workflows/Test/badge.svg?branch=main)](https://github.com/telemetry-js/collector-nodejs-memory/actions)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Table of Contents

<details><summary>Click to expand</summary>

- [Usage](#usage)
- [Options](#options)
- [Install](#install)
- [Acknowledgements](#acknowledgements)
- [License](#license)

</details>

## Usage

```js
const telemetry = require('@telemetry-js/telemetry')()
const mem = require('@telemetry-js/collector-nodejs-memory')

telemetry.task()
  .collect(mem, { /* options */ })
```

## Options

_Yet to document._

## Install

With [npm](https://npmjs.org) do:

```
npm install @telemetry-js/collector-nodejs-memory
```

## Acknowledgements

This project is kindly sponsored by [Reason Cybersecurity Inc](https://reasonsecurity.com).

[![reason logo](https://cdn.reasonsecurity.com/github-assets/reason_signature_logo.png)](https://reasonsecurity.com)

## License

[MIT](LICENSE) © Vincent Weevers
