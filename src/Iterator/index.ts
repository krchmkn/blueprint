interface MyIterator<T> {
  next(): T;
  hasNext(): boolean;
}

class ArrayIterator<T> implements MyIterator<T> {
  private collection: T[];
  private index: number = 0;

  constructor(collection: T[]) {
    this.collection = collection;
  }

  next(): T {
    return this.collection[this.index++];
  }

  hasNext(): boolean {
    return this.index < this.collection.length;
  }
}

class ObjectIterator<T> implements MyIterator<T> {
  private collection: T[];
  private index: number = 0;

  constructor(collection: T[]) {
    this.collection = collection;
  }

  next(): T {
    return this.collection[this.index++];
  }

  hasNext(): boolean {
    return this.index < this.collection.length;
  }
}

const collection = [1, 2, 3, 4, 5];
const iterator = new ArrayIterator(collection);

const collection2 = [{ name: "John" }, { name: "Doe" }];
const iterator2 = new ObjectIterator(collection2);

while (iterator.hasNext()) {
  console.log(iterator.next());
}

while (iterator2.hasNext()) {
  console.log(iterator2.next());
}
