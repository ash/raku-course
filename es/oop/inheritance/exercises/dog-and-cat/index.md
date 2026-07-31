---
title: Empleados y roles
translations_gpt:
---

{% include menu.html %}

## Problema

Define una clase base `Employee` con un atributo `name`, un método `role` que devuelva `'staff'` y un método `badge` que devuelva la cadena `<nombre> - <rol>` (usando su propio `role`).

Después define dos clases hijas, `Manager` e `Intern`, que hereden de `Employee` y sobrescriban `role` para devolver `'manager'` e `'intern'` respectivamente.

Imprime la credencial de una gerente llamada `Anna` y de un becario llamado `Bob`.

## Ejemplo

El programa imprime:

```
Anna - manager
Bob - intern
```

## Solución

✅ [Ver la solución](solution)

{% include nav.html %}
