---
title: Solutio ad 'Mensam emptionis'
---

{% include menu.html %}

## Codex

Hic est solutio possibilis:

```raku
my $sella-pretium = 20.57;
my $sellae = 4;
my $sellae-totalis = $sella-pretium * $sellae;

my $mensa-pretium = 50.18;
my $mensae = 1;
my $mensae-totalis = $mensa-pretium * $mensae;

dic "Item\tPretium\tN\tTotalis";
dic "Sellae\t\$$sella-pretium\t$sellae\t\$$sellae-totalis";
dic "Mensae\t\$$mensa-pretium\t$mensae\t\$$mensae-totalis";
```

Omnes numeri sunt duriter codificati et servati in variis variabilibus. Nos quoque utimur operatore multiplicationis `*` ad computandum eventum. Plura de operatoribus in proximis sectionibus huius cursus discemus, sed hoc tempore, constructio talis ut `$sella-pretium * $sellae` non debet esse aliquid quod quaestiones causat.

Tres lineae generantes output imprimunt tres lineas tabulae, includens eius caput. Animadverte quomodo columnae separantur per characteres tabulationis `\t`. In datis lineis, etiam videmus characterem dollariorum effugientem: `\$` necnon varias variabiles quas interpolare volumus.

🦋 Codicem fontis invenire potes in archivo [purchase-table.raku](https://github.com/ash/raku-course/blob/master/exercises/strings/purchase-table.raku).

## Output

Curre programmatum et vide quomodo tabulam imprimit:

```
$ raku exercises/strings/purchase-table.raku
Item    Pretium   N      Totalis
Sellae  $20.57    4      $82.28
Mensae  $50.18    1      $50.18
```

## Commentarii

Animadvertistine hyphena in nominibus variabilium ut `$sella-pretium` vel `$mensae-totalis`? Hoc est modus perfecte acceptabilis nominandi variabiles in Raku.

Ne confundaris a duobus signis dollariorum adiacentibus. Raku ea separatim legit. Exempli gratia, in substringa `\$$pretium`, primum signum dollariorum effugit et sic se ipsum repraesentat, dum secundum est pars nominis variabilis `$pretium`.

Omnes chordae sunt in duplicibus quotationibus ad permittendum interpolationem variabilium et characterum specialium.

Revertamur ad hoc munus iterum postquam noti sumus cum arrayis et hashis.

{% include nav.html %}