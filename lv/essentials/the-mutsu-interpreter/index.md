---
title: Interpretators mutsu
translations_gpt:
---

{% include menu.html %}

**mutsu** ir trešā Raku īstenošana, ko **Rust** valodā uzrakstījis Tokuhiro Matsuno. Tāpat kā Rakudo, tas kompilē jūsu programmu baitkodā un izpilda to uz virtuālās mašīnas — taču tā nav MoarVM, bet paša mutsu virtuālā mašīna, kas iebūvēta izpildāmajā failā `mutsu`.

mutsu implementē Raku 6.d un tiek aktīvi izstrādāts. Tā autors atklāti saka, ka mutsu vēl nav piemērots lietošanai produkcijas vidē, taču tas jau iztur gandrīz visus Roast testu failus, tāpēc gandrīz visas šī kursa programmas uz tā darbojas bez izmaiņām.

Mācoties nozīme ir vienam trūkumam: dažu kompilēšanas laika pārbaužu vēl nav. Visredzamākais piemērs: versijā 0.24.0 mutsu neziņo par mainīgo, ko aizmirsāt deklarēt, jau pirms programmas palaišanas, kā to dara Rakudo un Raku++. Kad kurss rāda šādu kļūdas paziņojumu, izmēģiniet attiecīgo piemēru ar kādu no abiem pārējiem kompilatoriem.

## Raku pārlūkprogrammā

mutsu var arī kompilēt uz WebAssembly, tāpēc tas darbojas arī tīmekļa lappusē. Tā vietne [tokuhirom.github.io/mutsu](https://tokuhirom.github.io/mutsu/) to izmanto Raku ievadam angļu un japāņu valodā, praktiskai pamācībai un spēļu laukumam, kurā varat palaist Raku bez jebkādas instalēšanas — visu šajās lappusēs darbina pats mutsu.

## Moduļi

mutsu nāk ar savu zef pakotņu pārvaldnieka kopiju, ko sauc `mzef`, tāpēc Raku moduļus tam var instalēt ierastajā veidā — ar `mzef install`, kam seko moduļa nosaukums.

## Pirmkods

mutsu ir atvērtā koda projekts. To kopā ar izlaidumu būvējumiem un būvēšanas norādēm var atrast vietnē [github.com/tokuhirom/mutsu](https://github.com/tokuhirom/mutsu).

{% include nav.html %}
