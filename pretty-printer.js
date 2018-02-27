/**

Traverse each node in the syntax tree, instantiate it and then normalise into a unambiguous string.

Pretty printing - Process of visiting each node in the syntax tree and then converting the whole tree into an
unambiguous string (opposite of a parser, to be precise).

*/

// Visitor class
class Visitor {
  visitBinaryExpr(binary) {}
  visitUnaryExpr(unary) {}
  visitLiteralExpr(literal) {}
  visitGroupingExpr(grouping) {}
}

// Base expression class which will be used to derive sub expression classes
// We will define helpers inside this class so to handle different kinds of expressions
class Expr {
  accept(visitor) {}
}

// Binary expression (1+2)
class Binary extends Expr {
  constructor(left, operator, right) {
    super()
    this.left = left
    this.operator = operator
    this.right = right
  }

  // visit the node in AST
  accept(visitor) {
    return visitor.visitBinaryExpr(this)
  }
}

// Unary expression (-1)
class Unary extends Expr {
  constructor(operator, right) {
    super()
    this.operator = operator
    this.right = right
  }

  accept(visitor) {
    return visitor.visitUnaryExpr(this)
  }
}

// Literal expression ('12')
class Literal extends Expr {
  constructor(value) {
    super()
    this.value = value
  }

  accept(visitor) {
    return visitor.visitLiteralExpr(this)
  }
}

// Grouping expression (group 12)
class Grouping extends Expr {
  constructor(expression) {
    super()
    this.expression = expression
  }

  accept(visitor) {
    return visitor.visitGroupingExpr(this)
  }
}

// Pretty prints the nodes in our tree as a string
class Prettier extends Visitor {
  constructor() {
    super()
  }

  visitBinaryExpression(expr) {
    return this.parenthesize(expr.operator, expr.left, expr.right)
  }

  visitLiteralExpression(expr) {
    if (expr.value === null) return 'null'

    return String(expr.value)
  }

  visitGroupingExpression(expr) {
    return this.parenthesize('group', expr.expression)
  }

  visitUnaryExpression(expr) {
    return this.parenthesize(expr.operator, expr.right)
  }

  prettify(name, ...exprs) {
    let arr = []

    arr.push('(')
    arr.push(name)

    for (let expr in exprs) {
      arr.push(' ')
      arr.push(exprs[expr].accept(this))
    }

    arr.push(')')
    return arr.join('')
  }

  render(expr) {
    return expr.accept(this)
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

const obj = new Prettier()

console.log(obj.main())
