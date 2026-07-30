---
title: zef en het ecosysteem
translations_gpt:
---

{% include menu.html %}

`zef` is de module-installeerder van Raku. Je hebt het al gebruikt om modules op naam te installeren; het werkt ook op een lokale distributiemap. Vanuit een distributie kun je direct testen en installeren:

```
zef test .
zef install .
```

`zef test .` voert de bestanden onder `t/` uit, en `zef install .` installeert de distributie in je Raku zodat andere programma's het kunnen `use`n. Installeren op naam — `zef install Cro` — doet hetzelfde nadat eerst de distributie uit het ecosysteem is gedownload.

Om je eigen distributie te **publiceren** zodat anderen het op naam kunnen installeren, upload je het naar het ecosysteem. Het gebruikelijke gereedschap hiervoor is `fez`:

```
fez upload
```

Dit verpakt de huidige distributie en dient het in bij het Raku-ecosysteem, waarna `zef install Maths::Simple` voor iedereen werkt.

> Deze commando's vereisen dat `zef`/`fez` is geïnstalleerd en netwerktoegang, en uploaden vereist een ecosysteemaccount.

De levenscyclus van een gedeelde module is dus: maak de structuur aan met een `META6.json`, test met `zef test`, en publiceer met `fez upload`. Vanaf dat moment is het gewoon een naam die iedereen kan `zef install`en.

{% include nav.html %}
