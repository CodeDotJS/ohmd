const omd = require('../omd');

const arrayData = ['Jon', 'Doe'];

const emptyArrayData = [];

const singleElementArrayData = ['single'];

const emptyObjectData = {
    header: [],
    table: [],
};

const objectData = {
    header: ['Day', 'Rank', 'Grade'],
    table: [['Tuesday', 7, "C Minus"], ['Friday', 1, "A Plus"], ['Dryday', 4, "B Minus"]],
};
const twoDArrayData = [
    ['name', 'class', 'number'],
    ['Jon', 7, 99],
    ['Ron', 13, 233],
    ['Akon', 12, 13],
];

const singleRowObjectData = {
    header: ['only', 'one', 'row'],
    table: [['single', 'row', 'data']],
};

console.log('Markdown for array:');
console.log(omd(arrayData));
console.log(omd(arrayData, { align: ['left'] }));

console.log('\nMarkdown for object with different alignments:');
console.log(omd(objectData, { align: ['left', 'center', 'right'] }));

console.log('\nMarkdown for object with single alignment:');
console.log(omd(objectData, { align: ['center'] }));

console.log('\nMarkdown for 2D array with different alignments:');
console.log(omd(twoDArrayData, { align: ['center', 'left', 'right'] }));

console.log('\nMarkdown for 2D array with single alignment:');
console.log(omd(twoDArrayData, { align: ['center'] }));

console.log('\nMarkdown for empty array:');
try {
    console.log(omd(emptyArrayData));
} catch (error) {
    console.error('Error:', error.message);
}

console.log('\nMarkdown for single element array:');
console.log(omd(singleElementArrayData));

console.log('\nMarkdown for empty object:');
try {
    console.log(omd(emptyObjectData));
} catch (error) {
    console.error('Error:', error.message);
}

console.log('\nMarkdown for single row object:');
console.log(omd(singleRowObjectData, { align: ['right', 'center', 'left'] }));
