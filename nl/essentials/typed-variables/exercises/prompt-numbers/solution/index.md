---
title: Oplossing van ‘Het onderzoeken van het resultaat van prompt — Nummers’
---

{% include menu.html %}

## Code

Hier is het complete programma dat het probleem oplost en zowel de ingevoerde waarde als het type ervan afdrukt.

```raku
my $n = prompt 'Enter a number: ';
say $n;
say $n.WHAT;
```

🦋 Je kunt de broncode vinden in het bestand [prompt-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/typed-variables/prompt-numbers.raku).

## Testuitvoeringen

Voer het programma meerdere keren uit en voer nummers van verschillende typen in.

### Gehele getallen

Laten we eerst gehele getallen proberen, zowel positief als negatief.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 10
10
(IntStr)
```

Het type van het resultaat is `IntStr`. Dit is een ingebouwd type dat de kenmerken heeft van zowel `Int` als `Str`.

### Rationale getallen

Laten we nu een rationaal getal proberen. Onthoud dat in Raku, notatie met een decimale punt een `Rat`-getal creëert in plaats van een drijvend-komma-getal.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 3.14
3.14
(RatStr)
```

Deze keer zegt het programma dat het type gegevens in `$n` `RatStr` is, wat staat voor een gecombineerd type van zowel `Rat` als `Str`.

### Drijvende-komma-getallen

Probeer tenslotte een getal in de wetenschappelijke notatie. Je zou op dit punt de uitvoer moeten kunnen raden.

```console
$ raku exercises/what/prompt-numbers.raku
Enter a number: 5e-14
5e-14
(NumStr)
```

Inderdaad, de nieuwe waarde is van het type `NumStr`.

{% include nav.html %}