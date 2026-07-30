---
title: Ein Array aliasieren
---

{% include menu.html %}

## Aufgabe

Du hast ein Array:

```raku
my @original = 10, 20, 30;
```

Erstelle einen zweiten Namen, `@alias`, der auf _dasselbe_ Array verweist (kopiere es nicht). Füge diesmal mit `push` ein neues Element zu `@original` hinzu und gib dann `@alias` aus, um zu zeigen, dass der Alias nicht nur Wertänderungen, sondern auch strukturelle Änderungen sieht.

## Beispiel

Das Programm gibt aus:

```
[10 20 30 40]
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
