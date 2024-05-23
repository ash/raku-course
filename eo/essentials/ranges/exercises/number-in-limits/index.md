---
title: 'Ekzerco: Se la nombro estas ene de la limoj'
---

{% include menu.html %}

## Problemo

Skribu programon kiu petas enigi tri nombrojn: `$begin`, `$end`, kaj `$n` kaj presas `True` aŭ `False` depende de ĉu `$n` estas en la intervalo `[$begin, $end)` (inkluzive de `$begin` sed ekskluzive de `$end`).

Bonvolu supozi ke la enigitaj nombroj kontentigas la kondiĉon: `$begin < $end + 1`, sed ne aldonu kodon por kontroli ĝin.

## Ekzemplo

La ebla eligo de la programo por ambaŭ kazoj estas montrita sube:

```console
$ raku number-in-limits.raku
De (inkluzive): 10
Ĝis (ekskluzive): 20
Kio estas la nombro? 15
True

$ raku number-in-limits.raku
De (inkluzive): 10
Ĝis (ekskluzive): 20
Kio estas la nombro? 30
False
```

## Solvo

✅ [Vidu la solvon](solution)

{% include nav.html %}