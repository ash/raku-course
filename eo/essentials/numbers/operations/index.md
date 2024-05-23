---
title: Operacioj kun nombroj
---

{% include menu.html %}

Sendube vi jam konas kelkajn el la operacioj, kiujn vi povas fari kun Raku-nombroj. Nur por mencii, ke la simbolo de la _operacio_ estas nomata _operaciilo_. La objektoj, sur kiuj ni faras operaciojn, estas nomataj _operandaj_.

## Aritmetiko

**Operaciilo** | **Operacio**
`+` | Adicio
`-` | Subtraho
`*` | Multipliko
`/` | Divido

Ĉar Raku [subtenas Unikodon](/eo/essentials/on-unicode) tre bone, kelkaj el ĉi tiuj operaciiloj havas ne-ASCII-ekvivalentojn:

`×` | Multipliko
`÷` | Divido

Por ŝanĝi la ordon de ekzekuto, uzu krampojn:

```raku
say 3 * 4 + 5;   # 17
say 3 * (4 + 5); # 27
```

## Modulo

La modulo-operaciilo estas `%` kiel en multaj aliaj lingvoj.

`%` | Modulo

Ĝi redonas la reston de la entjera divido de du nombroj, do `10 % 3` estas `1`. Notu, ke `-10 % 3` estas `2`, ĉar la rezulto de la operacio estas difinita kiel la diferenco inter la unua nombro kaj la malsupren-rondigita divido multiplikita per la dua nombro. Do, `$a % $b` estas ekvivalenta al `$a - $b * floor($a / $b)`.

## Dividebleco

Raku aldonas utilan operaciilon por testi ĉu la nombro estas dividebla per alia nombro.

`%%` | Dividebleco

Ĉi tio estas infiksa operaciilo, kiu bezonas du operandajn: `10 %% 3`. Se la unua operando estas dividebla per la dua operando, la rezulto estas Boolea `True`. Alie, `False`.

## Entjeraj operacioj

Estas specialaj operacioj, kiuj redonas entjerajn rezultojn. Iliaj operaciiloj estas vortoj anstataŭ simboloj.

`div` | Entjera divido
`mod` | Entjera modulo

La `div` operaciilo rondigas malsupren la rezulton, do `10 div 3` estas `3`, kaj `-10 div 3` estas `-4`.

Ambaŭ `div` kaj `mod` atendas entjerajn operandajn. Do, la sekva programo ne funkcios se vi malkomentas la liniojn markitajn kiel `Eraro`:

```raku
say 10.3 % 3;     # OK
# say 10.3 mod 3; # Eraro

say 10.3 / 3.3;     # OK
# say 10.3 div 3.3; # Eraro
```

## Potenco

Estas du manieroj por akiri la rezulton de _x_ al la potenco de _y_. Unue, vi povas uzi la `**` operaciilon:

```raku
say 3 ** 4; # 81
```

Due, vi povas uzi superskribitajn ciferojn, ekzemple:

```raku
say 3⁴; # 81
```

Eblas meti pli ol unu superskribitan ciferon por akiri la valoron de potenco pli granda ol 9. Ekzemple:

```raku
say 2¹⁵; # 32768
```

Negativa potenco ne estas problemo ankaŭ:

```raku
say 2 ** (-2); ## 0.25
say 2⁻²; # 0.25
```

Notu, ke la rezulto de la lastaj du esprimoj estas `Rat` nombro.

## Operacioj kun asigno

Ĉiuj operacioj subtenas la mallongigan sintakson kiam vi bezonas ĝisdatigi la variablon. Ni demonstru ĝin per la ekzemplo de `+`.

La plena formo

```raku
$a = $a + $b;
```

estas ekvivalenta al:

```raku
$a += $b;
```

{% include nav.html %}