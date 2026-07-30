---
title: 'Oplossing: Maak een kanaal leeg'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $c = Channel.new;
$c.send('a');
$c.send('b');
$c.close;

say $c.list.join(',');
```

🦋 Je kunt de broncode vinden in het bestand [drain-channel.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/drain-channel.raku).

## Uitvoer

```
a,b
```

## Opmerkingen

1. `.list` haalt elke waarde die in het gesloten kanaal over is op volgorde eruit.

1. `.join(',')` plakt de twee strings met een komma ertussen aaneen.

{% include nav.html %}
