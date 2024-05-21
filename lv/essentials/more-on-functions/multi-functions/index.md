---
title: Daudzfunkcijas
---

{% include menu.html %}

Raku ievieš _vairākkārtēju izsaukumu_ balstoties uz funkcijas parakstu. Tas ļauj izveidot funkcijas, kurām ir vienāds nosaukums, bet dažādi ievaddatu tipi. Izmantojiet `multi` deklaratoru katrai funkcijas variācijai.

```raku
multi sub add(Int $x, Int $y) { $x + $y }
multi sub add(Str $x, Str $y) { $x ~ $y }
```

(Ir pieļaujams izlaist `sub` pēc `multi`.)

Ja jums ir divas vienas un tās pašas funkcijas variācijas, kompilators veic vairākkārtēju izsaukumu atkarībā no tā, kādus argumentus tas redz funkcijas izsaukumā. Salīdziniet šādus divus izsaukumus:

```raku
say add(10, 20); # 30
say add('10', '20'); # 1020
```

Pirmais izsaukums aktivizē funkciju ar veselu skaitļu parametriem, kamēr otrais izsaukums palaidīs otro funkcijas variāciju, kas sagaida divas virknes.

## Literālie parametri

Interesants gadījums daudzfunkcijām ir tāds, ka tām ir variācijas, kurām ir literālas vērtības kā parametri. Apsveriet šādas divas variācijas:

```raku
multi sub f(42) {say 'Šī ir atbilde'}
multi sub f($x) {say "$x nav atbilde"}
```

Pirmā variācija tiek palaista tikai tad, kad jūs izsaucat funkciju ar tieši 42 vērtību. Citos gadījumos tiek izmantota otrā variācija. Kārtība, kādā šīs funkcijas ir definētas, nav svarīga.

```raku
f(10); # 10 nav atbilde
f(42); # Šī ir atbilde
```

{% include nav.html %}