---
title: Debuggen met `dd`
translations_gpt: Raku-programma's debuggen
---

{% include menu.html %}

Er zijn verschillende manieren om een programma te debuggen, van een eenvoudige printinstructie zoals `say` tot meer uitgebreide traceerhulpmiddelen. In dit onderdeel bekijken we de handige `dd`-routine. Deze is ingebouwd in de Rakudo-compiler, hoewel het geen onderdeel is van de Raku-taalstandaard zelf.

De naam `dd` staat voor _data dumper_. Anders dan `say` of `put`, die bedoeld zijn voor de normale uitvoer van het programma, toont `dd` een ontwikkelaarsvriendelijke weergave van een waarde -- dezelfde codeachtige vorm die wordt geproduceerd door de [`.raku`](/nl/advanced/representations/raku-method)-methode uit het vorige onderdeel. Het schrijft naar de standaardfoutstroom, zodat de uitvoer niet vermengd raakt met de gegevens die je programma voor de gebruiker afdrukt.

{% include nav.html %}
