---
title: 'Oplossing: Twee threads'
translations_gpt:
---

{% include menu.html %}

Hier is een mogelijke oplossing voor de taak.

## Code

```raku
my ($x, $y);
my $a = Thread.start({ $x = 10 * 10 });
my $b = Thread.start({ $y = 20 * 20 });
$a.finish;
$b.finish;
say $x + $y;
```

🦋 Je kunt de broncode vinden in het bestand [two-threads.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/threads/two-threads.raku).

## Uitvoer

```
500
```

## Opmerkingen

1. De twee threads lopen gelijktijdig en schrijven elk hun resultaat in een eigen gedeelde variabele.

1. `$x` en `$y` lezen gebeurt pas **na** beide `.finish`-aanroepen, dus zijn de resultaten gegarandeerd klaar: `100 + 400` is `500`. Samenvoegen vóór het lezen is wat de waarde betrouwbaar maakt.

{% include nav.html %}
