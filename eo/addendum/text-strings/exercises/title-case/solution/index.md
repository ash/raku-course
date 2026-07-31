---
title: 'Solvo: Ĉiu vorto per majusklo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $title = 'the lord of the rings';

say $title.words>>.tc.join(' ');
```

🦋 Vi povas trovi la fontkodon en la dosiero [title-case.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/title-case.raku).

## Eligo

```
The Lord Of The Rings
```

## Komentoj

1. `.tc` («titol-uskleco») majuskligas la unuan literon de ĉeno. La hiperoperatoro
`>>.tc` aplikas ĝin al ĉiu vorto samtempe, kaj `.join(' ')` rekunmetas la frazon.

{% include nav.html %}
