---
title: Een thread starten
translations_gpt:
---

{% include menu.html %}

`Thread.start` neemt een blok aan en draait het op een nieuwe thread, waarbij het een `Thread`-object teruggeeft dat het lopende werk voorstelt:

```raku
my $t = Thread.start({ say 'hello from the thread' });
```

Het blok draait gelijktijdig met de code die erop volgt. Het hoofdprogramma wacht er **niet** vanzelf op — het gaat meteen door, en de thread doet zijn werk op de achtergrond.

Eén klein maar belangrijk detail: het argument moet een codeblok zijn. Een leeg paar accolades `{ }` is een lege **hash** en geen leeg blok, dus een thread heeft altijd een body nodig die werkelijk iets doet:

```raku
my $t = Thread.start({ 2 + 2 }); # fine: a block with a body
```

Omdat het hoofdprogramma en de thread nu tegelijk lopen, kun je niet vertrouwen op de volgorde waarin hun uitvoer verschijnt — tenzij je expliciet op de thread wacht, het onderwerp van het volgende onderdeel.

{% include nav.html %}
