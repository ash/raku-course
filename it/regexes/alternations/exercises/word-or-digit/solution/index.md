---
title: 'Soluzione: Parola o cifra'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
say 'item 5' ~~ / cat | \d /;
```

🦋 Trova il programma nel file [word-or-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/word-or-digit.raku).

## Output

```
｢5｣
```

## Commenti

1. L'alternativa mescola un letterale, `cat`, con una classe di caratteri, `\d`. Lo schema riconosce quella delle due alternative che si trova per prima nella stringa.

1. In `item 5` non c'è alcun `cat`, ma c'è una cifra, quindi `\d` riconosce il `5`.

{% include nav.html %}
