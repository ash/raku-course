---
title: Tekenklassen
translations_gpt:
---

{% include menu.html %}

Vaak wil je niet één vast teken matchen maar elk teken uit een verzameling. Zo'n verzameling heet een _tekenklasse_ en wordt tussen `<[` en `]>` geschreven:

```raku
say 'grey' ~~ / gr <[ae]> y /; # ｢grey｣
say 'gray' ~~ / gr <[ae]> y /; # ｢gray｣
```

De klasse `<[ae]>` matcht één teken dat ofwel `a` ofwel `e` is, dus beide spellingen van de kleur matchen.

Binnen de haken kun je met twee punten een _bereik_ opsommen:

```raku
say 'a1b2' ~~ / <[0..9]> /; # ｢1｣
```

`<[0..9]>` matcht een willekeurig cijfer; het eerste cijfer in de string is `1`.

Om elk teken te matchen dat **niet** in de verzameling zit, zet je een minteken direct achter de openingshaak:

```raku
say 'stop!' ~~ / <-[a..z]> /; # ｢!｣
```

Hier matcht `<-[a..z]>` het eerste teken dat geen kleine letter is, namelijk het uitroepteken.

Je kunt meerdere stukken in één klasse combineren. Zo matcht `<[a..z A..Z 0..9]>` een letter of een cijfer. De spaties daar zijn er alleen voor de leesbaarheid — zoals overal in een regex worden spaties binnen `<[…]>` genegeerd, dus `<[a..zA..Z0..9]>` is precies dezelfde klasse.

{% include nav.html %}
