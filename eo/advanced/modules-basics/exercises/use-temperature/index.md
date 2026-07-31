---
title: Uzi la konvertilon
translations_gpt:
---

{% include menu.html %}

## Problemo

Estas donita al vi modulo en dosiero `Temperature.rakumod`:

```raku
unit module Temperature;

sub c-to-f($c) is export {
    $c * 9/5 + 32
}
```

Skribu apartan programon, kiu uzas ĉi tiun modulon por konverti temperaturon laŭ Celsio — transdonitan kiel komandlinia argumento — al Fahrenheit kaj presi la rezulton.

## Ekzemplo

```console
$ raku -I. temperature.raku 100
212
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
