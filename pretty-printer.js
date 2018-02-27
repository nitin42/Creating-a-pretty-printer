/**

Traverse each node in the syntax tree, instantiate it and then normalise into a unambiguous string.

Pretty printing - Process of visiting each node in the syntax tree and then converting the whole tree into an
unambiguous string (opposite of a parser, to be precise).

*/

// Visitor class
class Visitor {
  visitBinaryExpression(binary) {}
  visitUnaryExpression(unary) {}
  visitLiteralExpression(literal) {}
  visitGroupingExpression(grouping) {}
}

// Base expression class which will be used to derive sub expression classes
// We will define helpers inside this class so to handle different kinds of expressions
class Expr {
  handle(visitor) {}
}

// Binary expression (1+2)
class Binary extends Expression {
  constructor(left, operator, right) {
    super()
    this.left = left
    this.operator = operator
    this.right = right
  }

  // visit the node in AST
  handle(visitor) {
    return visitor.visitBinaryExpression(this)
  }
}

// Unary expression (-1)
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

// Literal expression ('12')
class Literal extends Expression {
  constructor(value) {
    super()
    this.value = value
  }

  handle(visitor) {
    return visitor.visitLiteralExpression(this)
  }
}

// Grouping expression (group 12)
class Grouping extends Expression {
  constructor(expression) {
    super()
    this.expression = expression
  }

  handle(visitor) {
    return visitor.visitGroupingExpression(this)
  }
}

// Pretty prints the nodes in our tree as a string
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

const obj = new Printer()

console.log(obj.main())
