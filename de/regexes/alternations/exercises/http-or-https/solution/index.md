---
title: 'Lösung: http oder https'
translations_gpt:
---

{% include menu.html %}

Hier ist eine mögliche Lösung der Aufgabe.

## Code

```raku
say 'https://example' ~~ / http | https /;
```

🦋 Du findest den Quellcode in der Datei [http-or-https.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/alternations/http-or-https.raku).

## Ausgabe

```
｢https｣
```

## Kommentare

1. Sowohl `http` als auch `https` könnte am Anfang treffen, aber `|` verwendet longest-token matching.

1. Daher gewinnt das längere `https`, obwohl `http` zuerst geschrieben steht.

## Eine andere Lösung

Die beiden Wörter unterscheiden sich nur durch ein abschließendes `s`, statt einer Alternation können Sie dieses `s` also mit dem Quantor `?` optional machen:

```raku
say 'https://example' ~~ / https? /; # ｢https｣
```

Das `?` bindet nur an das Atom unmittelbar davor — das `s` —, nicht an das ganze Wort, `https?` liest sich also als `http` gefolgt von einem optionalen `s`. Dieses eine Muster trifft sowohl `http` als auch `https`, und gierig wie es ist, nimmt es das `s` mit, wann immer es da ist.

{% include nav.html %}
