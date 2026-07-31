---
title: 'Soluzione: Unite le stringhe'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say [~] '2', '0', '2', '5';
```

🦋 Trova il programma nel file [join-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/join-strings.raku).

## Output

```
2025
```

## Commenti

1. `[~]` inserisce l'operatore di concatenazione `~` fra le stringhe.

1. `'2' ~ '0' ~ '2' ~ '5'` produce l'unica stringa `2025`.

{% include nav.html %}
