---
title: 'Solvo: Dumpi haketon'
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my %h = beta => 2, alpha => 1;
dd %h;
```

🦋 Vi povas trovi la fontkodon en la dosiero [dump-a-hash.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-a-hash.raku).

## Eligo

```
{:alpha(1), :beta(2)}
```

## Komentoj

1. `dd` presas la hakon en kodosimila formo, kun ĉiu paro kiel `:ŝlosilo(valoro)`.

1. La ŝlosiloj aperas en ordigita ordo — `alpha` antaŭ `beta` — kvankam `beta` estis skribita unue.

{% include nav.html %}
