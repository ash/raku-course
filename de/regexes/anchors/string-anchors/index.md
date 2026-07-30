---
title: Anfang und Ende der Zeichenkette
translations_gpt:
---

{% include menu.html %}

Zwei Anker markieren die Enden der Zeichenkette:

* `^` trifft ganz am **Anfang** der Zeichenkette
* `$` trifft ganz am **Ende**

Verwenden Sie `^`, um zu verlangen, dass der Treffer am Anfang beginnt:

```raku
say so 'http://example' ~~ /^ http /; # True
say so 'see http://x'   ~~ /^ http /; # False
```

Die zweite Zeichenkette enthält `http`, aber nicht am Anfang, das verankerte Muster scheitert also.

`^` und `$` um ein Muster zu setzen zwingt es, die **ganze** Zeichenkette zu treffen, ohne dass auf einer Seite etwas übrig bleibt:

```raku
say so 'hello'       ~~ /^ hello $/; # True
say so 'hello world' ~~ /^ hello $/; # False
```

Das ist eine sehr verbreitete Redewendung zur Prüfung — etwa „ist diese Zeichenkette genau eine Zahl?“:

```raku
say so '2025' ~~ /^ \d+ $/; # True
say so '20a5' ~~ /^ \d+ $/; # False
```

## Zeilenanker

Wenn eine Zeichenkette mehrere Zeilen hat, treffen die Partner `^^` und `$$` am Anfang und Ende **jeder Zeile** statt der ganzen Zeichenkette. Der Unterschied zu `^` und `$` zeigt sich, sobald der gesuchte Text nicht in der ersten Zeile steht: Die einfachen Anker sehen nur die ganze Zeichenkette und scheitern, während die verdoppelten in jeder Zeile treffen.

```raku
say so "cat\ndog" ~~ /^  dog  $/;  # False
say so "cat\ndog" ~~ /^^ dog $$/;  # True
```

Hier beginnt `\n` eine zweite Zeile. Das `^^` verlangt, dass `dog` am Anfang einer Zeile steht, und `$$` am Ende einer solchen; beides gilt in der zweiten Zeile, die verdoppelten Anker gelingen also dort, wo die einfachen es nicht können.

{% include nav.html %}
