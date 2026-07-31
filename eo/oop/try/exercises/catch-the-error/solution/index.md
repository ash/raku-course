---
title: 'Solvo: Kaptu la eraron'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my $ok = try { 6 * 7 };
say $ok;

my $bad = try { die 'broken' };
say $bad.defined;
say $!.message;
```

🦋 Vi povas trovi la fontkodon en la dosiero [catch-the-error.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/try/catch-the-error.raku).

## Eligo

```
42
False
broken
```

## Komentoj

1. Kiam la bloko ruliĝas sen eraro, `try` simple taksiĝas al la valoro de la bloko, do `$ok` tenas `42`.

1. La `die` ene de la dua bloko ĵetas escepton, do tiu bloko taksiĝas al nedifinita valoro kaj `$bad.defined` estas `False`.

1. La kaptita escepto estas konservita en la speciala variablo `$!`, kaj `$!.message` redonas la tekston, kiun ĝi ricevis, `broken`.

{% include nav.html %}
