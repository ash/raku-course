---
title: 'Risinājums: Iztukšojiet kanālu'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $c = Channel.new;
$c.send('a');
$c.send('b');
$c.close;

say $c.list.join(',');
```

🦋 Atrodiet programmu failā [drain-channel.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/drain-channel.raku).

## Izvade

```
a,b
```

## Komentāri

1. `.list` pēc kārtas iztukšo katru aizvērtajā kanālā atlikušo vērtību.

1. `.join(',')` abas virknes salīmē kopā, starp tām ieliekot komatu.

{% include nav.html %}
