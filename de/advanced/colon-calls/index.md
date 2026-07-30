---
title: Aufruf mit Doppelpunkt
translations_gpt:
---

{% include menu.html %}

Wenn du eine Methode oder eine Subroutine aufrufst, setzt du ihre Argumente normalerweise in Klammern: `@a.grep(* > 5)`. Raku bietet eine zweite Form an — setze einen **Doppelpunkt** nach dem Namen, und alles nach dem Doppelpunkt wird zur Argumentliste, ganz ohne Klammern:

```raku
say (1..10).grep: * %% 2; # (2 4 6 8 10)
```

Der Doppelpunkt in `grep:` erfüllt dieselbe Aufgabe wie die Klammern: `(1..10).grep: * %% 2` bedeutet genau dasselbe wie `(1..10).grep(* %% 2)`. Beide Formen sind austauschbar:

```raku
say <a b c>.join('-'); # a-b-c
say <a b c>.join: '-'; # a-b-c
```

Die Doppelpunkt-Form ist besonders angenehm bei Methoden, die einen **Block** oder einen [Whatever](/de/advanced/whatever)-Ausdruck entgegennehmen, da sie eine Verschachtelungsebene entfernt. Vergleiche:

```raku
my @a = 3, 1, 2;

say @a.sort({ $^b <=> $^a }); # Klammern um den Block
say @a.sort: { $^b <=> $^a }; # Doppelpunkt — keine schließende Klammer nötig
```

Beide geben `(3 2 1)` aus, aber die Doppelpunkt-Variante liest sich sauberer, besonders wenn der Block lang ist.

Dies ist das Methodenaufruf-Pendant zum klammerlosen Aufruf, den du bereits bei Listenoperatoren wie `say 1, 2, 3` verwendest — dort nimmt `say` alles nach sich als seine Argumente. Die einzige Regel, die man sich merken muss, ist, dass die Doppelpunkt-Form den **Rest der Anweisung** als Argumente verbraucht, also muss sie am **Ende** einer Aufrufkette stehen. Deshalb funktioniert `('a' .. 'z')».uc».ord.grep: 60 < * < 70`: `grep` ist der letzte Aufruf, und es gibt nichts mehr, was danach verkettet werden könnte. Wenn du weitere Methoden aufrufen musst, verwende stattdessen die Form mit Klammern oder gruppiere die Teile des gesamten Ausdrucks, um ihn klar zu machen:

```raku
say (('a' .. 'z')».uc».ord.grep: 60 < * < 70)».chr # (A B C D E)
```

Eine Sache, auf die man achten muss: Kombiniere den Doppelpunkt **nicht** mit Klammern wie `.grep:( … )`. Diese Schreibweise kollidiert mit der Signatur-Literal-Syntax `:( … )` und lässt sich nicht parsen. Verwende entweder `.grep( … )` oder `.grep: …` — das eine oder das andere, nicht beides.

{% include nav.html %}
