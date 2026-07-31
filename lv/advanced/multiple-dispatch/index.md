---
title: Daudzkārtēja nosūtīšana
translations_gpt:
---

{% include menu.html %}

Sadaļā "Pamati" jūs iepazināties ar [_multi-funkcijām_](/lv/essentials/more-on-functions/multi-functions): vairākām apakšprogrammām ar vienādu nosaukumu, kur Raku izvēlas pareizo, apskatot argumentu tipus. Šo mehānismu sauc par _vairākkārtēju dispečēšanu_ (multiple dispatch).

Līdz šim izvēle tika veikta pēc argumentu _tipa_. `where` klauzula ļauj iet tālāk un veikt dispečēšanu arī pēc _vērtības_. Tā tiek rakstīta aiz parametra un satur nosacījumu, kuram argumentam jāatbilst, lai šis kandidāts tiktu izvēlēts:

```raku
multi sub info(Int $n where $n < 0)  { say "$n is negative" }
multi sub info(Int $n where $n == 0) { say "$n is zero" }
multi sub info(Int $n where $n > 0)  { say "$n is positive" }

info(-5);
info(0);
info(7);
```

Katrs izsaukums nonāk pie tā kandidāta, kura nosacījums ir patiess dotajai vērtībai:

```
-5 is negative
0 is zero
7 is positive
```

Visiem trim kandidātiem ir vienāda signatūra tipu ziņā — viens `Int` — tāpēc bez `where` klauzulām tie konfliktētu. Nosacījumi padara tos atšķirīgus.

## Bāzes gadījums rekursijai

Bieži `where` lieto, lai nodrošinātu rekursijas apturēšanas punktu kā atsevišķu kandidātu. Šeit ir faktoriāls, sadalīts divās multi-apakšprogrammās:

```raku
multi sub fact(Int $n where $n <= 1) { 1 }
multi sub fact(Int $n)               { $n * fact($n - 1) }

say fact(5); # 120
```

Pirmais kandidāts apstrādā bāzes gadījumu (`$n` ir `1` vai mazāks) un vienkārši atgriež `1`. Katra cita vērtība nonāk pie otrā kandidāta, kas izsauc `fact` vēlreiz ar mazāku skaitli. Funkcijā nav neviena `if` — bāzes gadījuma un rekursīvā soļa izvēli veic dispečeris.

{% include nav.html %}
