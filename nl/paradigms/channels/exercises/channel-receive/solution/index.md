---
title: 'Oplossing: Ontvang een waarde'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $c = Channel.new;
$c.send('a');
$c.send('b');
say $c.receive;
```

🦋 Je kunt de broncode vinden in het bestand [channel-receive.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/channels/channel-receive.raku).

## Uitvoer

```
a
```

## Opmerkingen

1. Een kanaal geeft waarden terug in de volgorde waarin ze verstuurd zijn.

1. `'a'` werd als eerste verstuurd, dus geeft de eerste `.receive` die terug.

{% include nav.html %}
