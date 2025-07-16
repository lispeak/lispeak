# Lispeak

Lispeak is a project to create a constructed language

## Inspiration

Lispeak is inspired by:

- [Lambda-calculus](https://en.wikipedia.org/wiki/Lambda_calculus)
- [Lisp](https://en.wikipedia.org/wiki/Lisp)
- [Lojban](https://en.wikipedia.org/wiki/Lojban)
- [Group theory](https://en.wikipedia.org/wiki/Group_theory)

## Goals

The main goal of this project is to create a constucted language with the following parameters:

- Grammar is based on functions
- Grammar is fully described in Lispeak itself
- Grammar development is git-based
- Every sentence is an S-expression
- Every sentence can be spoken
- Every sentence can be executed on computer
- Every word morphology is based on symmetries of the group theory
- Language is fully compatible with any natural language (you can use words from your language)
- Language sounds well

## Alphabet

Alphabet of Lispeak is mostly taken from Lojban with a few small changes.

```
abcdefghijklmnoprstuvxyz
```

### Consonants

| Symbol | Description                   | Example Word     | Russian Equivalent |
| ------ | ----------------------------- | ---------------- | ------------------ |
| b      | Voiced bilabial stop          | bagel            | б                  |
| c      | Unvoiced coronal sibilant     | <b>sh</b>ark     | ш                  |
| d      | Voiced dental/alveolar stop   | desk             | д                  |
| f      | Unvoiced labial fricative     | fat              | ф                  |
| g      | Voiced velar stop             | great            | г                  |
| h      | Unvoiced velar fricative      | Ba<b>ch</b>      | х                  |
| j      | Voiced coronal sibilant       | mea<b>s</b>ure   | ж                  |
| k      | Unvoiced velar stop           | kill             | к                  |
| l      | Voiced lateral approximant    | lake             | л                  |
| m      | Voiced bilabial nasal         | maybe            | м                  |
| n      | Voiced dental or velar nasal  | neck             | н                  |
| p      | Unvoiced bilabial stop        | pepper           | п                  |
| r      | Rhotic sound                  | river            | р                  |
| s      | Unvoiced alveolar sibilant    | snake            | с                  |
| t      | Unvoiced dental/alveolar stop | tarp             | т                  |
| v      | Voiced labial fricative       | vast             | в                  |
| x      | Voiceless palatal affricate   | <b>ch</b>ipotle  | ч                  |
| y      | Voiced palatal approximant    | may / (fr.) Paul | й/ь                |
| z      | Voiced alveolar sibilant      | ooze             | з                  |

### Vowels

| Symbol | Description       | Example Word | Russian Equivalent |
| ------ | ----------------- | ------------ | ------------------ |
| a      | Open vowel        | father       | а                  |
| o      | Back mid vowel    | open         | о                  |
| e      | Front mid vowel   | bet          | э                  |
| u      | Back close vowel  | moon         | у                  |
| i      | Front close vowel | machine      | и                  |

With help of the `y` consonant we can create derivative vowels:

| Symbol | Description      | Example Word | Russian Equivalent |
| ------ | ---------------- | ------------ | ------------------ |
| ya     | Open vowel       | yard         | я                  |
| yo     | Back mid vowel   | yoga         | ё                  |
| ye     | Front mid vowel  | yes          | е                  |
| yu     | Back close vowel | use          | ю                  |

### Special signs

| Symbol | Description                               | Example Word | Russian Equivalent |
| ------ | ----------------------------------------- | ------------ | ------------------ |
| '      | stop or a pause in the middle of the word |              | ъ                  |

## Symbols

In Lispeak you can use symbols in text that have defined pronounciation: 

| Symbol | Pronounciacion | Meaning           |
| ------ | -------------- | ----------------- |
| `(`    | u              | Left parenthesis  |
| `)`    | yu             | Right parenthesis |
| `<-`   | o              | Define            |
| `->`   | yo             | Function          |
| `<=`   | ao             | Await             |
| `=>`   | ayo            | Async function    |

## Core

The Lispeak language is based on minimalistic syntax core.

### Application

All sentenses in Lispeak are S-expressions of application operation to operands in prefix notation just like in Lisp:

```
(operation operand1 operand2 operand3)
```

So `I love you` in Lispeak is like `(love I you)`.

Symbol `(` is pronounced as `u` and symbol `)` is pronounced as `yu`. So instead of parentheses you can use words `u` and `yu`:

```
u operation operand1 operand2 operand3 yu
```

### Definition

The most commonly use operation is definition of equality that is used for creating named expressions. It uses symbol `=` or word `o`.

```
(<- {left} {right})
```
Read as: 

```
u o {left} {right} yu
```

It means `left equals right`
E.g. to say `Alice is a doctor`:

```
u o elis doktor yu
```

### Function

Labmda functions are defined with symbol `->` and word `yo` like:

```
(-> (a b) (+ a b))
```

It's pronounced like:

```
u yo u a b yu u + a b yu yu
```

## Morphology

The basic idea of Lispeak morphology are symmetries. In language there're a lot of words with opposite meanings. In Lispeak these words come from one root in different morphological forms. So many roots have left and right forms like:

| Left     | Right     |
| -------- | --------- |
| left     | right     |
| down     | up        |
| back     | forward   |
| negative | positive  |
| ugly     | beautiful |
| dark     | light     |
| minus    | plus      |
| from     | to        |
| pull     | push      |
| no       | yes       |
| static   | dynamic   |
| war      | peace     |

It will be created later
