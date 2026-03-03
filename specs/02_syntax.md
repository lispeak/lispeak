# Syntax

Lispeak syntax is based on lambda calculus. All the opposite

| Word | Replacement Symbol | Pseudo Lambda Calculus Equivalent | Description         |
| ---- | ------------------ | --------------------------------- | ------------------- |
| o    | `(`                | `(`                               | Opening parenthesis |
| e    | `)`                | `)`                               | Closing parenthesis |
| yo   | `->`               | `λ.`                              | Lambda              |
| ye   | `<-`               | `=`                               | Naming expression   |

Lispeak uses [Polish prefix notation](https://en.wikipedia.org/wiki/Polish_notation):

```
o operation operand1 operand2 operand3 e
```

Examples:

| Lispeak Expression           | Replacement Symbolic Expression | Pseudo Lambda Calculus Equivalent |
| ---------------------------- | ------------------------------- | --------------------------------- |
| X                            | `X`                             | `X`                               |
| o X Y e                      | `(X Y)`                         | `X Y`                             |
| o ye X o Y Z e e             | `(<- X (Y Z))`                  | `X = (Y Z)`                       |
| o yo X o yo Y X e e          | `(-> X (-> Y X))`               | `λX. λY. X`                       |
| o ye X o yo Y o yo Z Y e e e | `(<- X (-> Y (-> Z Y)))`        | `X = λY. λZ. Y`                   |

In spoken Lispeak, each successive opening parenthesis “o” is pronounced one pitch higher and each closing “e” one pitch lower, so that syntactic nesting is encoded directly in melodic contour.

## Groups

Lispeak is based on ideas of groups and symmetries from the group theory.

Every meaning in Lispeak should be a group:

- It should have neutral element (identity)
- It should have negation operation (not)

| Group meaning | Symbols | Lispeak Example | Meaning                 |
| ------------- | ------- | --------------- | ----------------------- |
| Identity      | `i`     | i verb          | Leaves the same meaning |
| Negation      | `ii`    | ii verb         | Negates the meaning     |

<!-- ## Chaining

Because in Polish notation it's not easy to chain function calls we need two special chaining operations:

| Word | Replacement Symbol | Description                 |
| ---- | ------------------ | --------------------------- |
| u    | `<<`               | Chaining by first parameter |
| yu   | `>>`               | Chaining by last parameter  |

Examples:

| Lispeak Expression | Replacement Symbolic Expression | Equivalent |
| ------------------ | ------------------------------- | ---------- |
| o u a b c yo       | `(<< a b c)`                    | `c(b(a))`  |
| o yu a b c yo      | `(>> a b c)`                    | `c(b(a))`  | -->

<!-- TODO: something is wrong here. fix -->
<!-- Based on https://github.com/una-language/una-language/blob/master/DOCS.md#chaining-symmetry -->
