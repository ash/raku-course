---
title: 'Oplossing: Een getal met proto'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
grammar Number {
    token TOP { <number> }

    proto token number {*}
    token number:sym<dec> { \d+ }
    token number:sym<hex> { '0x' <[0..9a..f]>+ }
}

say Number.parse('0xff').defined;
```

🦋 Je kunt de broncode vinden in het bestand [proto-number.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/grammar-inheritance/proto-number.raku).

## Uitvoer

```
True
```

## Opmerkingen

1. Het prototoken `number` heeft twee varianten, `dec` en `hex`.

1. Voor `0xff` matcht de variant `dec` alleen de voorafgaande `0`, waarna `xff` zou overblijven; de variant `hex` matcht het geheel. Longest-token matching kiest daarom `hex`, en de string wordt ontleed. Dezelfde grammatica aanvaardt nog steeds een gewoon decimaal getal als `42`.

{% include nav.html %}
