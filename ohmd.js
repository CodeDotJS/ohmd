const arrayToMarkdownTable = (array, options = {}) => {
    return array.map(item => `| ${item} |`).join('\n');
};

const objectToMarkdownTable = (obj, options = {}) => {
    const { header, table } = obj;
    if (!Array.isArray(header) || !Array.isArray(table)) {
        throw new Error('Invalid object format. Ensure "header" and "table" are arrays.');
    }

    const alignments = normalizeAlignments(options.align, header.length);
    const headerRow = `| ${header.join(' | ')} |`;
    const separatorRow = `| ${header.map((_, index) => getAlignmentSeparator(alignments[index])).join(' | ')} |`;
    const tableRows = table.map(row => `| ${row.join(' | ')} |`).join('\n');

    return `${headerRow}\n${separatorRow}\n${tableRows}`;
};

const twoDArrayToMarkdownTable = (array, options = {}) => {
    const header = array[0] || [];
    const table = array.slice(1);
    return objectToMarkdownTable({ header, table }, options);
};

const getAlignmentSeparator = align => {
    switch (align) {
        case 'left':
            return ':---';
        case 'right':
            return '---:';
        case 'center':
            return ':---:';
        default:
            return '---';
    }
};

const normalizeAlignments = (align, length) => {
    if (!align || align.length === 0) {
        return Array(length).fill('---');
    }
    if (align.length === 1) {
        return Array(length).fill(align[0]);
    }
    return align;
};

module.exports = {
    arrayToMarkdownTable,
    objectToMarkdownTable,
    twoDArrayToMarkdownTable,
};
