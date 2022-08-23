class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }

  *[Symbol.iterator]() {
    yield this.content;
    for (let child of this.children) {
      yield* child;
    }
  }
}

const children = [
  new Comment("good", []),
  new Comment("bad", []),
  new Comment("meh", []),
];

const tree = new Comment("great", children);

const values = [];

for (let value of tree) {
  values.push(value);
}

values;
