---
title: Benoemde regexes
translations_gpt:
---

{% include menu.html %}

Tot nu toe schreef je patronen rechtstreeks binnen `/ … /`. Je kunt een patroon ook een **naam** geven en het hergebruiken, net als een subroutine. Declareer er een met `my regex` (of `my token`, dat je binnenkort naar behoren tegenkomt):

```raku
my regex number { \d+ }
```

Om een benoemde regex binnen een ander patroon te gebruiken, schrijf je zijn naam tussen punthaken, `<number>`:

```raku
my regex number { \d+ }

if '42 cats' ~~ / <number> / {
    say $<number>; # ｢42｣
}
```

`<number>` aanroepen matcht het patroon **en** captureert het onder die naam, dus is de gematchte tekst beschikbaar als `$<number>` — een benoemde capture die je er gratis bij krijgt.

Een benoemde regex kan in één patroon meerdere keren gebruikt worden. Wanneer hij meer dan één keer voorkomt, worden de captures een lijst die je op index bereikt:

```raku
my regex num { \d+ }

if '3-4' ~~ / <num> '-' <num> / {
    say $<num>[0]; # ｢3｣
    say $<num>[1]; # ｢4｣
}
```

Benoemde regexes houden patronen leesbaar en laten je grotere patronen bouwen uit kleinere, goed benoemde onderdelen. Precies dat is wat een grammatica op grotere schaal doet.

{% include nav.html %}
