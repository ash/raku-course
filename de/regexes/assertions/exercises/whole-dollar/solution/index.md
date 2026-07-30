---
title: 'Lösung: Ein Betrag in ganzen Dollar'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say '$50' ~~ / <?after '$'> \d+ >> <!before '.'> /;
```

🦋 Du findest den Quellcode in der Datei [whole-dollar.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/assertions/whole-dollar.raku).

## Ausgabe

```
｢50｣
```

## Kommentare

1. `<?after '$'>` ist ein bejahender Lookbehind — er verlangt ein `$` unmittelbar vor der Zahl — und `<!before '.'>` ein verneinender Lookahead — er verlangt, dass **kein** `.` folgt. Weder das `$` noch die Umgebung wird Teil des Treffers, das Ergebnis ist also nur `50`.

1. Das `>>` ist eine Wortgrenze, die das Ende der Zahl markiert. Ohne sie könnte das gierige `\d+` zurückweichen: Bei `$39.99` gäbe es die `9` her und träfe `3` (dem kein `.` folgt). `>>` zwingt dazu, die ganze Zahl zu nehmen, sodass `$3.99` und `$39.99` richtigerweise nichts treffen.

1. Das ist ein Fall, in dem sich ein Lookahead lohnt: „nicht gefolgt von einem Dezimalpunkt“ lässt sich nicht mit einer gewöhnlichen capturenden Gruppe ausdrücken, denn dort gibt es nichts zu capturen — nur eine Bedingung zu prüfen.

{% include nav.html %}
