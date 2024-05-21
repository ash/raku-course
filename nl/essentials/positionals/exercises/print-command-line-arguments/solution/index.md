---
title: Oplossing van ‘Print command line arguments’
---

{% include menu.html %}

Het programma haalt de argumenten van de commandoregel in de array `@*ARGS`. Dus, we moeten over de elementen ervan itereren.

## Code

```raku
.say for @*ARGS;
```

🦋 Vind het programma in het bestand [number-of-command-line-arguments.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/print-command-line-arguments.raku).

## Uitvoer

Voer het programma uit en bevestig dat het de argumenten regel voor regel afdrukt:

```console
$ raku exercises/positionals/print-command-line-arguments.raku hello command-line arguments
hello
command-line
arguments
```

{% include nav.html %}