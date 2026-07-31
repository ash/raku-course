---
title: 'Soluzione: Una parola di taglia'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say 'a large pizza' ~~ / small | medium | large /;
```

🦋 Trova il programma nel file [size-word.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/size-word.raku).

## Output

```
｢large｣
```

## Commenti

1. L'alternativa elenca tre possibilità; lo schema riconosce quella che è presente nella stringa.

1. Compare solo `large`, quindi la corrispondenza è quella.

{% include nav.html %}
