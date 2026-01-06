# Lispeak

LISP you can speak!

## Inspiration

Lispeak is inspired by:

- [Lambda-calculus](https://en.wikipedia.org/wiki/Lambda_calculus)
- [Lisp](https://en.wikipedia.org/wiki/Lisp)
- [Lojban](https://en.wikipedia.org/wiki/Lojban)
- [Group theory](https://en.wikipedia.org/wiki/Group_theory)

Originally the idea of this language was described and explained in [this post](https://habr.com/ru/articles/902574) of mine (in Russian)

## Features

The goal of the project is to create a language that you can speak on and compile at the same time.

- Language specification should be stored in git and developed by pull requests
- Language specification should be described in TypeScript and to be based on functions
- Every sentence should be an S-expression
- Every sentence should be pronouncable
- Every sentence should be executable on computer
- Language should sound well
- Language should be fully compatible with words from any other natural language

## Alphabet

Lispeak uses the following letters:

```
abcdefghijklmnoprstuvxyz
```

### Consonants

| Symbol | Sound in English | Russian Equivalent |
| ------ | ---------------- | ------------------ |
| b      | bagel            | б                  |
| c      | <b>sh</b>ark     | ш                  |
| d      | desk             | д                  |
| f      | fat              | ф                  |
| g      | great            | г                  |
| h      | Ba<b>ch</b>      | х                  |
| j      | mea<b>s</b>ure   | ж                  |
| k      | kill             | к                  |
| l      | lake             | л                  |
| m      | maybe            | м                  |
| n      | neck             | н                  |
| p      | pepper           | п                  |
| r      | river            | р                  |
| s      | snake            | с                  |
| t      | table            | т                  |
| v      | vast             | в                  |
| x      | <b>ch</b>ipotle  | ч                  |
| y      | may / (fr.) Paul | й/ь                |
| z      | ooze             | з                  |

### Vowels

Basic vowels are

| Symbol | Sound in English | Russian Equivalent |
| ------ | ---------------- | ------------------ |
| a      | father           | а                  |
| o      | open             | о                  |
| e      | bet              | э                  |
| u      | moon             | у                  |
| i      | -                | ы                  |

Adding `y` before the basic vowel we create a derivative vowel

| Symbol | Sound in English | Russian Equivalent |
| ------ | ---------------- | ------------------ |
| ya     | yard             | я                  |
| yo     | yoga             | ё                  |
| ye     | yes              | е                  |
| yu     | <b>u</b>se       | ю                  |
| yi     | mach<b>i</b>ne   | и                  |

### Special signs

| Symbol | Description                               | Russian Equivalent |
| ------ | ----------------------------------------- | ------------------ |
| '      | stop or a pause in the middle of the word | ъ                  |

## Symmetry

Lispeak is based on ideas of groups and symmetries from the group theory. <br/>
Every meaning in Lispeak should be a group:

- It should have neutral element (identity)
- It should have negation operation (not)

Neutral element and negation has phonetic difference. <br/>
Letter `y` works as negation operation for vowels - so the same word but starting with `o` and starting with `yo` have opposite meanings.

## Syntax

Lispeak syntax is based on lambda calculus.

| Word | Replacement Symbol | Lambda Calculus Equivalent | Description         |
| ---- | ------------------ | -------------------------- | ------------------- |
| o    | `(`                | `(`                        | Opening parenthesis |
| yo   | `)`                | `(`                        | Closing parenthesis |
| a    | `<-`               | `=`                        | Naming expression   |
| ya   | `->`               | `λ.`                       | Lambda              |

Lispeak uses [prefix notation](https://en.wikipedia.org/wiki/Polish_notation):

```
o operation operand1 operand2 operand3 yo
```

So let's check some expressions out:

| Lispeak Expression        | Replacement Symbolic Expression | Lambda Calculus Equivalent |
| ------------------------- | ------------------------------- | -------------------------- |
| X                         | `X`                             | `X`                        |
| o X Y yo                  | `(X Y)`                         | `(X Y)`                    |
| o a X o Y Z yo yo         | `(<- X (Y Z))`                  | `X = (Y Z)`                |
| o ya X ya Y X yo          | `(-> X -> Y X)`                 | `(λ.X λ.Y X)`              |
| o a X o ya Y ya Z Y yo yo | `(<- X (-> Y -> Z Y))`          | `X = (λ.Y λ.Z Y)`          |

## Morphology

The basic idea of Lispeak morphology is phonetic symmetry using pair sounds like `a` and `ya` or `f` and `v` for symmetric meanings like `left` and `right`, `beautiful` and `ugly`, `subject` and `object`, `cold` and `hot`. It will be based on something similar to consonant roots and binyanim in Hebrew.

## Digits and Numerals

Digits in Lispeak are based on vowels in alphabetic order:

| Digit | Lispeak | Russian Pronunciation |
| ----- | ------- | --------------------- |
| 0     | `ana`   | `ана`                 |
| 1     | `yana`  | `яна`                 |
| 2     | `ena`   | `эна`                 |
| 3     | `yena`  | `ена`                 |
| 4     | `ina`   | `ына`                 |
| 5     | `yina`  | `ина`                 |
| 6     | `ona`   | `она`                 |
| 7     | `yona`  | `ёна`                 |
| 8     | `una`   | `уна`                 |
| 9     | `yuna`  | `юна`                 |

To construct a numberal you can use first sounds of digits separated by `'` with `a` on the end:

| Number | Lispeak          | Russian Pronunciation |
| ------ | ---------------- | --------------------- |
| 12     | `yan'ena`        | `ян-эна`              |
| 586    | `yin'un'ona`     | `ин-ун-она`           |
| 9470   | `yun'in'yon'ana` | `юн-ын-ён-ана`        |
