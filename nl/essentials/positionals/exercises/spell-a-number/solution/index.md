---
title: 'Oplossing: Spel een nummer'
---

{% include menu.html %}

Het onderstaande programma heeft een ingebouwde array met de namen van nummers van 0 tot 20 en de namen van de tientallen: 20, 30, enz. In de keten van voorwaardelijke controles wordt het nummer verdeeld naar een van de regels van spelling.

## Code

```raku
my $n = @*ARGS[0];

my @names = <
    zero one two three four five six seven eight nine ten
    eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty
    thirty fourty fifty sixty seventy eighty ninety >;

if $n < 20 {
    say @names[$n];
}
elsif $n % 10 { # Tweecijferige niet-ronde nummers, bijv. 34
    say @names[$n / 10 + 18] ~ '-' ~ @names[$n % 10];
}
else { # Veelvouden van 10, bijv. 50
    say @names[$n / 10 + 18];
}
```

🦋 Vind het programma in het bestand [spell-a-number.raku](https://github.com/ash/raku-course/blob/master/exercises/positionals/spell-a-number.raku).

## Voorbeeld

Voer het programma een paar keer uit om alle drie de takken van de `if`—`elsif`—`elses` constructie te controleren.

```console
$ raku exercises/positionals/spell-a-number.raku 5
five

$ raku exercises/positionals/spell-a-number.raku 12
twelve

$ raku exercises/positionals/spell-a-number.raku 67
sixty-seven

$ raku exercises/positionals/spell-a-number.raku 80
eighty
```

{% include nav.html %}