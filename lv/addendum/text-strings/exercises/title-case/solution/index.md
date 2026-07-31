---
title: 'Risinājums: Katrs vārds ar lielo burtu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $title = 'the lord of the rings';

say $title.words>>.tc.join(' ');
```

🦋 Atrodiet programmu failā [title-case.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/text-strings/title-case.raku).

## Izvade

```
The Lord Of The Rings
```

## Komentāri

1. `.tc` («title-case») virknes pirmo burtu padara par lielo. Hiperoperators
`>>.tc` to piemēro visiem vārdiem uzreiz, un `.join(' ')` teikumu saliek atpakaļ.

{% include nav.html %}
