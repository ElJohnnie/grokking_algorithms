function HashTable() {
    this.table = new Array(100);
}

HashTable.prototype.calculateIndex = function(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
        total += key.charCodeAt(i);
    }
    return total % this.table.length;
};

HashTable.prototype.add = function(key, value) {
    const index = this.calculateIndex(key);
    if (!this.table[index]) {
        this.table[index] = [];
    }
    this.table[index].push({ key, value });
};

HashTable.prototype.get = function(key) {
    const index = this.calculateIndex(key);
    if (this.table[index]) {
    for (const element of this.table[index]) {
        if (element.key === key) {
            return element.value;
        }
        }
    }
    return undefined;
};

// Example of usage
const myHashTable = new HashTable();
myHashTable.add("key1", "value1");
myHashTable.add("key2", "value2");

console.log(myHashTable.get("key1")); // Output: value1
console.log(myHashTable.get("key2")); // Output: value2
console.log(myHashTable.get("key3")); // Output: undefined

// with Map

map = new Map();

map.set("key1", "value1");
map.set("key2", "value2");

console.log(map.get("key1")); // value1
console.log(map.get("key2")); // value2
console.log(map.get("key3")); // undefined

