---
title: 'Risinājums: Pod sadaļa'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
=begin pod

=head1 My Module

This module does something useful.

=end pod

say $=pod[0].contents.elems;
```

🦋 Atrodiet programmu failā [a-pod-section.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/pod/a-pod-section.raku).

## Izvade

```
2
```

## Komentāri

1. `$=pod` satur faila Pod kā bloku sarakstu; `$=pod[0]` ir vienīgais bloks `=begin pod`.

1. Tā `.contents` ir tajā ligzdotie bloki — virsraksts `=head1` un rindkopa —, tāpēc `.contents.elems` ir `2`. Šāda ieiešana struktūrā ir veids, kā programma nolasa savu dokumentāciju kā datus.

{% include nav.html %}
