---
title: 'Oplossing: Splits een bestandsnaam'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
if 'report.txt' ~~ / (\w+) '.' (\w+) / {
    say ~$0;
    say ~$1;
}
```

🦋 Je kunt de broncode vinden in het bestand [split-filename.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/split-filename.raku).

## Uitvoer

```
report
txt
```

## Opmerkingen

1. Het eerste haakjespaar captureert de basisnaam in `$0`, het tweede captureert de extensie in `$1`. De punt ertussen staat tussen aanhalingstekens zodat hij een letterlijke `.` matcht in plaats van een willekeurig teken.

1. De `~` voor elke capture zet hem in stringcontext, zodat hij als kale tekst afgedrukt wordt. Een simpele `say $0` zou in plaats daarvan het matchobject met zijn hoekhaken tonen, `｢report｣`. `say $0.Str` schrijven doet hetzelfde als `say ~$0`.

{% include nav.html %}
