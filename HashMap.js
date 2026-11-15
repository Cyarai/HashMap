class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.size = 0;
    this.buckets = this.makeBuckets(this.capacity);
  }

  makeBuckets(count) {
    const buckets = [];
    for (let i = 0; i < count; i++) {
      buckets.push([]);
    }
    return buckets;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key, value) {
    const bucket = this.buckets[this.hash(key)];

    for (const entry of bucket) {
      if (entry[0] === key) {
        entry[1] = value;
        return;
      }
    }

    bucket.push([key, value]);
    this.size++;

    if (this.size > this.capacity * this.loadFactor) {
      this.grow();
    }
  }

  grow() {
    const oldEntries = this.entries();
    this.capacity = this.capacity * 2;
    this.buckets = this.makeBuckets(this.capacity);
    this.size = 0;

    for (const [key, value] of oldEntries) {
      this.set(key, value);
    }
  }

  get(key) {
    const bucket = this.buckets[this.hash(key)];
    for (const entry of bucket) {
      if (entry[0] === key) return entry[1];
    }
    return undefined;
  }

  has(key) {
    return this.get(key) !== undefined;
  }

  remove(key) {
    const bucket = this.buckets[this.hash(key)];
    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        this.size--;
        return true;
      }
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets = this.makeBuckets(this.capacity);
    this.size = 0;
  }

  keys() {
    const result = [];
    for (const bucket of this.buckets) {
      for (const entry of bucket) result.push(entry[0]);
    }
    return result;
  }

  values() {
    const result = [];
    for (const bucket of this.buckets) {
      for (const entry of bucket) result.push(entry[1]);
    }
    return result;
  }
  w;

  entries() {
    const result = [];
    for (const bucket of this.buckets) {
      for (const entry of bucket) result.push([entry[0], entry[1]]);
    }
    return result;
  }
}

// Extra credit: HashSet (keys only)
class HashSet {
  constructor() {
    this.map = new HashMap();
  }
  add(key) {
    this.map.set(key, true);
  }
  has(key) {
    return this.map.has(key);
  }
  remove(key) {
    return this.map.remove(key);
  }
  length() {
    return this.map.length();
  }
  clear() {
    this.map.clear();
  }
  keys() {
    return this.map.keys();
  }
}

// This line lets other files use these classes
module.exports = { HashMap, HashSet };
