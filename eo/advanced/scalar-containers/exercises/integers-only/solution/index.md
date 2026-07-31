---
title: 'Solvo: Nur entjeroj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my Int $cars;

$cars = 250.7.Int;
say $cars;
say $cars.WHAT;
```

🦋 Vi povas trovi la fontkodon en la dosiero [integers-only.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/scalar-containers/integers-only.raku).

## Eligo

```
250
(Int)
```

## Komentoj

1. La tipa limigo `Int` en `my Int $cars` igas la ujon rifuzi ĉiun valoron, kiu ne estas entjero. Rekta atribuo de `250.7` (`Rat`) estus kompiltempa eraro.

1. Voki `.Int` sur la racionala valoro `250.7` konvertas ĝin al la entjero `250`, forĵetante la frakcian parton. La konvertita valoro konvenas al la ujo. Zorgu ne konfuzi ĉi tiun konduton kun rondigo.

1. La pseŭdometodo `.WHAT` konfirmas, ke la valoro konservita en la ujo estas de tipo `Int`.

{% include nav.html %}
