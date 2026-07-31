---
title: 'Solvo: Formulo en la klaso'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
class Geometry {
    method circle-area($r) {
        (π * $r * $r).round
    }
}

say Geometry.circle-area(10);
```

🦋 Vi povas trovi la fontkodon en la dosiero [speed-limit.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/class-methods/speed-limit.raku).

## Eligo

```
314
```

## Komentoj

1. La metodo tuŝas neniun atributon — ĝi laboras nur kun sia parametro `$r` — do ĝi povas esti vokata sur la klaso mem, sen objekto kreita antaŭe.

1. `Geometry.circle-area(10)` vokas la metodon sur la tipobjekto, transdonante `10`. La rezulto estas `π * 10 * 10`, kaj post rondigo `314`.

{% include nav.html %}
