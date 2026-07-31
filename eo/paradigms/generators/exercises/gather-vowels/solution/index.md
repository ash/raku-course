---
title: 'Solvo: Kolekti kun kondiĉo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @vowels = gather {
    for 'education'.comb {
        take $_ if $_ ~~ / <[aeiou]> /;
    }
}

say @vowels;
```

🦋 Vi povas trovi la fontkodon en la dosiero [gather-vowels.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/generators/gather-vowels.raku).

## Eligo

```
[e u a i o]
```

## Komentoj

1. `.comb` disigas la vorton en unuopajn signojn, kiujn la buklo vizitas laŭvice.

1. `take` konservas signon nur kiam ĝi kongruas kun la vokala klaso, donante la vokalojn en la ordo, en kiu ili aperas.

{% include nav.html %}
