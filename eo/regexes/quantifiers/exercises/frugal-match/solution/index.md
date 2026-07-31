---
title: 'Solvo: Ŝparema kongruo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
say 'say "hi" and "bye"' ~~ / '"' .+? '"' /;
```

🦋 Vi povas trovi la fontkodon en la dosiero [frugal-match.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/quantifiers/frugal-match.raku).

## Eligo

```
｢"hi"｣
```

## Komentoj

1. La `?` post `.+` faras la kvantoron ŝparema, do ĝi kongruas kun kiel eble plej malmultaj signoj.

1. Ĝi do haltas ĉe la unua ferma `"`, kaptante nur `"hi"`. Avida `.+` estus kurinta ĝis la lasta `"` kaj kongruinta kun `"hi" and "bye"`.

{% include nav.html %}
