---
title: 'Oplossing: Tel de uitzendingen'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $count = 0;
Supply.from-list(<a b c d e>).tap(-> $v { $count++ });
say $count;
```

🦋 Je kunt de broncode vinden in het bestand [count-emissions.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/supplies/count-emissions.raku).

## Uitvoer

```
5
```

## Opmerkingen

1. De tap draait één keer per uitgezonden waarde, wat die waarden ook zijn.

1. `$count` elke keer verhogen geeft het totale aantal waarden, `5`.

{% include nav.html %}
