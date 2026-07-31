---
title: 'Risinājums: Vārdu biežums'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $text = 'the cat sat on the mat the cat';

my %freq;
%freq{$_}++ for $text.words;

for %freq.sort({ -.value, .key }) -> $pair {
    say "{$pair.key}: {$pair.value}";
}
```

🦋 Atrodiet programmu failā [word-frequency.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/word-frequency.raku).

## Izvade

```
the: 3
cat: 2
mat: 1
on: 1
sat: 1
```

## Komentāri

1. `$text.words` dod vārdus; `%freq{$_}++` katram palielina skaitītāju, pirmajā
reizē atslēgu izveidojot.

1. Kārtošana pēc `-.value` liek biežāko pa priekšu; pievienojot `.key` kā otro
kārtošanas lauku, vienādi skaiti tiek sašķirti alfabētiski, tāpēc secība ir
pilnīgi noteikta.

{% include nav.html %}
