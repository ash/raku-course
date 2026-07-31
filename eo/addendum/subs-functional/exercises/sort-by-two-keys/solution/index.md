---
title: 'Solvo: Ordigi laŭ du ŝlosiloj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @people =
    { name => 'Anna', age => 30 },
    { name => 'Bob',  age => 25 },
    { name => 'Cara', age => 30 };

for @people.sort({ .<age>, .<name> }) -> %person {
    say "%person<name> (%person<age>)";
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [sort-by-two-keys.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/subs-functional/sort-by-two-keys.raku).

## Eligo

```
Bob (25)
Anna (30)
Cara (30)
```

## Komentoj

1. Kiam bloko `.sort` redonas liston, Raku komparas laŭ la unua elemento, poste la
dua — do `{ .<age>, .<name> }` ordigas unue laŭ aĝo kaj uzas la nomon nur por
rompi egalecojn.

1. Anna kaj Cara havas la saman aĝon `30`, do ili estas ordigitaj alfabete; Bob,
estante pli juna, venas unue.

{% include nav.html %}
