---
title: 'Solución: Invierta las palabras'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
grammar Phrase {
    token TOP  { <word> [ ' ' <word> ]* { make $<word>».made.join(' ') } }
    token word { \w+ { make $/.flip } }
}

say Phrase.parse('hello world').made;
```

🦋 Puedes encontrar el código fuente en el archivo [reverse-the-words.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/make-and-made/reverse-the-words.raku).

## Salida

```
olleh dlrow
```

## Comentarios

1. Cada token `word` produce su propio texto invertido: su bloque en línea se ejecuta cada vez que una palabra coincide, y `make $/.flip` guarda la palabra — `$/` es la coincidencia actual — escrita al revés.

1. `TOP` empareja las palabras con `<word> [ ' ' <word> ]*` — una palabra, después cualquier número de «espacio y palabra» — y las combina. `$<word>` es la lista de todas las coincidencias de palabra; `».made` extrae el texto invertido que guardó cada una, y `.join(' ')` reconstruye la frase con espacios.

1. Esa forma de «elemento, después elemento, después elemento…» es lo bastante común como para tener un atajo: el separador `%`. Escribir `<word>+ % ' '` significa «uno o más `<word>`, separados por un espacio», y empareja exactamente las mismas frases que `<word> [ ' ' <word> ]*`, solo que de forma más compacta.

1. Así que aquí `make` y `made` trabajan en dos niveles: las piezas pequeñas producen sus valores y el todo se produce a partir de ellas. Leer `.made` sobre el resultado da `olleh dlrow`.

{% include nav.html %}
