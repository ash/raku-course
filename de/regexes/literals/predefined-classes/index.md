---
title: Vordefinierte Zeichenklassen
translations_gpt:
---

{% include menu.html %}

Einige Zeichenklassen kommen so häufig vor, dass Raku ihnen kurze Namen gibt. Sie schreiben sie mit einem Rückstrich:

* `\d` — eine Ziffer
* `\w` — ein „Wort“-Zeichen: ein Buchstabe, eine Ziffer oder ein Unterstrich
* `\s` — ein Leerraumzeichen (Leerzeichen, Tabulator, Zeilenumbruch)

```raku
say 'order 66' ~~ /\d/; # ｢6｣
say 'a_b'      ~~ /\w/; # ｢a｣
say '  hi'     ~~ /\s/; # ｢ ｣
```

Zu jeder gibt es eine Partnerin in Großschreibung, die die **entgegengesetzte** Menge trifft:

* `\D` — alles, was keine Ziffer ist
* `\W` — alles, was kein Wortzeichen ist
* `\S` — alles, was kein Leerraum ist

```raku
say '  hi' ~~ /\S/; # ｢h｣
```

Schließlich trifft ein einzelner Punkt `.` **jedes** beliebige Zeichen:

```raku
say 'abc' ~~ /./; # ｢a｣
```

Diese vordefinierten Klassen ersparen viel Tipparbeit, und Sie werden sie im weiteren Verlauf dieses Teils ständig verwenden.

{% include nav.html %}
