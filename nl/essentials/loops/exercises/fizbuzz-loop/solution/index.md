---
title: 'Oplossing: FizzBuzz in een lus'
---

{% include menu.html %}

Deze keer gebeurt de deelbaarheidscontrole in een lus. In plaats van direct afdrukken, wordt de zin eerst verzameld in een aparte variabele en later geïnterpoleerd in een string.

## Code

Hier is de nieuwe oplossing:

```raku
for 1..50 -> $n {
    my $fizzbuzz = '';
    $fizzbuzz ~= 'Fizz' if $n %% 3;
    $fizzbuzz ~= 'Buzz' if $n %% 5;
    say "$n: $fizzbuzz";
}
```

🦋 Vind het programma in het bestand [fizbuzz-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/loops/fizbuzz-loop.raku).

## Uitvoer

```console
$ raku exercises/loops/fizbuzz-loop.raku
```

## Opmerking

Voor een pedante probleemoplosser is de oplossing misschien niet perfect omdat er een spatie na de dubbele punt wordt afgedrukt, zelfs voor die nummers die geen Fizz of Buzz krijgen. Pas het programma aan om dat probleem te vermijden.

{% include nav.html %}