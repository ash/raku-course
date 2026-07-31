---
title: 'Risinājums: Izpildiet pavedienā'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $t = Thread.start({ say 'working' });
$t.finish;
```

🦋 Atrodiet programmu failā [run-in-thread.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/run-in-thread.raku).

## Izvade

```
working
```

## Komentāri

1. `Thread.start` izpilda bloku jaunā pavedienā.

1. `.finish` gaida, līdz pavediens pabeidz, tāpēc programma nebeidzas, pirms ir izdrukāts `working`.

{% include nav.html %}
