---
title: 'Solutio: Puncta ex lineis CSV'
translations_gpt:
---

{% include menu.html %}

Ecce solutio possibilis huius exercitationis.

## Codex

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

🦋 Inveni codicem fontem in archivo [csv-averages.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/csv-averages.raku).

## Exitus

```
average: 82
above average:
  Anna
  Cara
```

## Commentarii

1. Unamquamque lineam ad comma dividere et ad `($name, $mark)` assignare duos
campos simul expandit; `.Int` textum puncti in numerum vertit.

1. Punctum medium summa valorum per numerum eorum divisa est; quicumque punctum eo maius
habet enumeratur. Hic punctum medium in integrum `82` exit.

1. Ille anulus ultimus ut fistula scribi potest. `sort` paria ordinat, `grep`
ea supra medium servat, et `map` unumquodque par superstitem ad nomen suum
reducit — itaque corpus anuli nullam logicam fert, solam impressionem:

    ```raku
    say "  $_" for %score.sort.grep(*.value > $average).map(*.key);
    ```

    A sinistra ad dextram lectum, hoc exacte dicit quod agit: ordina, serva ea
supra medium, sume nomina eorum. Unusquisque gradus parvus et in se completus est, et
`*.value` / `*.key` sunt [stellae Whatever](/la/advanced/whatever) quae blocum unius
argumenti in ipso momento aedificant.

{% include nav.html %}
