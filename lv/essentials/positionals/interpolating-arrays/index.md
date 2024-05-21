---
title: Starpelementu interpolācija masīvos
---

{% include menu.html %}

Lai interpolētu masīva elementus dubultpēdiņu virknēs, rakstiet to tāpat kā programmā: `@data[1]`. Lai interpolētu visu masīvu, pievienojiet pāri tukšu iekavu: `@data[]`. Šī programma ilustrē šo pieeju:

```raku
my @data = 10, 20, 30;

say "Pirmais: @data[0], pēdējais: @data[1]";
say "Visi elementi: @data[]";
```

Šī programma izdrukā pieprasītos datus:

```console
$ raku t.raku 
Pirmais: 10, pēdējais: 20
Visi elementi: 10 20 30
```

{% include nav.html %}