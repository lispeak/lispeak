# Semantics

The words in Lispeak can be only verbs and nouns:

- Verb is function. Its name always starts with vowel
- Noun is value. Its name always starts with consonant

Every verb can have suffix modifiers that go after `'` letter:

```
verb'modifier1modifier2modifier3
```

## Tense

Tense is based on group ℤ ⋊ Z₂ (semidirect product Z with Z₂) together with `e` and `ye`:

| Type   | Suffix | Straight form | Verb suffix form |
| ------ | ------ | ------------- | ---------------- |
| Past   | `ru`   | `(ru verb)`   | `verb'ru`        |
| Future | `ra`   | `(ra verb)`   | `verb'ra`        |

Example of negation:

```
ya (ryu verb) = ru verb
```

## Aspect

Aspect is based on group Z₂:

| Type               | Suffix | Straight form | Verb suffix form | Default suffix form |
| ------------------ | ------ | ------------- | ---------------- | ------------------- |
| Complete (default) | `lu`   | `(lu verb)`   | `verb'lu`        | `verb`              |
| Incomplete process | `la`   | `(la verb)`   | `verb'la`        | `verb'tyu`          |

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
