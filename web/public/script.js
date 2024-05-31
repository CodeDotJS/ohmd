document.getElementById('convert-button').addEventListener('click', () => {
    const inputData = document.getElementById('input-data').value;
    let data;

    try {
        data = JSON.parse(inputData);
    } catch (error) {
        showMessage('Invalid JSON format.', 'error');
        return;
    }

    fetch('/markdown-table', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data, options: data.options }),
    })
    .then(response => response.text())
    .then(markdownTable => {
        document.getElementById('output-markdown').textContent = markdownTable;
    })
    .catch(error => {
        console.error('Error:', error);
        showMessage('An error occurred while converting the data.', 'error');
    });
});

document.getElementById('copy-button').addEventListener('click', () => {
    const markdownOutput = document.getElementById('output-markdown').textContent;
    navigator.clipboard.writeText(markdownOutput).then(() => {
        showMessage('Markdown copied to clipboard!', 'success');
    });
});

function showMessage(message, type) {
    const messageContainer = document.getElementById('message-container');
    messageContainer.textContent = message;
    messageContainer.classList.remove('error', 'success');
    messageContainer.classList.add(type);
    messageContainer.classList.add('show');

    setTimeout(() => {
        messageContainer.classList.remove('show');
    }, 3000);
}
const exampleDropdown = document.getElementById('example-dropdown');
const inputDataTextarea = document.getElementById('input-data');

const examples = {
    'snippet1': '{\n    "header": ["Day", "Rank", "Grade"],\n    "table": [\n        ["Tuesday", 7, "C Minus"],\n        ["Friday", 1, "A Plus"],\n        ["Dryday", 4, "B Minus"]\n    ]\n}',
    'snippet2': '{\n    "header": ["Name", "Age", "City"],\n    "table": [\n        ["Alice", 30, "New York"],\n        ["Bob", 25, "San Francisco"],\n        ["Charlie", 35, "Los Angeles"]\n    ],\n    "options": {\n        "align": ["left", "center", "right"]\n    }\n}',
    'snippet3': '[\n    ["Product", "Price", "Quantity"],\n    ["Apple", "$1", 50],\n    ["Banana", "$0.5", 100],\n    ["Cherry", "$2", 200]\n]',
    'snippet4': '["Item 1", "Item 2", "Item 3"]',
    'snippet5': '{\n    "header": ["ID", "Name", "Active"],\n    "table": [\n        [1, "John Doe", true],\n        [2, "Jane Smith", false],\n        [3, "Sam Brown", true]\n    ]\n}',
    'snippet6': '{\n    "header": ["Country", "Capital", "Population"],\n    "table": [\n        ["USA", "Washington D.C.", 331002651],\n        ["Canada", "Ottawa", 37742154],\n        ["United Kingdom", "London", 67886011]\n    ]\n}',
    'snippet7': '{\n    "table": [\n        ["Alice", 30, "New York"],\n        ["Bob", 25, "San Francisco"],\n        ["Charlie", 35, "Los Angeles"]\n    ]\n}',
    'snippet8': '[\n    ["Header1", "Header2", "Header3"],\n    ["Row1-Col1", "Row1-Col2", "Row1-Col3"],\n    ["Row2-Col1", "Row2-Col2", "Row2-Col3"]\n]'
};

exampleDropdown.addEventListener('change', () => {
    const selectedValue = exampleDropdown.value;
    if (selectedValue in examples) {
        inputDataTextarea.value = examples[selectedValue];
    } else {
        inputDataTextarea.value = '';
    }
});
