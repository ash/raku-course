---
title: 'Solución: Separe un nombre de archivo'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
if 'report.txt' ~~ / (\w+) '.' (\w+) / {
    say ~$0;
    say ~$1;
}
```

🦋 Puedes encontrar el código fuente en el archivo [split-filename.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/split-filename.raku).

## Salida

```
report
txt
```

## Comentarios

1. El primer par de paréntesis captura el nombre base en `$0` y el segundo captura la extensión en `$1`. El punto entre ambos va entrecomillado para que empareje un `.` literal en lugar de cualquier carácter.

1. El `~` delante de cada captura la pone en contexto de cadena, de modo que se imprime como texto simple. Un `say $0` a secas mostraría en cambio el objeto de coincidencia con sus esquinas, `｢report｣`. Escribir `say $0.Str` hace lo mismo que `say ~$0`.

{% include nav.html %}
