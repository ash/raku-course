---
title: 'Solvo: Pako'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
package Temperature {
    our $freezing = 0;
    our sub fahrenheit($c) { $c * 9/5 + 32 }
}

say $Temperature::freezing;
say Temperature::fahrenheit(100);
```

🦋 Vi povas trovi la fontkodon en la dosiero [a-package.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/a-package.raku).

## Eligo

```
0
212
```

## Komentoj

1. Kaj la variablo kaj la subrutino estas deklaritaj per `our`, do ambaŭ fariĝas parto de la nomspaco `Temperature` kaj estas atingeblaj de ekstere.

1. La variablo estas atingata kiel `$Temperature::freezing` — sigelo, paka nomo, poste variabla nomo — dum la subrutino estas vokata kiel `Temperature::fahrenheit(100)`. Konverti `100` donas `100 * 9/5 + 32`, kio estas `212`.

1. Simpla `package` provizas nur la nomspacon. Por reuzebla biblioteko ni estus uzintaj `module` anstataŭe — kaj, kiam objektoj estas en la ludo, `class` — sed la nomspaca mekanismo estas la sama en ĉiu kazo.

{% include nav.html %}
