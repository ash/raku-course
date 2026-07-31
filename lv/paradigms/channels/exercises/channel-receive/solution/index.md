---
title: 'Risinājums: Saņemiet vērtību'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $c = Channel.new;
$c.send('a');
$c.send('b');
say $c.receive;
```

🦋 Atrodiet programmu failā [channel-receive.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/channel-receive.raku).

## Izvade

```
a
```

## Komentāri

1. Kanāls atgriež vērtības tādā secībā, kādā tās nosūtītas.

1. `'a'` tika nosūtīts pirmais, tāpēc pirmais `.receive` to atgriež.

{% include nav.html %}
