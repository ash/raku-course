---
title: 'Solvo: Ofteco de vortoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $text = 'the cat sat on the mat the cat';

my %freq;
%freq{$_}++ for $text.words;

for %freq.sort({ -.value, .key }) -> $pair {
    say "{$pair.key}: {$pair.value}";
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [word-frequency.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/word-frequency.raku).

## Eligo

```
the: 3
cat: 2
mat: 1
on: 1
sat: 1
```

## Komentoj

1. `$text.words` liveras la vortojn; `%freq{$_}++` pliigas nombrilon por ĉiu,
kreante la ŝlosilon ĉe la unua vido.

1. Ordigi laŭ `-.value` metas la plej oftajn unue; aldoni `.key` kiel duan
ordigan kampon rompas egalecojn alfabete, do la ordo estas plene determinisma.

{% include nav.html %}
