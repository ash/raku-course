---
title: Using eslif
---

{% include menu.html %}

Tot nu toe hebben we `if` en `else` geleerd. Wat als je een keten van tests wilt organiseren? Er zijn minstens twee manieren om dat in Raku te doen (eigenlijk zijn er nog meer).

Een van de mogelijkheden is om de keten van `if`, `elsif` en `else` blokken te gebruiken. Let op de spelling van `elsif`. Het is noch `elseif` noch `else if`.

```raku
my $x = prompt 'Voer het nummer in: ';
if $x > 100 {
    say "$x is groter dan 100.";
}
elsif $x > 50 {
    say "$x is groter dan 50.";
}
elsif $x > 25 {
    say "$x is groter dan 25.";
}
else {
    say "$x is 25 of kleiner.";
}
```

In dit programma zijn er drie takken en drie tests na elkaar. Zodra een van de voorwaarden `True` blijkt te zijn, wordt het bijbehorende codeblok uitgevoerd. Als geen van de controles `True` is, wordt het `else` blok uitgevoerd.

Hier zijn een paar testuitvoeringen van het programma die alle blokken activeren:

```console
$ raku t.raku
Voer het nummer in: 120
120 is groter dan 100.

$ raku t.raku
Voer het nummer in: 75      
75 is groter dan 50.

$ raku t.raku
Voer het nummer in: 30
30 is groter dan 25.

$ raku t.raku
Voer het nummer in: 10
10 is 25 of kleiner.
```

Een alternatieve manier is om het `given` en `when` paar te gebruiken, wat we in de toekomst zullen leren.

{% include nav.html %}