---
title: Piezīmes par Unicode izmantošanu
---

{% include menu.html %}

Raku pieņem, ka visi jūsu programmu faili ir saglabāti kā UTF-8 faili. No praktiskā viedokļa tas nozīmē, ka jums nav jāuztraucas par ne-ASCII rakstzīmēm, piemēram, virknes literāļos. Bet tas nav viss. Visticamāk, jums nebūs jāuztraucas, ja jūsu programma lasa teksta failu, kas arī ir UTF-8 fails. Tas arī nozīmē, ka virknes garums tiek pareizi noteikts kā rakstzīmju skaits, nevis baitu skaits. (Mēs to apskatīsim sīkāk vēlāk.)

Nākamā lieta, ko vēlaties zināt, ir tā, ka jūs varat izmantot ne-latīņu vai ne-angļu burtus identifikatoriem. Jūs varat nosaukt savu mainīgo `$ι` tā vietā, lai izmantotu `$i`, ja vēlaties, un kompilators to pareizi parsēs.

Raku pietiekami pedantiski apstrādā rakstzīmju Unicode īpašības. Piemēram, tas ne tikai zina, vai rakstzīme ir burts vai cipars, bet arī pareizi identificē pāra rakstzīmes, piemēram, iekavas vai dažāda veida iekavas. Daudzos gadījumos jūs varat izvēlēties dažāda veida iekavas atsevišķām programmas daļām. Piemēram, jūs varat modificēt mūsu "Hello, World!" programmu, lai izmantotu šīs ne-latīņu citēšanas rakstzīmes (jūs tās redzēsiet atkal, kad strādāsim ar Raku gramatikām):

```raku
say ｢Hello, World!｣;
```

Dažiem iebūvētiem operatoriem ir divas formas: Unicode un ASCII versijas. Piemēram, var rakstīt noliegtu salīdzinājumu kā `!=` vai kā `≠`. Tas pats attiecas uz kopu operācijām: piemēram, `∈` ir tīrs ASCII ekvivalents `(elem)`. Vai arī ir iebūvēta konstante, uz kuru var atsaukties kā `pi` vai `π`.

Strādājot ar skaitļiem, jūs varat izvēlēties izmantot daļskaitļus formā `½` tā vietā, lai izmantotu `0.5`. Vai arī novērtēt kvadrātu `$x` kā `$x²`, izmantojot augšraksta rakstzīmi.

Pilnu šādu pāru sarakstu varat atrast šajā dokumentācijas lapā: 📖 [Unicode versus ASCII symbols](https://docs.raku.org/language/unicode_ascii).

{% include nav.html %}