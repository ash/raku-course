---
title: 'Solvo: Numeru la liniojn'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
spurt 'words.txt', "apple\nbanana\ncherry\n";

my $n = 0;
for 'words.txt'.IO.lines -> $line {
    $n++;
    say "$n: $line";
}
```

🦋 Vi povas trovi la fontkodon en la dosiero [shout-the-lines.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/shout-the-lines.raku).

## Eligo

```
1: apple
2: banana
3: cherry
```

## Komentoj

1. `spurt` skribas la tri vortojn en la dosieron, apartigitajn per linifinoj.

1. `.IO.lines` donas la liniojn unu post la alia, sen iliaj finaj linifinoj. Ni tenas nombrilon `$n`, kiun ni pliigas ĉe ĉiu paso, do ĉiu linio estas presata kune kun sia pozicio en la dosiero.

{% include nav.html %}
