---
title: 'Solvo: Ŝanĝebla etikedo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
class Label {
    has $.text is rw;
}

my $l = Label.new(text => 'draft');
$l.text ~= ' (revised)';
say $l.text;
```

🦋 Vi povas trovi la fontkodon en la dosiero [changeable-label.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/changeable-label.raku).

## Eligo

```
draft (revised)
```

## Komentoj

1. La trajto `is rw` igas la atingilon redoni skribeblan ujon, do ĝi povas aperi maldekstre de atribuo.

1. Ĉar ĝi estas skribebla, la kunmetita operatoro `~=` ankaŭ funkcias sur ĝi: `$l.text ~= ' (revised)'` legas la nunan tekston, kunigas la sufikson, kaj konservas la rezulton reen — ĉio tra la sama atingilo.

{% include nav.html %}
