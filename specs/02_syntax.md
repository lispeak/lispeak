# Syntax

Lispeak syntax is based on lambda calculus.

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

| Lispeak Expression          | Replacement Symbolic Expression | Pseudo Lambda Calculus Equivalent |
| --------------------------- | ------------------------------- | --------------------------------- |
| X                           | `X`                             | `X`                               |
| o X Y e                     | `(X Y)`                         | `X Y`                             |
| o ye X o Y Z e e            | `(<- X (Y Z))`                  | `X = (Y Z)`                       |
| o yo X o yo Y X e e         | `(-> X (-> Y X))`               | `λX. λY. X`                       |
| o e X o ye Y o ye Z Y e e e | `(<- X (-> Y (-> Z Y)))`        | `X = λY. λZ. Y`                   |

In spoken Lispeak, each successive opening parenthesis “o” is pronounced one pitch higher and each closing “e” one pitch lower, so that syntactic nesting is encoded directly in melodic contour.

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
