---
title: Ein beschreibbarer Parameter
translations_gpt:
---

{% include menu.html %}

## Problem

Standardmäßig sind die Parameter einer Subroutine schreibgeschützt, sodass eine Routine die Variable des Aufrufers nicht ändern kann. Das Trait `is rw` hebt diese Einschränkung auf.

Schreiben Sie eine Subroutine `double`, deren einziger Parameter mit `is rw` markiert ist und die ihn direkt verdoppelt (`$n *= 2`). Rufen Sie sie mit einer Variablen auf, die `21` enthält, und geben Sie dann die Variable aus, um zu zeigen, dass sie zu `42` geworden ist.

## Beispiel

Das Programm gibt aus:

```
42
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
