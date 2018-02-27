# Printer

In this section, we will be creating a very basic `printer` which will visit each node in the tree and pretty print the source code as a string.

> Pretty printing takes a abstract syntax tree and converts it into a string.

Let's dive in!

We will be using the `Visitor` class defined [earlier]() to create the `Printer` class and override the visitor methods defined in it.

> Makes sense as we need to visit each node in the syntax tree.

Class definition for `Printer`

```js
class Printer extends Visitor {
  constructor() {
    super()
  }

  visitBinaryExpression(expr) {
    return this.prettyPrint(expr.operator, expr.left, expr.right)
  }

  visitLiteralExpression(expr) {
    if (expr.value === null) return 'null'

    return String(expr.value)
  }

  visitGroupingExpression(expr) {
    return this.prettyPrint('group', expr.expression)
  }

  visitUnaryExpression(expr) {
    return this.prettyPrint(expr.operator, expr.right)
  }

  prettyPrint(name, ...exprs) {
    let arr = []

    arr.push('(')
    arr.push(name)

    for (let expr in exprs) {
      arr.push(' ')
      arr.push(exprs[expr].handle(this))
    }

    arr.push(')')
    return arr.join('')
  }

  render(expr) {
    return expr.handle(this)
  }

  main() {
    const expr = new Binary(
      new Literal("12"),
      "*",
      new Binary(
        new Literal("10"),
        "-",
        new Literal("20")
      )
    )

    return this.render(expr)
  }
}
```

> Please don't yell at me for not using a proper string builder method instead of using Array.join().

Ok! Let's break down the above code into small pieces.

We override the methods defined in `Visitor` class and use them to pretty print a particular expression node in the syntax tree.

For literal expressions, if the value is `null` then we just render `null`. In case of grouping expressions, we use the operator name `group` and render it.

The function `prettyPrint` takes an operator name and an array of other expressions nodes. We then use array as a way of building a string of source code (or string builder).

> In Java, we literally have a StringBuilder() class so no other hacks.

We iterate over all the expression nodes, visit them and then store whatever value they return inside our array. At last, we construct a string from the array and return it.

Finally, we create a method called `render` to instantiate the process of pretty printing. It takes the expression node (in the above example, `Binary` expression node) and traverses down the tree by visiting each node and pretty printing it.

Inside the `main()` method, we construct a basic syntax tree and then use `this.render()` to pretty print each node in our tree.

**Result**

```js
const instance = new Printer()

instance.main() // (* 12 (- 10 20))

```

YEAH! We have now created a pretty printer. I hope you've learned some cool things about working at a lower abstraction where we learned about -

* Visitor pattern

* What is pretty printing

* Language grammar

* Traversing the syntax tree

Let me know if you've any doubts. If you liked reading this tutorial, then ⭐ this repo or share it on the Twitter. I am at [@NTulswani](https://twitter.com/NTulswani).

Thanks for reading the tutorial!
