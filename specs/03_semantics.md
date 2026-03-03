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
| Complete (default) | `da`   | `(da verb)`   | `u verb da`      | `verb`              |
| Incomplete process | `du`   | `(du verb)`   | `u verb du`      | `u verb du`         |

Example of negation:

```
i (du verb) = da verb
```

### Tense

Tense is based on group ℤ ⋊ Z₂ (semidirect product Z with Z₂) together with `i` and `ii`:

| Type    | Suffix | Straight form | Verb suffix form |
| ------- | ------ | ------------- | ---------------- |
| Past    | `ra`   | `(ra verb)`   | `u verb ra`      |
| Present | `-`    | `verb`        | `verb`           |
| Future  | `ru`   | `(ru verb)`   | `u verb ru`      |

Example of negation:

```
i (ru verb) = ra verb
```

### Voice

Voice is based on group Z₂ together with `i` and `ii`:

| Type             | Suffix | Straight form | Verb suffix form | Default suffix form |
| ---------------- | ------ | ------------- | ---------------- | ------------------- |
| Active (default) | `za`   | `(za verb)`   | `u verb za`      | `verb`              |
| Passive          | `zu`   | `(zu verb)`   | `u verb zu`      | `u verb zu`         |

Example of negation:

```
i (zu verb) = za verb
```

## Multiple modifiers

To say something like `was going` we just stack a few modifiers. Let's check example in pseudo Lispeak with `go` verb:

```
go = to go, go, goes
u go ra = ra go = went
u go ru = ru go = will go
u go dura = ra (du go) = was going
u go duru = ru (du go) = will be going
```
