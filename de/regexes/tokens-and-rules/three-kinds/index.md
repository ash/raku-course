---
title: regex, token und rule
translations_gpt:
---

{% include menu.html %}

Die drei Schlüsselwörter bauen aufeinander auf:

* `regex` — weicht zurück, wie die Muster in `/ … /`
* `token` — weicht **nicht** zurück
* `rule` — wie `token`, aber Leerzeichen im Muster sind bedeutsam

_Zurückweichen_ (Backtracking) bedeutet, dass die Maschine, wenn ein späterer Teil des Musters scheitert, zurückgeht und für einen früheren Teil einen kürzeren Treffer versucht. Ein `regex` tut das:

```raku
my regex r { \w+ 'b' }
say so 'aaab' ~~ / <r> /; # True
```

`\w+` greift sich zuerst das ganze `aaab` und muss dann das letzte `b` wieder hergeben, damit das wörtliche `b` treffen kann. Ein `token` weigert sich, etwas herzugeben:

```raku
my token t { \w+ 'b' }
say so 'aaab' ~~ / <t> /; # False
```

Hier nimmt `\w+` das ganze `aaab`, das wörtliche `b` findet nichts mehr vor, und das Token scheitert schlicht, statt zurückzuweichen.

Das klingt nach einer Einschränkung, doch für Grammatiken ist es genau richtig: Jedes Token soll eine saubere Sache treffen und sich darauf festlegen. Das macht das Zerlegen schneller und das Ergebnis vorhersagbar. **Nehmen Sie standardmäßig `token`**; greifen Sie nur zu `regex`, wenn Sie das Zurückweichen wirklich brauchen — und das ist selten.

{% include nav.html %}
