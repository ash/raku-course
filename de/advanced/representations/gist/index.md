---
title: Die `.gist`-Methode
---

{% include menu.html %}

Die Methode `.gist` gibt eine **menschenfreundliche** Darstellung eines Wertes zurück -- die Form, die man am liebsten *lesen* möchte. Genau das geben `say` (und `note`) aus: Sie rufen `.gist` auf jedem Argument auf.

```raku
say 42.gist;     # 42
say 'Raku'.gist; # Raku
```

Bei einfachen Werten ist der Gist einfach der Wert selbst. Bei zusammengesetzten Daten fügt `.gist` ein wenig Formatierung hinzu, damit die Struktur lesbar bleibt:

```raku
my @a = 'alpha', 'beta', 'gamma';
say @a.gist; # [alpha beta gamma]
```

Ein Typobjekt -- ein Wert, der den Typ selbst repräsentiert -- wird von gist als sein Name in Klammern dargestellt, was es leicht macht, ihn in der Ausgabe zu erkennen:

```raku
say Int.gist; # (Int)
```

{% include nav.html %}
