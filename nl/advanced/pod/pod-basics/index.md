---
title: Pod-basisbeginselen
---

{% include menu.html %}

Pod-documentatie staat in je bronbestand, afgezet door regels die beginnen met `=`. De eenvoudigste manier om een blok te schrijven is tussen `=begin pod` en `=end pod`:

```raku
=begin pod

=head1 My Module

This module does something useful.

=end pod
```

Binnenin beschrijven directieven de structuur:

* `=head1`, `=head2`, ... — koppen op verschillende niveaus
* een gewone alinea — simpelweg tekst op eigen regels
* `=item` — een item in een opsommingslijst

```raku
=begin pod

=head1 Features

=item Fast
=item Small
=item Simple

=end pod
```

De regel `=head1` is een kop op het hoogste niveau; de drie `=item`-regels vormen een lijst. Pod staat naast je code zonder deze te beinvloeden — de compiler negeert het bij het uitvoeren van het programma, maar kan het op verzoek extraheren en weergeven, zoals het laatste onderwerp laat zien.

{% include nav.html %}
