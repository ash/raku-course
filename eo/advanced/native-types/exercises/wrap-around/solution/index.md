---
title: 'Solvo: Ĉirkaŭvolvo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my uint8 $u = 250;
$u += 10;
say $u;

my uint8 $v = 0;
$v--;
say $v;
```

🦋 Vi povas trovi la fontkodon en la dosiero [wrap-around.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/native-types/wrap-around.raku).

## Eligo

```
4
255
```

## Komentoj

1. `uint8` ampleksas de `0` ĝis `255`, kio estas 256 apartaj valoroj. Aritmetiko sur ĝi estas efektive farata laŭ modulo 256.

1. `250 + 10` estus `260`, kio ne konvenas. Ĝi ĉirkaŭvolvas, atingante `260 - 256 = 4` preter la malsupro. Do superfluo ne limiĝas al transpasado de la supro je unu — ajna rezulto ekster la amplekso estas refaldita internen.

1. En la alia direkto ankaŭ superfluiĝas: malpliigi `0` ne povas doni `-1` en sensigna tipo, do ĝi ĉirkaŭvolvas al la maksimumo, `255`.

{% include nav.html %}
