---
title: Kompilators Raku++ 🆕
translations_gpt:
---

{% include menu.html %}

**Raku++** — tā izpildāmais fails saucas `rakupp` — ir otrs Raku kompilators, kas pirmoreiz izlaists 2026. gada jūlijā. Kamēr Rakudo darbojas uz MoarVM virtuālās mašīnas, Raku++ ir uzrakstīts **C++** valodā, un tam nav vajadzīga sava virtuālā mašīna.

Tas ir gan **interpretators**, gan **kompilators**: tas var izpildīt programmu tieši vai pārtulkot to mašīnkodā, lai iegūtu papildu ātrumu. Tā kā nav smagas izpildlaika vides, ko palaist, `rakupp` startē dažu milisekunžu laikā, kas to padara patīkamu īsiem skriptiem un ikdienas darbam komandrindā. Tā autors to raksturo kā ātrāko Raku kompilatoru.

Raku++ implementē Raku 6.d (ar dažām 6.e iespējām). Versijā 1.5.2 tas jau iztur aptuveni 90 % Roast testu kopas — oficiālā Raku testu komplekta. Tas ir jauns, tāpēc vēl neaptver visu valodu, taču attīstās strauji.

## Interpretatora un kompilatora režīmi

Palaidiet programmu uzreiz, tāpat kā to darītu ar Rakudo:

```console
$ rakupp hello.raku
```

Vai arī lieciet Raku++ pārvērst programmu par patstāvīgu mašīnkoda izpildāmo failu, kas darbojas vēl ātrāk:

```console
$ rakupp --exe hello.raku -o hello
$ ./hello
```

Ikdienas mācībām pietiek ar parasto interpretatora režīmu; kompilēšanas režīmi ir tur, kad vēlaties papildu ātrumu.

## Pirmkods

Raku++ ir atvērtā koda projekts. To kopā ar izlaidumu binārajiem failiem un būvēšanas norādēm var atrast vietnē [github.com/ash/rakupp](https://github.com/ash/rakupp).

{% include nav.html %}
