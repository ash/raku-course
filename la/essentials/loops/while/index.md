---
title: 'Utendo `while`'
---

{% include menu.html %}

Constructum `while` conditionem Booleanam et clausulam codicis habet. Raku clausulam codicis iterum atque iterum exsequitur _dum_ condicio est `True`.

```raku
my $x = 0;
while $x <= 10 {
    $x = prompt 'Intra numerum, qui non maior est quam 10: ';
    say "Intrasti $x.";
}
say "$x maior est quam 10.";
```

Programma rogat ut numerum intres, et si numerus non maior est quam 10, corpus anuli iteratur. Simul ac numerus intratus conditionem `$x <= 10` frangit, anulus desinit, et sequens linea programmatis exsequitur.

```console
$ raku t.raku
Intra numerum, qui non maior est quam 10: 10
Intrasti 10.
Intra numerum, qui non maior est quam 10: 4
Intrasti 4.
Intra numerum, qui non maior est quam 10: 1
Intrasti 1.
Intra numerum, qui non maior est quam 10: 20
Intrasti 20.
20 maior est quam 10.
```

{% include nav.html %}