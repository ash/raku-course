---
title: Anonimaj subrutinaj
translations_gpt:
---

{% include menu.html %}

Subrutino ne devas havi nomon. _Anonima_ subrutino estas skribata same kiel ordinara, sed sen nomo, kaj kutime estas konservita en variablo por ke vi povu voki ĝin poste.

```raku
my $double = sub ($x) {
    $x * 2
};

say $double(5); # 10
```

La variablo `$double` enhavas la subrutinon, kaj `$double(5)` vokas ĝin kun la argumento `5`.

## Pintaj blokoj

Raku ofertas pli mallongan notacion por la sama afero — la _pinta bloko_. Ĝi uzas la sagon `->` por enkonduki la parametrojn, kaj bezonas nek la vorton `sub` nek krampojn ĉirkaŭ ili:

```raku
my $double = -> $x {
    $x * 2
};

say $double(5); # 10
```

Tio estas la plej ofta maniero skribi malgrandan anoniman subrutinon.

## La sigelo `&`

Se vi preferas voki la subrutinon per nomo anstataŭ per `$`-variablo, deklaru la variablon kun la sigelo `&`. Tiam vi povas voki ĝin sen la sigelo, tute same kiel ordinaran subrutinon:

```raku
my &triple = -> $x {
    $x * 3
};

say triple(4); # 12
```

## Transdoni al alia funkcio

Vi tute ne devas konservi anoniman subrutinon en variablo. Ĉar ĝi estas simple valoro, vi povas transdoni ĝin rekte al funkcio kiu atendas tian — ekzemple `map`, `grep`, aŭ `sort`:

```raku
say (1, 2, 3).map(-> $x { $x * 2 }); # (2 4 6)
```

La pinta bloko estas la anonima subrutino ĉi tie, kaj `map` vokas ĝin unufoje por ĉiu elemento. Fakte, tio estas kion vi faris la tutan tempon: ĉiu `{ ... }` bloko kaj `-> $x { ... }` kiujn vi transdonis al `map` kaj `grep` estas malgranda anonima subrutino, skribita ĝuste tie kie ĝi estas bezonata anstataŭ esti unue nomita.

{% include nav.html %}
