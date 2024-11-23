function chunkArray(array, size) {
    const chunks = [];
    while (array.length > 0) {
        chunks.push(array.splice(0, size));
    }
    return chunks;
}

module.exports = chunkArray;