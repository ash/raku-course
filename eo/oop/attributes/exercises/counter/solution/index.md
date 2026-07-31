---
title: 'Solvo: Nombrilo'
translations_gpt:
---

{% include menu.html %}

Jen ebla solvo de la tasko.

## Kodo

```raku
class Counter {
    has $.count is rw = 0;
}

my $c = Counter.new;
say $c.count;

$c.count++ for ^5;

say $c.count;
```

🦋 Vi povas trovi la fontkodon en la dosiero [counter.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/counter.raku).

## Eligo

```
0
5
```

## Komentoj

1. La atributo estas deklarita `is rw`, por ke ĝia atingilo redonu skribeblan ujon, kaj `= 0` donas al ĝi komencan valoron. La unua `say` konfirmas, ke freŝa nombrilo vere komenciĝas ĉe tiu defaŭlto, `0`.

1. Ĉar la atingilo estas skribebla, inkrementi ĝin per `++` funkcias kiel atendite.

{% include nav.html %}
