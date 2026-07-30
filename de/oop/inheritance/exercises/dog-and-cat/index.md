---
title: Übung ’Mitarbeiter und Rollen‘
translations_gpt:
---

{% include menu.html %}

## Aufgabe

Definieren Sie eine Basisklasse `Employee` mit einem Attribut `name`, einer Methode `role`, die `'staff'` liefert, und einer Methode `badge`, die die Zeichenkette `<name> - <role>` liefert (unter Verwendung ihres eigenen `role`).

Definieren Sie dann zwei Kindklassen, `Manager` und `Intern`, die von `Employee` erben und `role` so überschreiben, dass sie `'manager'` beziehungsweise `'intern'` liefern.

Geben Sie das Namensschild eines Managers namens `Anna` und eines Praktikanten namens `Bob` aus.

## Beispiel

Das Programm gibt aus:

```
Anna - manager
Bob - intern
```

## Lösung

✅ [Siehe die Lösung](solution)

{% include nav.html %}
