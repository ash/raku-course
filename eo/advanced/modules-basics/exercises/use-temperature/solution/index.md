---
title: 'Solvo: Uzi la konvertilon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

La programo, `temperature.raku`:

```raku
use Temperature;

sub MAIN($celsius) {
    say c-to-f($celsius);
}
```

🦋 Vi povas trovi ambaŭ fontdosierojn en la dosierujo [exercises/advanced/modules-basics/use-temperature](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/use-temperature).

## Eligo

```console
$ raku -I. temperature.raku 100
212
```

## Komentoj

1. `use Temperature` ŝargas la modulon kaj importas ĝian eksportitan subrutinon `c-to-f`, do la programo povas voki ĝin rekte.

1. `sub MAIN($celsius)` ricevas la komandlinian argumenton, do la konvertota temperaturo estas elektata, kiam la programo estas rulata, anstataŭ esti fiksita en la kodo. Rulita sen argumento, Raku presas uzad-mesaĝon aŭtomate.

1. La modulo devas esti atingebla, kial la programo estas rulata per `-I.`, por ke Raku serĉu `Temperature.rakumod` en la nuna dosierujo. La konverto de `100` °C donas `212` °F.

{% include nav.html %}
