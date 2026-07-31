---
title: Valores y claves
translations_gpt:
---

{% include menu.html %}

Cada constante de un enum lleva tanto un nombre como un número. El método `.value` devuelve el número, y el método `.key` devuelve el nombre como cadena de texto:

```raku
enum Colour <red green blue>;

say green.value; # 1
say green.key;   # green
```

No tienes que aceptar la numeración automática desde cero. Escribe las constantes como pares para elegir los valores tú mismo:

```raku
enum Day (Mon => 1, Tue => 2, Wed => 3, Thu => 4, Fri => 5);

say Tue.value; # 2
say Fri.value; # 5
```

Aquí la semana laboral está numerada desde uno en lugar de cero.

El tipo enum en sí puede listar todas sus constantes. El método `.enums` devuelve un mapa de cada nombre a su valor:

```raku
enum Colour <red green blue>;

say Colour.enums;       # Map.new((blue => 2, green => 1, red => 0))
say Colour.enums.elems; # 3
```

Entre `.value`, `.key` y `.enums`, puedes moverte libremente de una constante a su número, de un número de vuelta a los datos, y por todo el conjunto, lo cual es lo que hace que los enums sean útiles para cosas como menús, estados y tablas de búsqueda.

{% include nav.html %}
