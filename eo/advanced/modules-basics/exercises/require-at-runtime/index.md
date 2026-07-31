---
title: Ŝargi je rultempe
translations_gpt:
---

{% include menu.html %}

## Problemo

Estas donita al vi modulo `Greeting.rakumod`, kiu eksportas subrutinon `hello`:

```raku
unit module Greeting;

sub hello($name) is export {
    "Hello, $name!"
}
```

Ŝargu ĉi tiun modulon per `require` anstataŭ `use`, por ke ĝi estu enportata je **rultempo**. Ĉar `require` ne importas nomojn aŭtomate, listigu la simbolon, kiun vi volas, per `require Greeting <&hello>;`. Poste voku `hello('Sam')` kaj presu la rezulton.

Por montri, kion rultempa ŝargado donas al vi, metu la `require` ene de `sub MAIN` kun flago `--quiet`, tiel ke la modulo estas ŝargata *nur* kiam saluto efektive estas dezirata. Kun `--quiet`, la programo presas `Silence.` kaj tute ne tuŝas la modulon.

## Ekzemplo

Rulita kun la modulo sur la serĉvojo, la programo presas:

```console
$ raku -I. require-import.raku
Hello, Sam!

$ raku -I. require-import.raku --quiet
Silence.
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}
