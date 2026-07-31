---
title: Iekļautās darbības un darbību klases
translations_gpt:
---

{% include menu.html %}

Tagad jums ir divi veidi, kā parsējumam piesaistīt nozīmi. Kuru izmantot?

**Iekšējās darbības** ieliek bloku `{ make … }` tieši marķiera iekšienē:

```raku
grammar Sum {
    token TOP { <a> '+' <b> { make $<a>.Int + $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}
```

Tās ir ātri uzrakstāmas un der sīkai gramatikai vai vienreizējam skriptam. Cena ir tā, ka raksturs un loģika ir savijušies kopā.

**Darbību klase** abus tur nošķirti — gramatika apraksta formu, darbību klase apraksta nozīmi:

```raku
grammar Sum {
    token TOP { <a> '+' <b> }
    token a   { \d+ }
    token b   { \d+ }
}

class SumActions {
    method TOP($/) { make $<a>.made + $<b>.made }
    method a($/)   { make $/.Int }
    method b($/)   { make $/.Int }
}
```

Šai nošķiršanai ir īsti ieguvumi, gramatikai augot: raksturs paliek lasāms, un **vienu gramatiku var savienot ar vairākām darbību klasēm** — vienu, kas izrēķina, otru, kas glīti izdrukā, trešo, kas uzbūvē datu struktūru —, gramatiku vispār neaiztiekot.

Īkšķa likums: iekšējās darbības kaut kam mazam un vienreizējam, darbību klase visam, ko uzturēsiet vai izmantosiet atkārtoti.

{% include nav.html %}
