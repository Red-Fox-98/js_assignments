function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const original = {
    name: 'John',
    address: {
        city: 'New York',
        country: 'USA'
    }
};
const copy = deepClone(original);
copy.address.city = 'Los Angeles';
console.log(original.address.city); // New York (оригинальный объект не должен измениться)
console.log(copy.address.city); // Los Angeles

module.exports.deepClone = deepClone;
module.exports.original = original;
