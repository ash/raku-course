---
title: run un shell
translations_gpt:
---

{% include menu.html %}

Ārēju programmu var palaist divējādi. Funkcija `run` ņem komandu un tās argumentus kā **atsevišķas** vērtības un palaiž programmu tieši, neiesaistot čaulu:

```raku
run 'echo', 'hello';
```

Tas palaiž programmu `echo` ar vienu argumentu `hello`, kas izdrukā `hello`. Tā kā argumenti tiek padoti atsevišķi, nav riska, ka čaula nepareizi iztulkotu atstarpes vai īpašās rakstzīmes — `run` ir drošais noklusējums.

Funkcija `shell` tā vietā padod sistēmas čaulai **vienu virkni**, ko tā iztulko. Tas ļauj izmantot čaulas iespējas, piemēram, caurules un novirzīšanu:

```raku
shell 'echo hello | tr a-z A-Z';
```

Šeit čaula palaiž `echo`, izvada tā izvadi caur `tr` un izdrukā `HELLO`. Ērtums nāk ar brīdinājumu: tā kā čaula virkni parsē, `shell` komandas būvēšana no neuzticamas ievades ir bīstama. Dodiet priekšroku `run`, ja vien jums nav tieši vajadzīgas čaulas iespējas.

Abas atgriež `Proc` objektu, kas apraksta, kā programma beidza darbu. Pēc noklusējuma palaistā programma dala jūsu programmas izvadi, tāpēc tās izdrukātais parādās ekrānā. Lai šo izvadi tā vietā noķertu, tā ir jāpieprasa — un tas ir nākamā temata priekšmets.

{% include nav.html %}
