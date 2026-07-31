---
title: 'Soluzione: Riutilizzate un token'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my regex word { \w+ }

if 'cat dog' ~~ / <word> ' ' <word> / {
    say $<word>[0];
    say $<word>[1];
}
```

🦋 Trova il programma nel file [reuse-a-token.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/what-is-a-grammar/reuse-a-token.raku).

## Output

```
｢cat｣
｢dog｣
```

## Commenti

1. Lo stesso regex con nome `word` viene chiamato due volte nello schema.

1. Quando una cattura con nome ricorre più di una volta, i risultati formano un elenco, quindi si leggono come `$<word>[0]` e `$<word>[1]`.

{% include nav.html %}
