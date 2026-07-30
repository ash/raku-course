---
title: 'Oplossing: Woordfrequentie'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $text = 'the cat sat on the mat the cat';

my %freq;
%freq{$_}++ for $text.words;

for %freq.sort({ -.value, .key }) -> $pair {
    say "{$pair.key}: {$pair.value}";
}
```

🦋 Je kunt de broncode vinden in het bestand [word-frequency.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/word-frequency.raku).

## Uitvoer

```
the: 3
cat: 2
mat: 1
on: 1
sat: 1
```

## Opmerkingen

1. `$text.words` levert de woorden op; `%freq{$_}++` verhoogt voor elk een teller en maakt
de sleutel bij het eerste zien aan.

1. Sorteren op `-.value` zet het frequentste voorop; `.key` als tweede
sorteerveld toevoegen breekt gelijke stand alfabetisch, zodat de volgorde volledig deterministisch is.

{% include nav.html %}
