---
title: Citēšanas apzīmētāji
---

{% include menu.html %}

Citēšanas konstrukcijas uzvedību var pielāgot ar _adverbiem_. Katra citēšanas funkcija — skalāru interpolēšana, iegultu slēgumu izpilde, atpakaļsvītru apstrāde — tiek kontrolēta ar savu adverbu, kas ieslēdz vai izslēdz tieši šo vienu funkciju, tāpēc varat sākt no `q` vai `Q` un pievienot tieši tās funkcijas, kas nepieciešamas.

Daži bieži lietotie adverbi:

* `:s` / `:scalar` — interpolē skalāros mainīgos (`$x`)
* `:c` / `:closure` — interpolē iegultu kodu `{ … }`
* `:b` / `:backslash` — apstrādā atpakaļsvītras aizbēgšanas secības, piemēram, `\n`

Pievienojiet vienu pie `q`, lai ieslēgtu vienu funkciju. Piemēram, atļaujiet iegultu kodu, bet neko citu:

```raku
say q/result: {3 * 4}/;   # result: {3 * 4}  — parasts q atstāj bloku neskartu
say q:c/result: {3 * 4}/; # result: 12        — :c izpilda bloku
```

Ar parastu `q` bloks `{ 3 * 4 }` tiek izdrukāts burtiski; tikai `:c` liek blokam izpildīties un ievieto tā vērtību, kamēr `$mainīgais` joprojām tiktu atstāts mierā. Ievērojiet norobežotājus `/…/`: ja virkni norobežotu ar `{…}`, kompilators pareizi saskaitītu ligzdotas figūriekavas, bet tad iekšējais `{ 3 * 4 }` tiktu nolasīts kā daļa no norobežotā teksta, nevis kā slēgums, tāpēc `:c` to atstātu burtisku. Kad teksts satur `{ … }` bloku, izvēlieties citu norobežotāju, nevis `{…}`, lai slēgums patiešām izpildītos. Skalāro interpolēšanu var pievienot citādi burtiskajam `Q`:

```raku
my $name = 'Anna';
say Q:s{Hi, $name}; # Hi, Anna
```

Adverbi arī **izslēdz** funkcijas ar `!`. Lai izmantotu `qq`, bet atstātu `$` burtisku:

```raku
my $price = 5;
say qq:!s{costs $price dollars}; # costs $price dollars
```

`qq` ir ekvivalents `Q` ar visiem interpolēšanas adverbiem ieslēgtiem, bet `q` ir ekvivalents `Q` ar mazāku kopu. Adverbi dod precīzu kontroli starp šīm divām galējībām.

{% include nav.html %}
