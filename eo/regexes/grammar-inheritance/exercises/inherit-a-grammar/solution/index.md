---
title: 'Solvo: Heredu gramatikon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
grammar Animal {
    token TOP   { <sound> }
    token sound { \w+ }
}

grammar Dog is Animal {
    token sound { 'woof' }
}

grammar Cat is Animal {
    token sound { 'meow' }
}

say Dog.parse('woof').defined;
say Cat.parse('meow').defined;
say Dog.parse('meow').defined;
```

🦋 Vi povas trovi la fontkodon en la dosiero [inherit-a-grammar.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/inherit-a-grammar.raku).

## Eligo

```
True
True
False
```

## Komentoj

1. Kaj `Dog is Animal` kaj `Cat is Animal` heredas la ĵetonon `TOP` de la bazo senŝanĝe; ĉiu provizas nur sian propran `sound`.

1. Do unu baza gramatiko estas etendita du malsamajn manierojn. `Dog` kongruas nur kun `woof` kaj `Cat` nur kun `meow` — kial `Dog.parse('meow')` malsukcesas: hundo konservas sian propran superregitan `sound`, ekzakte kiel superregitaj metodoj kondutas sur objektoj.

{% include nav.html %}
