---
title: 'Solvo: Vorto aŭ cifero'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say 'item 5' ~~ / cat | \d /;
```

🦋 Vi povas trovi la fontkodon en la dosiero [word-or-digit.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/word-or-digit.raku).

## Eligo

```
｢5｣
```

## Komentoj

1. La alternativo miksas literalon, `cat`, kun signoklaso, `\d`. La ŝablono kongruas kun tiu alternativo, kiu estas trovita unue en la ĉeno.

1. Ne estas `cat` en `item 5`, sed estas cifero, do `\d` kongruas kun la `5`.

{% include nav.html %}
