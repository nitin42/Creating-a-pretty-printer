# Creating-a-pretty-printer

> This is a tutorial for creating a pretty printer in JavaScript

## Introduction

This tutorial is about creating a pretty printer in JavaScript to pretty print a very small subset of a grammar, which we will define in later parts. But first of all, what is pretty printing ? I won't throw a very academic definition at you because I want to keep the things simple.

So before I define what is pretty printing, first let's understand what does a parser do ? A parser takes a string of source code and then uses it to construct an abstract syntax tree. Pretty printing is totally opposite of this process (approximately). It takes the abtract syntax tree and then produces a string of text from it which validates the syntax of our language.

## Prerequisite

For this tutorial, we will be using a design pattern called ***visitor pattern*** because we will be dealing with each node in our tree and this pattern will be really helpful. I assume you know what is visitor pattern and how to use it. If not, then I've also written an article about it which you can find [here](https://medium.com/@NTulswani/embracing-functional-style-within-object-oriented-paradigm-3e5e0fe5ccf).

## Tools and Language

We will be using JavaScript.

## Who should read this tutorial ?

Casual programmers!

## What we will build ?

We will create a basic printer to pretty print each node in the syntax tree in **Lisp style**.

Considering that we have this syntax tree -

```
{
  Expression: {
    BinaryExpression: {
      left: {
        LiteralExpression: {
          value: 12
        }
      },
      operator: '*',
      right: {
        BinaryExpression: {
          left: {
            LiteralExpression: {
              value: 10
            }
          },
          operator: '-',
          right: {
            LiteralExpression: {
              value: 20
            }
          }
        }
      }
    }
  }
}
```

The printer will output the below code -

```lisp
(* 12 (- 10 20))
```

## Overview

We will be covering:

* [Defining grammar](./grammar.md)

* [Creating visitor interface](./visitor.md)

* [Defining expression class for each node in our tree](./expression.md)

* [Creating a helper class using inheritance to traverse each node in our tree and pretty print the node](./printer.md)

I promise not to bore you with the language theory around formal grammars, Chomsky hierarchy, and other academic material. I am sure you will enjoy reading this tutorial.

## Why should I care ?

Hmm... may be you are interested in understanding the magic behind the tools that make your code look pretty.
