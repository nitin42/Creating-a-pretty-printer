# Grammar

In this section, we will define a basic grammar which will be used to validate the code syntax. A grammar consists of set of rules which further contains three types of symbols -

* **Non-terminal symbols** - Think of it like any literal value '1234' or 'if' which don't lead to any further moves. When we approach these symbols, we simply produce that one!

* **Terminal symbols** - These symbols are references (named) to another rules in the grammar. These symbols are used for nest and composing the expressions. Eg - recursion.

* **Start symbol** - starting symbol in the rule.

In the below example, rule name will be followed by a `=>` and the body will consists of **non-terminal, terminal and start symbols**.

```

expression => binary | unary | grouping | literal

literal => "true" | "false" | number | string | "null"

grouping => "(" expression ")"

binary => expression operator expression

unary => ( "-" | "!" ) expression

operator => "===" | "!==" | "<" | "<=" | ">" | ">=" | "+"  | "-"  | "*" | "/"

```

**Rules are used to derive the strings** for example - the rule for binary can be used to derive the string `1 + 2`.

Rules are called **productions** because they produce the strings.

These productions rules are represented as nodes in the abstract syntax tree. We will be manipulating these nodes in the later sections.

That's it. We only require these features in the code that we will use in the tutorial so we won't extend this grammar further.

[Move to the next section](./visitor.md)
