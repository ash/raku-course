---
title: 'Solvo: La plej longa ĉeno'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my @animals = 'cat', 'elephant', 'dog', 'fox';

say @animals.reduce(-> $a, $b { $b.chars > $a.chars ?? $b !! $a });
```

🦋 Vi povas trovi la fontkodon en la dosiero [longest-string.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/reduction/longest-string.raku).

## Eligo

```
elephant
```

## Komentoj

1. La bloko konservas la pli longan el siaj du argumentoj: `$a` estas la plej longa ĝis nun vidita ĉeno, `$b` estas la sekva, kaj la ternario redonas tiun kun pli da signoj.

1. `reduce` portas tiun venkinton antaŭen kiel `$a` ĉe la sekva voko, do post trairi la tutan liston la akumulita valoro estas la plej longa ĉeno el ĉiuj — `elephant`.

{% include nav.html %}
