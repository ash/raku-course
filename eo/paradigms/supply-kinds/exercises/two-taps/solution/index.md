---
title: 'Solvo: Du konektiĝoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $s = Supply.from-list(1, 2, 3);

my @doubled;
my @tripled;
$s.map(* * 2).tap(-> $v { @doubled.push($v) });
$s.map(* * 3).tap(-> $v { @tripled.push($v) });

say @doubled;
say @tripled;
```

🦋 Vi povas trovi la fontkodon en la dosiero [two-taps.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supply-kinds/two-taps.raku).

## Eligo

```
[2 4 6]
[3 6 9]
```

## Komentoj

1. `Supply.from-list` estas laŭpeta, do ĝi represpektas sian plenan sinsekvon por **ĉiu** konekto, sendepende.

1. Tio ebligas al la du konektoj plenumi malsamajn ĉenstaciojn super la sama fonto: unu duobligas, unu trioblas. Ĉiu vidas la tutan `1, 2, 3`, do la rezultoj estas `[2 4 6]` kaj `[3 6 9]`.

{% include nav.html %}
