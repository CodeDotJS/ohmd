# omd

:feather: :feet: Convert arrays and objects to Markdown tables.

## API

### `omd(data, options)`

- `data`: The data to be converted into a Markdown table. It can be:
    - A single array.
    - An object with header and table properties.
    - A 2D array where the first sub-array is the header and the remaining sub-arrays are the table rows.

- `options`: Configuration options for the table formatting. It's optional.
    - `align` - Specifies the alignment for each column. Valid values are `left`, `center`, and `right`. If not provided, the default alignment is used.


### Examples

- __Markdown for a single array:__

```js
const omd = require('omd');

const arrayData = ['Jon', 'Doe'];
console.log(omd(arrayData));

| --- |
| Jon |
| Doe |
```

```js
console.log(omd(arrayData, { align: ['left'] }));

| :--- |
| Jon  |
| Doe  |
```

- __Markdown for an object with different alignments:__

```js
const objectData = {
    header: ['Day', 'Rank', 'Grade'],
    table: [['Tuesday', 7, "C Minus"], ['Friday', 1, "A Plus"], ['Dryday', 4, "B Minus"]],
};

console.log(omd(objectData, { align: ['left', 'center', 'right'] }));

| Day     |   Rank  |    Grade |
| :---    |  :---:  |   ---:   |
| Tuesday |    7    |  C Minus |
| Friday  |    1    |  A Plus  |
| Dryday  |    4    |  B Minus |
```

- __Markdown for an object with single alignment:__

```js
console.log(omd(objectData, { align: ['center'] }));

|   Day   |   Rank  |  Grade   |
| :---:   | :---:   | :---:    |
| Tuesday |    7    |  C Minus |
| Friday  |    1    |  A Plus  |
| Dryday  |    4    |  B Minus |
```

- __Markdown for a 2D array with different alignments:__

```js
const twoDArrayData = [
    ['name', 'class', 'number'],
    ['Jon', 7, 99],
    ['Ron', 13, 233],
    ['Akon', 12, 13],
];

console.log(omd(twoDArrayData, { align: ['center', 'left', 'right'] }));

|   name  | class | number |
| :---:   | :---  |  ---:  |
|   Jon   |  7    |     99 |
|   Ron   |  13   |    233 |
|  Akon   |  12   |     13 |
```

- Markdown for a 2D array with single alignment:

```js
console.log(omd(twoDArrayData, { align: ['center'] }));

|  name  | class | number |
| :---:  | :---: | :---:  |
|  Jon   |   7   |   99   |
|  Ron   |  13   |  233   |
| Akon   |  12   |   13   |
```

# License

[MIT](LICENSE)
