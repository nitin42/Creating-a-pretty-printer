# Expressions

In the previous part, we defined a `Visitor` class for visiting a node in the syntax tree.
Now in this section, we will define classes for different types of expressions or you can say nodes which will live inside the syntax tree.

**Base expression class**

We will be defining a base class which will be used to derive a particular expression class (binary, unary, literal or grouping)

```js
class Expression {
  handle(visitor) {}
}

```

The `Expression` class has a method called `handle` which takes an argument `visitor`. This method will be used to handle different nodes in our tree (expression node, literal node, ... etc). We will use polymorphism to override this method in derived classes which we will be creating later.

**Binary expression**

Let's define a class for binary expression which will inherit the base class we defined above:

```js
class Binary extends Expression {
  constructor(left, operator, right) {
    super()
    this.left = left
    this.operator = operator
    this.right = right
  }

  handle(visitor) {
    return visitor.visitBinaryExpression(this)
  }
}

```

I think the code is pretty much self-explanatory. So let's continue to define other classes also.

**Literal expression**

```js
class Literal extends Expression {
  constructor(value) {
    super()
    this.value = value
  }

  handle(visitor) {
    return visitor.visitLiteralExpression(this)
  }
}

```

**Unary expression**

```js
class Unary extends Expression {
  constructor(operator, right) {
    super()
    this.operator = operator
    this.right = right
  }

  handle(visitor) {
    return visitor.visitUnaryExpression(this)
  }
}

```

**Grouping expression**

```js
class Grouping extends Expression {
  constructor(expression) {
    super()
    this.expression = expression
  }

  handle(visitor) {
    return visitor.visitGroupingExpression(this)
  }
}

```

Woah! That's it. Now that we have define different nodes in our tree, now we just need to create a printer to visit each node in the tree and pretty print the source code as a string.

[Move to the next section](./printer.md)
