---
title: 'Solvo: Poentoj el CSV-linioj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

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

🦋 Vi povas trovi la fontkodon en la dosiero [csv-averages.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/csv-averages.raku).

## Eligo

```
average: 82
above average:
  Anna
  Cara
```

## Komentoj

1. Disigi ĉiun linion ĉe la komo kaj atribui al `($name, $mark)` malpakas la
du kampojn samtempe; `.Int` transformas la poentan tekston en nombron.

1. La mezumo estas la sumo de la valoroj dividita per ilia nombro; ĉiu, kies poento
superas ĝin, estas listigita. Ĉi tie la mezumo rezultas kiel plena `82`.

1. Tiu fina buklo skribeblas kiel ĉenstacio. `sort` ordigas la parojn, `grep`
konservas tiujn super la mezumo, kaj `map` reduktas ĉiun postrestantan paron al ĝia
nomo — do la korpo de la buklo portas nenian logikon, nur la presadon:

    ```raku
    say "  $_" for %score.sort.grep(*.value > $average).map(*.key);
    ```

    Legata de maldekstre dekstren, ĉi tio diras ĝuste tion, kion ĝi faras: ordigu,
konservu tiujn super la mezumo, prenu iliajn nomojn. Ĉiu etapo estas malgranda,
memstara paŝo, kaj `*.value` / `*.key` estas [Whatever-steloj](/eo/advanced/whatever),
kiuj konstruas unu-argumentan blokon senpere.

{% include nav.html %}
