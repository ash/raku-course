---
title: El metaoperador de reducción
translations_gpt:
---

{% include menu.html %}

Envuelve cualquier operador infijo entre corchetes y se convierte en una _reducción_: se inserta entre todos los elementos de una lista, contrayéndola a un solo valor.

```raku
say [+] 1, 2, 3, 4, 5; # 15
say [*] 1, 2, 3, 4, 5; # 120
```

`[+]` suma la lista como si hubieras escrito `1 + 2 + 3 + 4 + 5`; `[*]` la multiplica. Lo mismo funciona con cualquier operador infijo:

```raku
say [max] 4, 9, 2, 7; # 9
say [min] 4, 9, 2, 7; # 2
say [~] 'a', 'b', 'c'; # abc
```

`[max]` reduce con el operador `max` para hallar el elemento mayor, y `[~]` reduce con el operador de concatenación de cadenas `~` para pegar las piezas.

El metaoperador de reducción funciona sobre cualquier lista, incluido un rango:

```raku
say [+] 1..100; # 5050
```

Es una de las características más compactas y expresivas de Raku: la acumulación de todo un bucle en un par de corchetes.

{% include nav.html %}
