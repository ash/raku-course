---
title: 'Oplossing: Schrijven met een handle'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my $fh = open 'out.txt', :w;
$fh.say($_) for 1..3;
$fh.close;

print slurp 'out.txt';
```

🦋 Je kunt de broncode vinden in het bestand [write-with-a-handle.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/write-with-a-handle.raku).

## Uitvoer

```
1
2
3
```

## Opmerkingen

1. `open` met de vlag `:w` geeft een handle om te schrijven. De handle blijft gedurende de lus open, dus voegt elke `$fh.say` er een regel aan toe — dat is het voordeel van een handle boven `spurt`, die het bestand elke keer opnieuw zou openen.

1. `close` schrijft de gegevens naar schijf weg, zodat de daaropvolgende `slurp` alle drie de regels terugleest.

{% include nav.html %}
