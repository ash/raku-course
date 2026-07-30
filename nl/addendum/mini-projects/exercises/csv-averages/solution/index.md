---
title: 'Oplossing: Scores uit CSV-regels'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my @lines = 'Anna,90', 'Bob,72', 'Cara,84';
my %score;

for @lines -> $line {
    my ($name, $mark) = $line.split(',');
    %score{$name} = $mark.Int;
}

my $average = ([+] %score.values) / %score.elems;
say "average: $average";

say "above average:";
for %score.sort -> $pair {
    say "  {$pair.key}" if $pair.value > $average;
}
```

🦋 Je kunt de broncode vinden in het bestand [csv-averages.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/csv-averages.raku).

## Uitvoer

```
average: 82
above average:
  Anna
  Cara
```

## Opmerkingen

1. Elke regel op de komma splitsen en aan `($name, $mark)` toekennen pakt de
twee velden in één keer uit; `.Int` maakt van de scoretekst een getal.

1. Het gemiddelde is de som van de waarden gedeeld door hun aantal; iedereen wiens score er
bovenuit komt wordt opgesomd. Hier komt het gemiddelde uit op een ronde `82`.

1. Die laatste lus kun je als pijplijn schrijven. `sort` zet de paren op volgorde, `grep`
houdt degene boven het gemiddelde, en `map` brengt elk overgebleven paar terug tot zijn
naam — zodat de body van de lus geen logica draagt, alleen het afdrukken:

    ```raku
    say "  $_" for %score.sort.grep(*.value > $average).map(*.key);
    ```

    Van links naar rechts gelezen zegt dit precies wat het doet: sorteren, degene boven
het gemiddelde houden, hun namen nemen. Elke fase is een kleine, op zichzelf staande stap, en
`*.value` / `*.key` zijn [Whatever-sterren](/nl/advanced/whatever) die ter plekke een
blok met één argument bouwen.

{% include nav.html %}
