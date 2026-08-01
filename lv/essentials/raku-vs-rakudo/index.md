---
title: Raku, Rakudo un Raku++
translations_gpt:
---

{% include menu.html %}

**Raku** ir programmēšanas valodas nosaukums, savukārt **kompilators** ir programma, kas nolasa jūsu kodu un izpilda to. Raku nav piesaistīts vienam kompilatoram: šajā kursā tiek lietots **Rakudo**, nostiprinājies un vispilnīgākais no tiem, un bez tā ir arī jaunāks kompilators **Raku++**.

## Vairāk nekā viens kompilators

Raku uzbūve nenosaka, kurš kompilators jālieto. Uzbūves dokumentiem līdzi nāk testu kopa Roast; kompilatoru var uzrakstīt jebkurš, un, ja tas iztur šos testus, tas ir Raku kompilators.

Ilgu laiku Rakudo bija vienīgā nobriedusi īstenošana, taču tā vairs nav. 2026. gada jūlijā parādījās otrs kompilators — **Raku++** (tā izpildāmais fails saucas `rakupp`), rakstīts C++ valodā. Tas ir jauns un vēl neaptver visu valodu, bet jau iztur lielu daļu Roast kopas un startē pārsteidzoši ātri. Šis kurss piemēros lieto Rakudo, tomēr jūs apgūstat pašu Raku valodu, un liela daļa no tā bez izmaiņām darbojas arī uz Raku++. Nākamajās lappusēs pēc kārtas aplūkosim abus kompilatorus — Rakudo un Raku++ — un to, kā tos uzstādīt.

## Ārējās saites

* [raku.org](https://raku.org)
* [rakudo.org](https://rakudo.org)
* [moarvm.org](https://moarvm.org)
* [Raku++ GitHub](https://github.com/ash/rakupp)
* [Roast](https://github.com/Raku/roast)

{% include nav.html %}
