---
title: El operador de flujo
translations_gpt:
---

{% include menu.html %}

El operador de flujo `==>` envía una lista desde la izquierda hacia la operación de la derecha. El resultado sigue después hacia donde apunte el `==>` siguiente, terminando en una variable que lo recoge:

```raku
(1..10) ==> grep(* %% 2) ==> my @evens;
say @evens; # [2 4 6 8 10]
```

Léelo de izquierda a derecha: toma `1..10`, conserva los números pares y guarda el resultado en `@evens`. El operador `%%` significa «es divisible por», así que `* %% 2` conserva los números pares.

La regla importante es que un flujo debe **terminar en un destino**, normalmente `my @array` (o una variable ya existente). Los datos fluyen hacia delante hasta él. Escribir la asignación al revés, con `=`, no hace lo que quieres, porque el flujo y la asignación compiten; deja siempre que el flujo termine en su variable.

Un flujo no es más que otra manera de escribir una cadena de operaciones sobre listas. El mismo resultado podría escribirse `my @evens = (1..10).grep(* %% 2)`. La forma de flujo luce cuando hay varias etapas, como muestra el tema siguiente.

{% include nav.html %}
