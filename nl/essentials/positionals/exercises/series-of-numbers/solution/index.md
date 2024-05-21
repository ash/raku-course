---
title: Oplossing van ‘Print een reeks getallen’
---

{% include menu.html %}

Er zijn meerdere manieren om het gegeven probleem op te lossen.

## Code 1

De eerste oplossing is meer Raku-achtig en compact.

```raku
my $begin = prompt 'Begin: ';
my $end = prompt 'End: ';

.say for $begin .. $end;
```

🦋 Vind het programma in het bestand [series-of-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/series-of-numbers.raku).

## Code 2

De tweede mogelijke oplossing kan de `loop`-verklaring gebruiken.

```raku
my $begin = prompt 'Begin: ';
my $end = prompt 'End: ';

loop (my $n = $begin; $n <= $end; $n++) {
    say $n;
}
```

🦋 Vind het programma in het bestand [series-of-numbers-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/series-of-numbers-loop.raku).

Zoals je kunt zien, is de eerste variant aanzienlijk korter en expressiever.

## Discussie

In de eerste variant van het programma wordt de [postfix vorm van de `for`-lus](/nl/essentials/loops/postfix-for) gebruikt. In het tweede programma is er gekozen voor een `loop`.

## Uitvoer

Geef de twee getallen in de console en voer het programma uit. Beide varianten produceren dezelfde uitvoer.

```console
$ raku exercises/positionals/series-of-numbers.raku
Begin: 15
Einde: 19
15
16
17
18
19
```

{% include nav.html %}