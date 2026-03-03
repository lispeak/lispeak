# Semantics

Lispeak is based on ideas of groups and symmetries from the group theory.

Every meaning in Lispeak should be a group:

- It should have neutral element (identity)
- It should have negation operation (not)

| Group meaning | Symbols | Lispeak Example | Meaning                 |
| ------------- | ------- | --------------- | ----------------------- |
| Identity      | a       | a verb          | Leaves the same meaning |
| Negation      | ya      | ya verb         | Negates the meaning     |

The words in Lispeak can be only verbs and nouns:

- Verb is function. Its name always starts with vowel
- Noun is value. Its name always starts with consonant

Every verb can have suffix modifiers that go after `'` letter:

```
verb'mod1mod2mod3
```

## Tense

Tense is based on group ℤ ⋊ Z₂ (semidirect product Z with Z₂) together with `e` and `ye`:

| Type   | Suffix | Straight form | Verb suffix form |
| ------ | ------ | ------------- | ---------------- |
| Past   | `ru`   | `(ru verb)`   | `verb'ru`        |
| Future | `ryu`  | `(ryu verb)`  | `verb'ryu`       |

Example of negation:

```
ya (ryu verb) = ru verb
```

## Aspect

Aspect is based on group Z₂:

| Type               | Suffix | Straight form | Verb suffix form | Default suffix form |
| ------------------ | ------ | ------------- | ---------------- | ------------------- |
| Complete (default) | `tu`   | `(tu verb)`   | `verb'tu`        | `verb`              |
| Incomplete process | `tyu`  | `(ryo verb)`  | `verb'tyu`       | `verb'tyu`          |

Example of negation:

```

```

## Voice

Voice is based on group Z₂:

| Type             | Suffix | Straight form | Verb suffix form |
| ---------------- | ------ | ------------- | ---------------- |
| Active (default) | ``     | `(re verb)`   | `verb're`        |
| Passive          | `rye`  | `(rya verb)`  | `verb'rye`       |

Example of negation:

```
ya (rya verb) = re verb
```
