# Semantics

The words in Lispeak can be only verbs and nouns:

- Verb is function. Its name always starts with vowel
- Noun is value. Its name always starts with consonant

Every verb can have suffix modifiers that go after `'` letter:

```
verb'modifier1modifier2modifier3
```

## Tense

Tense is based on group ℤ ⋊ Z₂ (semidirect product Z with Z₂) together with `i` and `ii`:

| Type    | Suffix | Straight form | Verb suffix form |
| ------- | ------ | ------------- | ---------------- |
| Past    | `ra`   | `(ra verb)`   | `verb'ra`        |
| Present | `-`    | `verb`        | `verb`           |
| Future  | `ru`   | `(ru verb)`   | `verb'ru`        |

Example of negation:

```
i (ru verb) = ra verb
```

## Aspect

Aspect is based on group Z₂:

| Type               | Suffix | Straight form | Verb suffix form | Default suffix form |
| ------------------ | ------ | ------------- | ---------------- | ------------------- |
| Complete (default) | `da`   | `(da verb)`   | `verb'da`        | `verb`              |
| Incomplete process | `du`   | `(du verb)`   | `verb'du`        | `verb'du`           |

Example of negation:

```
i (du verb) = da verb
```

## Voice

Voice is based on group Z₂:

| Type             | Suffix | Straight form | Verb suffix form | Default suffix form |
| ---------------- | ------ | ------------- | ---------------- | ------------------- |
| Active (default) | `za`   | `(za verb)`   | `verb'za`        | `verb`              |
| Passive          | `zu`   | `(zu verb)`   | `verb'zu`        | `verb'zu`           |

Example of negation:

```
i (zu verb) = za verb
```
