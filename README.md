# partials-ts

Partials helpers for typescript.


## Install

```bash
yarn add partials-ts
# or
npm install partials-ts
```

## API

There are 2 helpers available: `PartialRequired` and `PartialOptional`.

### `PartialRequired<T, K>`

Produces a resulting type that is equivalent to type T with a required property K. This can be useful when used in filter functions.

```typescript
import { PartialRequired } from 'partials-ts'

type Item = { id: number, data?: string }
const items = [{ id: 1, data: 'some data' }, { id: 2, data: 'some data' }, { id: 3 }]
// filter out items that do not contains `data`
const itemsWithData = items.filter((item): item is PartialRequired<Item, 'data'>  => !!item.data)
```

### `PartialOptional<T, K>`

Produces a resulting type that is equivalent to type T with an optional property K. This is the opposite of `PartialRequired`.
This is useful where you don't want to make all properties optional by using `Partial`.

```typescript
import { PartialOptional } from 'partials-ts'

type Item = { id: number, data: string }
const items: PartialOptional<Item, 'data'>[] = [{ id: 1, data: 'some data' }, { id: 2, data: 'some data' }, { id: 3 }]
```
