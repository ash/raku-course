---
title: 'Soluzione: Ricevete un valore'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my $c = Channel.new;
$c.send('a');
$c.send('b');
say $c.receive;
```

🦋 Trova il programma nel file [channel-receive.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/channel-receive.raku).

## Output

```
a
```

## Commenti

1. Un channel restituisce i valori nell'ordine in cui sono stati inviati.

1. `'a'` è stato inviato per primo, quindi il primo `.receive` lo restituisce.

{% include nav.html %}
