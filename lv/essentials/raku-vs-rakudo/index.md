---
title: Raku, Rakudo, Raku++ un mutsu
translations_gpt:
---

{% include menu.html %}

**Raku** ir programmēšanas valodas nosaukums, savukārt **kompilators** ir programma, kas nolasa jūsu kodu un izpilda to. Raku nav piesaistīts vienam kompilatoram: šajā kursā tiek lietots **Rakudo**, nostiprinājies kompilators, un bez tā ir arī jaunāki — **Raku++** un **mutsu**.

## Vairāk nekā viens kompilators

Raku uzbūve nenosaka, kurš kompilators jālieto. Uzbūves dokumentiem līdzi nāk testu kopa Roast; kompilatoru var uzrakstīt jebkurš, un, ja tas iztur šos testus, tas ir Raku kompilators.

Ilgu laiku Rakudo bija vienīgā nobriedusi īstenošana, taču tā vairs nav. 2026. gada jūlijā parādījās otrs kompilators — **Raku++** (tā izpildāmais fails saucas `rakupp`), rakstīts C++ valodā. Tā versija 5.4.1 iztur visu Roast kopu, un tas startē pārsteidzoši ātri. Šis kurss piemēros lieto Rakudo, tomēr jūs apgūstat pašu Raku valodu, un gandrīz viss no tā bez izmaiņām darbojas arī uz Raku++.

Ir arī trešā īstenošana: **mutsu**, interpretators, ko Rust valodā uzrakstījis Tokuhiro Matsuno. Tas kompilē Raku baitkodā savai virtuālajai mašīnai un ar WebAssembly palīdzību darbojas arī tīmekļa pārlūkprogrammā — projekta vietnē ir Raku pamācība un spēļu laukums, kas balstīti uz to. mutsu tiek aktīvi izstrādāts un, pēc paša autora vārdiem, vēl nav piemērots lietošanai produkcijas vidē, taču jau iztur gandrīz visus Roast testu failus.

Nākamajās lappusēs pēc kārtas aplūkosim visus trīs — Rakudo, Raku++ un mutsu — un to, kā tos uzstādīt.

## Ārējās saites

* [raku.org](https://raku.org)
* [rakudo.org](https://rakudo.org)
* [moarvm.org](https://moarvm.org)
* [Raku++ GitHub](https://github.com/ash/rakupp)
* [mutsu](https://tokuhirom.github.io/mutsu/)
* [Roast](https://github.com/Raku/roast)

{% include nav.html %}
