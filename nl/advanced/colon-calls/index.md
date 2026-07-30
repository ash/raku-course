---
title: Aanroepen met een dubbele punt
---

{% include menu.html %}

Wanneer je een methode of een subroutine aanroept, zet je de argumenten meestal tussen haakjes: `@a.grep(* > 5)`. Raku biedt een tweede vorm -- zet een **dubbele punt** na de naam, en alles na de dubbele punt wordt de argumentenlijst, helemaal zonder haakjes:

```raku
say (1..10).grep: * %% 2; # (2 4 6 8 10)
```

De dubbele punt in `grep:` doet hetzelfde als haakjes zouden doen: `(1..10).grep: * %% 2` betekent precies `(1..10).grep(* %% 2)`. De twee vormen zijn onderling verwisselbaar:

```raku
say <a b c>.join('-'); # a-b-c
say <a b c>.join: '-'; # a-b-c
```

De dubbele-puntvorm is het prettigst bij methoden die een **blok** of een [Whatever](/nl/advanced/whatever)-expressie verwachten, omdat het een laag nesting wegneemt. Vergelijk:

```raku
my @a = 3, 1, 2;

say @a.sort({ $^b <=> $^a }); # haakjes om het blok
say @a.sort: { $^b <=> $^a }; # dubbele punt — geen sluithaakje nodig
```

Beide printen `(3 2 1)`, maar de versie met de dubbele punt leest overzichtelijker, vooral wanneer het blok lang is.

Dit is het methode-aanroep equivalent van de aanroep zonder haakjes die je al kent van lijstoperatoren zoals `say 1, 2, 3` -- daar neemt `say` alles erna als argumenten. De enige regel om te onthouden is dat de dubbele-puntvorm de **rest van de instructie** als argumenten consumeert, dus hij moet aan het **einde** van een aanroepketen staan. Daarom werkt `('a' .. 'z')>>.uc>>.ord.grep: 60 < * < 70`: `grep` is de laatste aanroep, en er is niets meer om na te ketenen. Als je meer methoden wilt aanroepen, gebruik dan de vorm met haakjes of groepeer de delen van de hele expressie om het duidelijk te maken:

```raku
say (('a' .. 'z')».uc».ord.grep: 60 < * < 70)».chr # (A B C D E)
```

Let op: combineer de dubbele punt **niet** met haakjes als `.grep:( ... )`. Die schrijfwijze botst met de handtekening-literaal-syntaxis `:( ... )` en kan niet worden geparseerd. Gebruik ofwel `.grep( ... )` ofwel `.grep: ...` -- het een of het ander, niet allebei.

{% include nav.html %}
