---
title: 'Soluzione: Svuotate un channel'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $c = Channel.new;
$c.send('a');
$c.send('b');
$c.close;

say $c.list.join(',');
```

🦋 Trova il programma nel file [drain-channel.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/drain-channel.raku).

## Output

```
a,b
```

## Commenti

1. `.list` svuota in ordine ogni valore rimasto nel channel chiuso.

1. `.join(',')` incolla insieme le due stringhe con una virgola in mezzo.

{% include nav.html %}
