---
title: Espressioni regolari con nome
translations_gpt:
---

{% include menu.html %}

Finora hai scritto schemi direttamente dentro `/ … /`. Puoi anche dare a uno schema un **nome** e riusarlo, proprio come una subroutine. Ne dichiari uno con `my regex` (o con `my token`, che incontrerai per bene fra poco):

```raku
my regex number { \d+ }
```

Per usare un regex con nome dentro un altro schema, scrivi il suo nome fra parentesi angolari, `<number>`:

```raku
my regex number { \d+ }

if '42 cats' ~~ / <number> / {
    say $<number>; # ｢42｣
}
```

Chiamare `<number>` riconosce lo schema **e** lo cattura sotto quel nome, quindi il testo riconosciuto è disponibile come `$<number>` — una cattura con nome che ti arriva gratis.

Un regex con nome si può usare più volte in uno stesso schema. Quando compare più di una volta, le catture diventano un elenco, raggiungibile per indice:

```raku
my regex num { \d+ }

if '3-4' ~~ / <num> '-' <num> / {
    say $<num>[0]; # ｢3｣
    say $<num>[1]; # ｢4｣
}
```

I regex con nome tengono leggibili gli schemi e ti permettono di costruirne di più grandi a partire da parti più piccole e ben nominate. È esattamente ciò che fa una grammatica su scala maggiore.

{% include nav.html %}
