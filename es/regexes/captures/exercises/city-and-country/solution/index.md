---
title: 'Solución: Ciudad y país'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
if 'London-UK' ~~ / $<city>=(\w+) '-' $<country>=(\w+) / {
    say ~$<city>;
    say ~$<country>;
}
```

🦋 Puedes encontrar el código fuente en el archivo [city-and-country.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/city-and-country.raku).

## Salida

```
London
UK
```

## Comentarios

1. `$<city>=( … )` y `$<country>=( … )` dan nombres a las dos capturas en lugar de números.

1. Tras la coincidencia se leen por nombre como `$<city>` y `$<country>`, lo que resulta más claro que `$0` y `$1`.

1. El prefijo `~` pone cada captura en contexto de cadena para que se imprima como texto simple; sin él, `say $<city>` mostraría el objeto de coincidencia como `｢London｣`.

{% include nav.html %}
