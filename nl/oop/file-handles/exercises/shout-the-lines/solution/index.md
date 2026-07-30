---
title: 'Oplossing: Nummer de regels'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
spurt 'words.txt', "apple\nbanana\ncherry\n";

my $n = 0;
for 'words.txt'.IO.lines -> $line {
    $n++;
    say "$n: $line";
}
```

🦋 Je kunt de broncode vinden in het bestand [shout-the-lines.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/shout-the-lines.raku).

## Uitvoer

```
1: apple
2: banana
3: cherry
```

## Opmerkingen

1. `spurt` schrijft de drie woorden naar het bestand, gescheiden door newlines.

1. `.IO.lines` levert de regels een voor een op, zonder hun afsluitende newlines. We houden een teller `$n` bij die we bij elke ronde verhogen, zodat elke regel samen met haar positie in het bestand afgedrukt wordt.

{% include nav.html %}
