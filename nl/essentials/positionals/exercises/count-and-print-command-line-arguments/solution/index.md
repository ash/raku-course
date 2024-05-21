---
title: Oplossing van 'Tel en print command-line argumenten'
---

{% include menu.html %}

In dit programma is een `for` lus een goede keuze.

## Code

```raku
for ^@*ARGS -> $n {
    say "{$n + 1}. @*ARGS[$n]";
}
```

🦋 Vind het programma in het bestand [count-and-print-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/count-and-print-arguments.raku).

## Uitvoer

Voer het programma uit en bevestig dat het de argumenten en regelnummers print:

```console
$ raku exercises/positionals/count-and-print-arguments.raku one two three four
1. one
2. two
3. three
4. four
```

## Discussie

Dit programma gebruikt een paar handige trucjes. Ten eerste gaat de `for` lus langs het [bereik dat is geconstrueerd met `^`](/nl/essentials/ranges/excluding-endpoints). Dus, het bereik begint vanaf 0 en gaat tot (maar niet inclusief) de waarde van `@*ARGS`. In deze context [geeft het de lengte van de array terug](/nl/essentials/positionals/arrays#size).

Aangezien het eerste element van een array index `0` heeft, en de taak vereist dat we de regels tellen vanaf `1`, wordt deze eenvoudige verschuiving berekend [binnen een codeblok](/nl/essentials/strings/code-interpolation) in een string: `"{$n + 1} ..."`.

{% include nav.html %}