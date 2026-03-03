# Semantics

Lispeak is based on ideas of groups and symmetries from the group theory.

Every meaning in Lispeak should be a group:

- It should have neutral element (identity)
- It should have negation operation (not)

Neutral element and negation has phonetic difference. Letter `y` works as negation operation for vowels - so the same word but starting with `o` and starting with `yo` have opposite meanings.

## Noun / verb

- Verb is function
- Noun is value
- Verb always starts with vowel
- Noun always starts with consonant

Verb is arrow function from one value to another.
This arrow itselft creates two values based on philosophy "Difference and Repetition" by Gilles Deleuze.

## Suffix modifiers

Every verb can have suffix modifiers that go after `'` letter:

```
verb'mod1mod2mod3
```

### Active / passive voice

```

```

### Past / future

Time is based on group ℤ ⋊ Z₂ (semidirect product Z with Z₂):

| Group meaning   | Meaning | Symbols | Example                                     | Verb suffix form |
| --------------- | ------- | ------- | ------------------------------------------- | ---------------- |
| Identity        | Present | ro      | ro go = go                                  | go               |
| Shift to past   | Past    | ru      | ru go = went                                | go'ru            |
| Shift to future | Future  | ryu     | ryu go = will go                            | go'ryu           |
| Reflection      | Negate  | ryo     | ryo (ryu go) = ryo (will go) = ru go = went | -                |

### Complete / process

| Type                    | Suffix | Pseudo Lispeak Example |
| ----------------------- | ------ | ---------------------- |
| Complete                | `ro`   | go'ruro - went         |
| Incomplete (in process) | `ryo`  | go'ruryo - was going   |
