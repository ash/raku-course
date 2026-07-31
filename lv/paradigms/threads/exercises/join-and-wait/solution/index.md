---
title: 'Risinājums: Apvienojiet un gaidiet'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $t = Thread.start({ say 'first' });
$t.finish;
say 'second';
```

🦋 Atrodiet programmu failā [join-and-wait.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/join-and-wait.raku).

## Izvade

```
first
second
```

## Komentāri

1. `.finish` bloķē, līdz pavediens ir izdrukājis `first`.

1. Tikai tad galvenā programma turpina un izdrukā `second`, tāpēc secība ir garantēta. Bez `.finish` abas rindas varētu parādīties jebkurā secībā.

{% include nav.html %}
