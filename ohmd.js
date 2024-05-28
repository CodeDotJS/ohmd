function padCell(cell, width) {
    return cell + ' '.repeat(width - cell.length);
}

function padRow(row, widths) {
    return row.map((cell, index) => padCell(cell, widths[index]));
}

function getColumnWidths(table) {
    const widths = [];
    table.forEach(row => {
        row.forEach((cell, index) => {
            const cellLength = cell.toString().length;
            widths[index] = Math.max(widths[index] || 0, cellLength);
        });
    });
    return widths;
}

function arrayToMarkdownTable(arrayData, options = {}) {
    if (arrayData.length === 0) {
        throw new Error('The array is empty.');
    }

    const padding = options.padding || false;

    const header = ['Value'];
    const table = arrayData.map(item => [item.toString()]);

    if (padding) {
        const widths = getColumnWidths([header, ...table]);
        table.forEach((row, index) => table[index] = padRow(row, widths));
    }

    return [
        `| ${header.join(' | ')} |`,
        `|${'-'.repeat(header[0].length)}|`,
        ...table.map(row => `| ${row.join(' | ')} |`)
    ].join('\n');
}

function objectToMarkdownTable(objectData, options = {}) {
    if (objectData.header.length === 0 && objectData.table.length === 0) {
        throw new Error('The object has no data.');
    }

    const padding = options.padding || false;
    const align = options.align || [];
    const { header, table } = objectData;

    if (padding) {
        const widths = getColumnWidths([header, ...table]);
        header = padRow(header, widths);
        table.forEach((row, index) => table[index] = padRow(row, widths));
    }

    const alignments = align.map(a => {
        switch (a) {
            case 'left': return ':-';
            case 'right': return '-:';
            case 'center': return ':-:';
            default: return '---';
        }
    });

    const alignmentRow = align.length > 0
        ? `|${alignments.map(a => ' ' + a + ' ').join('|')}|`
        : `|${'-'.repeat(header[0].length)}|`;

    return [
        `| ${header.join(' | ')} |`,
        alignmentRow,
        ...table.map(row => `| ${row.join(' | ')} |`)
    ].join('\n');
}

function twoDArrayToMarkdownTable(twoDArrayData, options = {}) {
    if (twoDArrayData.length === 0) {
        throw new Error('The 2D array is empty.');
    }

    const padding = options.padding || false;
    const align = options.align || [];

    const header = twoDArrayData[0];
    const table = twoDArrayData.slice(1);

    if (padding) {
        const widths = getColumnWidths(twoDArrayData);
        header = padRow(header, widths);
        table.forEach((row, index) => table[index] = padRow(row, widths));
    }

    const alignments = align.map(a => {
        switch (a) {
            case 'left': return ':-';
            case 'right': return '-:';
            case 'center': return ':-:';
            default: return '---';
        }
    });

    const alignmentRow = align.length > 0
        ? `|${alignments.map(a => ' ' + a + ' ').join('|')}|`
        : `|${'-'.repeat(header[0].length)}|`;

    return [
        `| ${header.join(' | ')} |`,
        alignmentRow,
        ...table.map(row => `| ${row.join(' | ')} |`)
    ].join('\n');
}

module.exports = {
    arrayToMarkdownTable,
    objectToMarkdownTable,
    twoDArrayToMarkdownTable
};
