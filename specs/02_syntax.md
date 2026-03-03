# Syntax

Lispeak syntax is based on lambda calculus.

| Word | Replacement Symbol | Pseudo Lambda Calculus Equivalent | Description         |
| ---- | ------------------ | --------------------------------- | ------------------- |
| o    | `(`                | `(`                               | Opening parenthesis |
| yo   | `)`                | `)`                               | Closing parenthesis |
| e    | `<-`               | `=`                               | Naming expression   |
| ye   | `->`               | `λ.`                              | Lambda              |

Lispeak uses [Polish prefix notation](https://en.wikipedia.org/wiki/Polish_notation):

```
o operation operand1 operand2 operand3 yo
```

Examples:

| Lispeak Expression             | Replacement Symbolic Expression | Pseudo Lambda Calculus Equivalent |
| ------------------------------ | ------------------------------- | --------------------------------- |
| X                              | `X`                             | `X`                               |
| o X Y yo                       | `(X Y)`                         | `X Y`                             |
| o e X o Y Z yo yo              | `(<- X (Y Z))`                  | `X = (Y Z)`                       |
| o ye X o ye Y X yo yo          | `(-> X (-> Y X))`               | `λX. λY. X`                       |
| o e X o ye Y o ye Z Y yo yo yo | `(<- X (-> Y (-> Z Y)))`        | `X = λY. λZ. Y`                   |

In spoken Lispeak, each successive opening parenthesis “o” is pronounced one pitch higher and each closing “yo” one pitch lower, so that syntactic nesting is encoded directly in melodic contour.

## Chaining

Because in Polish notation it's not easy to chain function calls we need two special chaining operations:

| Word | Replacement Symbol | Description                 |
| ---- | ------------------ | --------------------------- |
| u    | `<<`               | Chaining by first parameter |
| yu   | `>>`               | Chaining by last parameter  |

Examples:

| Lispeak Expression | Replacement Symbolic Expression | Equivalent |
| ------------------ | ------------------------------- | ---------- |
| o u a b c yo       | `(<< a b c)`                    | `c(b(a))`  |
| o yu a b c yo      | `(>> a b c)`                    | `c(b(a))`  |

<!-- TODO: something is wrong here. fix -->
<!-- Based on https://github.com/una-language/una-language/blob/master/DOCS.md#chaining-symmetry -->
