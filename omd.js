const toMarkdownTable = (data, options = {}) => {
    if (Array.isArray(data)) {
        if (Array.isArray(data[0])) {
            return twoDArrayToMarkdownTable(data, options);
        } else {
            return arrayToMarkdownTable(data, options);
        }
    } else if (typeof data === 'object' && data !== null) {
        return objectToMarkdownTable(data, options);
    } else {
        throw new Error('Unsupported data format.');
    }
};

const arrayToMarkdownTable = (array, options = {}) => {
    const alignments = normalizeAlignments(options.align, 1);
    const separatorRow = `| ${getAlignmentSeparator(alignments[0])} |`;
    const tableRows = array.map(item => `| ${item} |`).join('\n');
    return `${separatorRow}\n${tableRows}`;
};

const objectToMarkdownTable = (obj, options = {}) => {
    const { header, table } = obj;
    const hasHeader = Array.isArray(header) && header.length > 0;
    const alignments = normalizeAlignments(options.align, hasHeader ? header.length : 0);

    let headerRow = '';
    let separatorRow = '';
    if (hasHeader) {
        headerRow = `| ${header.join(' | ')} |\n`;
        separatorRow = `| ${header.map((_, index) => getAlignmentSeparator(alignments[index])).join(' | ')} |\n`;
    }

    const tableRows = table.map(row => `| ${row.join(' | ')} |\n`).join('');

    return `${headerRow}${separatorRow}${tableRows}`;
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

module.exports = toMarkdownTable;
