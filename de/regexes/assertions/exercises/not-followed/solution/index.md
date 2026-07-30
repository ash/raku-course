---
title: 'Lösung: Nicht gefolgt von'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say so '50 dollars' ~~ / \d+ >> <!before '%'> /;
```

🦋 Du findest den Quellcode in der Datei [not-followed.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/not-followed.raku).

## Ausgabe

```
True
```

## Kommentare

1. `<!before '%'>` ist ein verneinender Lookahead: Er gelingt nur, wenn der Text direkt hinter der Zahl **kein** `%` ist.

1. Das `>>` ist eine Wortgrenze, die das **Ende** der Zahl markiert, und sie ist hier wichtig. Ohne sie würde das gierige `\d+` zurückweichen: Bei `50% off` gäbe es die `0` her und träfe nur `5` — dem *kein* `%` folgt —, das Muster würde also fälschlich gelingen. `>>` zwingt `\d+`, die ganze Zahl zu nehmen, sodass der Lookahead am tatsächlichen Ende geprüft wird. Dadurch ergibt `50 dollars` `True`, während `50% off` richtigerweise `False` ergibt.

{% include nav.html %}
