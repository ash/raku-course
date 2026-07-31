---
title: 'Solutio: Numeri dierum septimanae'
translations_gpt:
---

{% include menu.html %}

Hic est possibilis solutio huius operis.

## Codex

```raku
enum Day (Mon => 1, Tue => 2, Wed => 3, Thu => 4, Fri => 5);

say Day(5);
say Day(1);
```

🦋 Inveni codicem fontem in archivo [weekday-values.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/enumerations/weekday-values.raku).

## Exitus

```
Fri
Mon
```

## Commentarii

1. Constantes ut paria scribendo numeros eligere licet, hic ab `1` incipientes.

1. Typum enumerationis ut `Day(5)` vocando inversam quaestionem perficis: constantem cuius valor est `5` invenit, quod est `Fri`. Similiter `Day(1)` dat `Mon`. Hoc est inversum methodi `Fri.value`, quae a nomine ad numerum iret.

{% include nav.html %}
