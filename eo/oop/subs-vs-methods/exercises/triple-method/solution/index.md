---
title: 'Solvo: Trioblo kiel metodo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
class Number {
    has $.n;

    method triple {
        $.n * 3;
    }
}

say Number.new(n => 7).triple;
```

🦋 Vi povas trovi la fontkodon en la dosiero [triple-method.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/subs-vs-methods/triple-method.raku).

## Eligo

```
21
```

## Komentoj

1. Kiel metodo, `triple` apartenas al la objekto kaj laboras kun la propra `n` de la objekto — nenio estas transdonata.

1. Kompare kun la subrutina versio, la datumoj loĝas en la objekto anstataŭ alveni kiel argumento. Ambaŭ donas `21`.

{% include nav.html %}
