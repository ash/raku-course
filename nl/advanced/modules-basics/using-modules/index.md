---
title: Modules gebruiken
translations_gpt: Modules gebruiken
---

{% include menu.html %}

Om een module te gebruiken, laad je deze met het `use`-statement. Daarna zijn de namen die de module exporteert beschikbaar alsof je ze zelf had geschreven.

Gegeven het bestand `Greeting.rakumod` uit het vorige onderwerp, gebruikt een programma het als volgt:

```raku
use Greeting;

say hello('Anna');
```

Omdat `hello` gemarkeerd was met `is export`, maakt het `use`-statement het beschikbaar, en het programma roept het direct aan:

```
Hello, Anna!
```

Om de module te vinden, moet deze op het modulezoekpad staan. Wanneer het modulebestand in dezelfde map staat als je programma, vertel je Raku om daar te zoeken met de `-I.`-optie (de punt betekent "de huidige map"):

```console
$ raku -I. program.raku
Hello, Anna!
```

Geïnstalleerde modules (later behandeld in [Modules van het web installeren](/nl/advanced/installing-modules)) worden automatisch gevonden, dus de `-I`-optie is alleen nodig voor modules die naast je eigen programma staan.

{% include nav.html %}
