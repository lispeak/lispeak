# Semantics

The words in Lispeak can be only verbs and nouns:

- Verb is function. Its name always starts with vowel
- Noun is value. Its name always starts with consonant

Every verb can have modifiers via chaining:

```
u verb mod1 mod2 mod3
```

## Modifiers

### Aspect

Aspect is based on group Z₂ together with `i` and `ii`:

| Type               | Suffix | Straight form | Verb suffix form | Default suffix form |
| ------------------ | ------ | ------------- | ---------------- | ------------------- |
| Complete (default) | `ba`   | `(ba verb)`   | `yu verb ba`     | `verb`              |
| Incomplete process | `pu`   | `(pu verb)`   | `yu verb pu`     | `yu verb pu`        |

Example of negation:

```
i (pu verb) = ba verb
```

### Tense

Tense is based on group ℤ ⋊ Z₂ (semidirect product Z with Z₂) together with `i` and `ii`:

| Type    | Suffix | Straight form | Verb suffix form |
| ------- | ------ | ------------- | ---------------- |
| Past    | `ra`   | `(ra verb)`   | `yu verb ra`     |
| Present | `-`    | `verb`        | `verb`           |
| Future  | `ru`   | `(ru verb)`   | `yu verb ru`     |

Example of negation:

```
i (ru verb) = ra verb
```

### Voice

Voice is based on group Z₂ together with `i` and `ii`:

| Type             | Suffix | Straight form | Verb suffix form | Default suffix form |
| ---------------- | ------ | ------------- | ---------------- | ------------------- |
| Active (default) | `za`   | `(za verb)`   | `yu verb za`     | `verb`              |
| Passive          | `su`   | `(su verb)`   | `yu verb su`     | `yu verb su`        |

Example of negation:

```
i (su verb) = za verb
```

## Multiple modifiers

To say something like `was going` we just stack a few modifiers. Let's check example in pseudo Lispeak with `go` verb:

```
go = to go, go, goes
yu go ra = ra go = went
yu go ru = ru go = will go
yu go pura = ra (pu go) = was going
yu go puru = ru (pu go) = will be going
```
