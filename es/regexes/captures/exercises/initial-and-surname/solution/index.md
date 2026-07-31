---
title: 'Solución: Inicial y apellido'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
if 'J Smith' ~~ / $<initial>=(\w) ' ' $<surname>=(\w+) / {
    say ~$<surname>;
}
```

🦋 Puedes encontrar el código fuente en el archivo [initial-and-surname.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/initial-and-surname.raku).

## Salida

```
Smith
```

## Comentarios

1. `$<initial>=(\w)` captura un solo carácter de palabra; `$<surname>=(\w+)` captura la serie de letras tras el espacio.

1. El apellido se lee después por nombre como `$<surname>`, y el prefijo `~` lo imprime como cadena simple; sin él, `say $<surname>` mostraría el objeto de coincidencia como `｢Smith｣`.

{% include nav.html %}
