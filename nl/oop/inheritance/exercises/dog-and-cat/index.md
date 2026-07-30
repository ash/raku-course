---
title: Oefening ’Werknemers en rollen‘
translations_gpt:
---

{% include menu.html %}

## Opgave

Definieer een basisklasse `Employee` met een attribuut `name`, een methode `role` die `'staff'` teruggeeft, en een methode `badge` die de string `<name> - <role>` teruggeeft (met gebruik van haar eigen `role`).

Definieer daarna twee kindklassen, `Manager` en `Intern`, die van `Employee` erven en `role` overschrijven zodat die respectievelijk `'manager'` en `'intern'` teruggeeft.

Druk de badge af van een manager met de naam `Anna` en een stagiair met de naam `Bob`.

## Voorbeeld

Het programma drukt af:

```
Anna - manager
Bob - intern
```

## Oplossing

✅ [Bekijk de oplossing](solution)

{% include nav.html %}
