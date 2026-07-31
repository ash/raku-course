---
title: 'Solvo: Unue la familia nomo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
if 'Grace Hopper' ~~ / (\w+) ' ' (\w+) / {
    say "$1, $0";
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [swap-words.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/swap-words.raku).

## Eligo

```
Hopper, Grace
```

## Komentoj

1. La persona kaj familia nomoj estas kaptitaj en `$0` kaj `$1`.

1. Ene de ĉeno kun duoblaj citiloj ĉiu kapto interpoliĝas kiel sia kongruinta teksto. Presi `"$1, $0"` metas la familian nomon unue, sekvatan de laŭlitera komo kaj spaco kaj poste la persona nomo.

{% include nav.html %}
