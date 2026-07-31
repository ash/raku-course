---
title: 'Risinājums: Rakstīšana ar deskriptoru'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $fh = open 'out.txt', :w;
$fh.say($_) for 1..3;
$fh.close;

print slurp 'out.txt';
```

🦋 Atrodiet programmu failā [write-with-a-handle.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/write-with-a-handle.raku).

## Izvade

```
1
2
3
```

## Komentāri

1. `open` ar karodziņu `:w` dod turi rakstīšanai. Turis paliek atvērts visu ciklu, tāpēc katrs `$fh.say` pievieno vēl vienu rindu — un tieši ar to turis ir pārāks par `spurt`, kas failu atvērtu no jauna katru reizi.

1. `close` izskalo datus uz disku, tāpēc sekojošais `slurp` nolasa atpakaļ visas trīs rindas.

{% include nav.html %}
