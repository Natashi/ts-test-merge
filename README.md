## The Heck's This??

It's a test TypeScript project for a function that merges two sorted arrays. That's it.

## Installation

Why would you ever want to use this? Well, anyway.

```bash
git clone https://github.com/Natashi/ts-test-merge
cd ts-test-merge

npm install
npm run build
npm test
```

## Usage

Please don't, but if you really want to, do:

```ts
import { Merge } from '../src/merger'

assert.deepEqual(Merge.merge([1, 3], [2, 4]), [1, 2, 3, 4])
```
