# Visitor pattern

## What is visitor pattern ?

> Defining an operation or behaviour of a class or a type in one interface and then use that interface by polymorphism to provide the behaviour to the required class or type.

or in simple words,

> Define behaviour in one place for a set of classes or types without having to touch the class or that type itself.

Visitor pattern lets us use functional programming within object-oriented paradigm. I won't go into much details about this pattern in this tutorial as I've already written a complete description about it [here](https://medium.com/@NTulswani/embracing-functional-style-within-object-oriented-paradigm-3e5e0fe5ccf).

We will be using this pattern to visit a particular type of node in our syntax tree and perform an operation.

So let's define a `Visitor` class without further edo.

```js
class Visitor {
  visitBinaryExpression(binary) {}
  visitUnaryExpression(unary) {}
  visitLiteralExpression(literal) {}
  visitGroupingExpression(grouping) {}
}

```

The `Visitor` class defines methods for visiting a specific node in the syntax tree. Each method accepts a corresponding reference to the expression class (node) which we will visit.

[Move to the next section](./expression.md)
