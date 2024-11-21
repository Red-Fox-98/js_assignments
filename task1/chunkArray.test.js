const chunkArray = require('./chunkArray');

test('add [1, 2, 3, 4, 5, 6, 7, 8], 2 to equal [[1, 2], [3, 4], [5, 6], [7, 8]]', () => {
    expect(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2)).toStrictEqual([ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ]);
});

test('add [1, 2, 3, 4, 5, 6, 7, 8], 3 to equal [[1, 2, 3], [4, 5, 6], [7, 8]]', () => {
    expect(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)).toStrictEqual([ [ 1, 2, 3], [ 4, 5, 6 ], [ 7, 8 ] ]);
});

