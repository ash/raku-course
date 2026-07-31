---
title: 'Solvo: Du fadenoj'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
my ($x, $y);
my $a = Thread.start({ $x = 10 * 10 });
my $b = Thread.start({ $y = 20 * 20 });
$a.finish;
$b.finish;
say $x + $y;
```

🦋 Vi povas trovi la fontkodon en la dosiero [two-threads.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/two-threads.raku).

## Eligo

```
500
```

## Komentoj

1. La du fadenoj kuras samtempe, ĉiu skribante sian rezulton en sian propran komunan variablon.

1. Legi `$x` kaj `$y` okazas nur **post** ambaŭ vokoj de `.finish`, do la rezultoj estas garantiite pretaj: `100 + 400` estas `500`. Kunigi antaŭ legi estas tio, kio faras la valoron fidinda.

{% include nav.html %}
