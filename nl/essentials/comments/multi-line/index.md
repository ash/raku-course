---
title: Multi-line comments
---

{% include menu.html %}

Zodra je een opmerking wilt achterlaten die groter is dan een enkele regel, kun je ervoor kiezen om een paar enkelregelige opmerkingen te hebben of een enkele meerregelige opmerking.

Meerregelige opmerkingen beginnen met een tweekaraktercombinatie ``#` `` en worden gevolgd door een paar insluitende tekens `( )`, `{ }`, `[ ]`, of `< >` of hun herhaalde kopieën: `(( ))`, `[[[ ]]]`, enz.

Bijvoorbeeld:

```raku
my $name;
#`( We gaan de gebruiker vragen
om eerst hun naam in te voeren en vervolgens
de invoer in een variabele op te slaan. )

$name = prompt 'Wat is je naam? ';
#`{ Het programma wacht nu
totdat de gebruiker de naam invoert
en op Enter drukt. }

say $name; #`( En nu kunnen we het afdrukken )
```

{% include nav.html %}