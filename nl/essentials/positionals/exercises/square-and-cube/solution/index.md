---
title: Oplossing van ‘Vierkanten en kubussen’
---

{% include menu.html %}

## Code 1

Een eenvoudige oplossing is om de `**` operator te gebruiken.

```raku
my $n = @*ARGS[0];
say $n ** 2;
say $n ** 3;
```

🦋 Vind het programma in het bestand [square-and-cube.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/square-and-cube.raku).

## Code 2

Een iets stijlvollere oplossing is om Unicode-superscripts te gebruiken.

```raku
my $n = @*ARGS[0];
say $n²;
say $n³;
```

🦋 Vind het programma in het bestand [square-and-cube-2.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/square-and-cube-2.raku).

## Output

Voer het programma een paar keer uit en test het met verschillende getallen.

```console
$ raku exercises/positionals/square-and-cube.raku 5
25
125
```

{% include nav.html %}