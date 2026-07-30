---
title: Globales Treffen
translations_gpt:
---

{% include menu.html %}

Standardmäßig findet ein Regex nur den **ersten** Treffer. Das Adverb `:g` (kurz für `:global`) findet **jeden** Treffer in der Zeichenkette. Es wird am Operator `m///` geschrieben:

```raku
my @all = 'a1b2c3' ~~ m:g/\d/;
say @all;       # [｢1｣ ｢2｣ ｢3｣]
say @all.elems; # 3
```

Mit `:g` verhält sich das Ergebnis wie eine Liste von Match-Objekten — eines für jede Stelle, an der das Muster gefunden wurde. Sie können sie zählen, über sie laufen oder jedes in eine Zeichenkette verwandeln:

```raku
my @numbers = 'a12 b3 c456' ~~ m:g/\d+/;
say @numbers.map(*.Str).join(', '); # 12, 3, 456
```

Hier hat `\d+` drei getrennte Ziffernfolgen getroffen, und `:g` hat sie alle eingesammelt.

Globales Treffen ist das natürliche Werkzeug, sobald die Frage „wie viele …“ oder „alle …“ lautet statt „gibt es ein …“.

{% include nav.html %}
