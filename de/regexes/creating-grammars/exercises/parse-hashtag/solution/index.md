---
title: 'Lösung: Zerlegen Sie einen Hashtag'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
grammar Hashtag {
    token TOP { '#' <tag> }
    token tag { \w+ }
}

say Hashtag.parse('#raku')<tag>;
```

🦋 Du findest den Quellcode in der Datei [parse-hashtag.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/creating-grammars/parse-hashtag.raku).

## Ausgabe

```
｢raku｣
```

## Kommentare

1. `TOP` schreibt das feste `#` aus, gefolgt vom Token `<tag>`.

1. `.parse` verlangt, dass die ganze Zeichenkette trifft, und der Tag steht danach als Capture `<tag>` zur Verfügung.

## Eine andere Möglichkeit

Sie können stattdessen `tag` den ganzen Hashtag treffen lassen — das `#` samt dem Wort — und das Wort über eine verschachtelte Regel `word` erreichen:

```raku
grammar Hashtag {
    token TOP  { <tag> }
    token tag  { '#' <word> }
    token word { \w+ }
}

say Hashtag.parse('#raku')<tag><word>;
```

Das gibt dasselbe `｢raku｣` aus. Nun capturt `<tag>` das ganze `#raku`, während das Wort darin als `<tag><word>` erreicht wird. Die Grammatik liest sich damit etwas mehr wie das, was sie beschreibt — ein Hashtag *ist* ein `#` gefolgt von einem Wort, und das Wort ist ein benanntes Stück für sich.

{% include nav.html %}
