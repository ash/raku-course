---
title: Waarden omzetten naar tekst
---

{% include menu.html %}

Wanneer een programma een waarde toont — wanneer je het `say`t, print, of in een string invoegt — moet die waarde omgezet worden naar tekst. Raku heeft niet een enkele vaste manier om dit te doen. In plaats daarvan heeft elke waarde een paar standaardmethodes, die elk een string produceren voor een ander doel:

* `.gist` — een mensvriendelijke vorm, die `say` afdrukt.
* `.Str` — de gewone stringvorm, gebruikt in stringcontext.
* `.raku` — een codeachtige vorm, handig bij het debuggen.

Alle drie zijn gewone methodes die voor elke waarde in de taal gedefinieerd zijn, dus ze werken op dezelfde manier voor een getal, een string, een array of een eigen object. De volgende pagina's bekijken elke methode op zijn beurt en helpen je vervolgens de juiste te kiezen; [het volgende deel introduceert `dd`](/nl/advanced/dd), een Rakudo-hulpmiddel dat bovenop `.raku` gebouwd is.

{% include nav.html %}
