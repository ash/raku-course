---
title: Übung ’Erben Sie eine Grammatik‘
translations_gpt:
---

{% include menu.html %}

## Aufgabe

Schreiben Sie eine Basisgrammatik `Animal`, deren `TOP` ein Token `sound` trifft (ein beliebiges Wort). Schreiben Sie dann zwei Grammatiken, die von ihr erben: `Dog`, die `sound` so überschreibt, dass es `woof` trifft, und `Cat`, die es so überschreibt, dass es `meow` trifft. Zerlegen Sie `'woof'` mit `Dog`, `'meow'` mit `Cat` und — um zu zeigen, dass jede ihren eigenen Laut behält — auch `'meow'` mit `Dog`. Geben Sie für jedes aus, ob es gelungen ist.

## Beispiel

Das Programm gibt aus:

```
True
True
False
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
