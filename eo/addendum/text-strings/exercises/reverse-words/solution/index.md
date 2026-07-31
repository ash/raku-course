---
title: 'Solvo: Inversigu la vortordon'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $sentence = 'Raku is really nice';

say $sentence.words.reverse.join(' ');
```

🦋 Vi povas trovi la fontkodon en la dosiero [reverse-words.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/reverse-words.raku).

## Eligo

```
nice really is Raku
```

## Komentoj

1. `.words` disigas la frazon en liston, `.reverse` renversas la listordon, kaj
`.join(' ')` regluas la vortojn kune per unuopaj spacoj.

{% include nav.html %}
