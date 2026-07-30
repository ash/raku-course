---
title: 'Oplossing: Haal getallen eruit en tel ze op'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $text = 'order 12 apples, 3 pears and 25 plums';

my @numbers = $text.comb(/\d+/);

say "numbers: @numbers[]";
say "sum: { [+] @numbers }";
```

🦋 Je kunt de broncode vinden in het bestand [extract-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/regex-grammars/extract-numbers.raku).

## Uitvoer

```
numbers: 12 3 25
sum: 40
```

## Opmerkingen

1. De regex `/\d+/` aan `.comb` meegeven geeft elke reeks cijfers als aparte
string terug en negeert de woorden ertussen.

1. `[+] @numbers` telt ze op en maakt onderweg getallen van de cijferstrings.

{% include nav.html %}
