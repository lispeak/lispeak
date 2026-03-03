## Syntax

Lispeak syntax is based on lambda calculus.

| Word | Replacement Symbol | Pseudo Lambda Calculus Equivalent | Description         |
| ---- | ------------------ | --------------------------------- | ------------------- |
| o    | `(`                | `(`                               | Opening parenthesis |
| yo   | `)`                | `)`                               | Closing parenthesis |
| a    | `<-`               | `=`                               | Naming expression   |
| ya   | `->`               | `λ.`                              | Lambda              |

Lispeak uses [Polish prefix notation](https://en.wikipedia.org/wiki/Polish_notation):

```
o operation operand1 operand2 operand3 yo
```

Examples:

| Lispeak Expression             | Replacement Symbolic Expression | Pseudo Lambda Calculus Equivalent |
| ------------------------------ | ------------------------------- | --------------------------------- |
| X                              | `X`                             | `X`                               |
| o X Y yo                       | `(X Y)`                         | `X Y`                             |
| o a X o Y Z yo yo              | `(<- X (Y Z))`                  | `X = (Y Z)`                       |
| o ya X o ya Y X yo yo          | `(-> X (-> Y X))`               | `λX. λY. X`                       |
| o a X o ya Y o ya Z Y yo yo yo | `(<- X (-> Y (-> Z Y)))`        | `X = λY. λZ. Y`                   |
