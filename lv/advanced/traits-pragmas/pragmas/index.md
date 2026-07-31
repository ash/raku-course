---
title: Pragmas
---

{% include menu.html %}

_Pragma_ izskatās kā modulis, kas ielādēts ar `use`, bet tā vietā, lai ieviestu kodu, tā maina kompilēšanas noteikumu pārējā pašreizējā tvēruma ietvaros. Ieslēdziet to ar `use` un (kur tas ir jēgpilni) izslēdziet ar `no`.

Vissvarīgākā pragma, `strict`, Raku ir **ieslēgta pēc noklusējuma**: tā pieprasa, lai katrs mainīgais tiktu deklarēts pirms izmantošanas, tāpēc pārrakstīšanās mainīgā nosaukumā tiek uztverta, nevis klusi izveido jaunu mainīgo.

Izslēdzot `strict` ar `no strict`, šī prasība tiek atcelta, tāpēc jūs varat piešķirt vērtību mainīgajam, kas nekad nav ticis deklarēts ar `my`:

```raku
no strict;

$x = 42;
say $x; # 42
```

Ar noklusēto `strict` spēkā, šis `$x = 42` būtu kompilēšanas laika kļūda — *Variable '$x' is not declared*. Rinda `no strict` atslābina noteikumu pārējā aptvēruma tvēruma ietvaros.

Citas pragmas ietver `fatal` (kas pārveido klusu kļūdu izmestā izņēmumā — noderīgi, kad esat iepazinuši izņēmumu apstrādi), `isms` (lai atļautu idiomas no citām valodām) un `variables` (lai pielāgotu mainīgo noteikumus). Pragmas iedarbība ir _leksiska_ — tā ilgst tikai līdz bloka beigām, kurā tā parādās — tāpēc jūs varat pastiprināt vai atslābināt noteikumu tieši tajā koda reģionā, kur tas ir nepieciešams.

Viena pragma pieņem argumentu: `lib` pievieno direktoriju sarakstam, kurā Raku meklē, ielādējot moduļus — tas ir programmas iekšējais ekvivalents `-I` komandrindas opcijai:

```raku
use lib 'lib';
```

Jūs to izmantosiet, kad sāksiet rakstīt un ielādēt savus [moduļus](/lv/advanced/modules-basics/using-modules).

{% include nav.html %}
