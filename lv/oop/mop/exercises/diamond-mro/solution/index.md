---
title: 'Risinājums: Klašu rombs'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
class A {
}

class B is A {
}

class C is A {
}

class D is B is C {
}

say D.^mro.map(*.^name);
```

🦋 Atrodiet programmu failā [diamond-mro.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/mop/diamond-mro.raku).

## Izvade

```
(D B C A Any Mu)
```

## Komentāri

1. `D` manto uzreiz no divām vecākklasēm — `class D is B is C` katru no tām uzskaita ar savu `is`. Tā ir daudzkārtēja mantošana, un `A`, `B`, `C`, `D` veido *rombu*: divi ceļi no `D` augšup līdz kopīgajam priekštecim `A`.

1. `.^mro` šo rombu saplacina vienā, lineārā meklēšanas secībā. Vispirms nāk `D`, tad tā vecākklases `B` un `C` tādā secībā, kādā tās uzrakstītas, tad kopīgais `A` un visbeidzot `Any` un `Mu`.

1. Lai gan gan `B`, gan `C` ved uz `A`, tips `A` parādās **vienreiz**, un tikai pēc abiem. Tā ir metožu atrisināšanas secības jēga: katrs tips tiek apmeklēts tieši vienu reizi, un vecākklase nekad nenāk pirms bērnklases, kas no tās manto, — tāpēc metode, kas definēta `B`, vienmēr tiek atrasta pirms tās, ko tā pārrakstītu `A`.

{% include nav.html %}
