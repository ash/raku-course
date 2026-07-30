---
title: Übung ’Ein Betrag in ganzen Dollar‘
translations_gpt:
---

{% include menu.html %}

## Aufgabe

Verbinden Sie einen Lookbehind und einen Lookahead, um einen Betrag in **ganzen Dollar** zu treffen: die Ziffern, die direkt hinter einem `$` stehen und denen **kein** Dezimalpunkt folgt. `$50` trifft also (`50`), `$3.99` aber nicht — dort gibt es Cent.

Verwenden Sie einen bejahenden Lookbehind für `$` und einen verneinenden Lookahead für `.` und fügen Sie hinter den Ziffern eine Wortgrenze `>>` ein, damit die ganze Zahl getroffen wird. Geben Sie den Treffer für `'$50'` aus.

## Beispiel

Das Programm gibt aus:

```
｢50｣
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
