---
title: Analizar con parse
translations_gpt:
---

{% include menu.html %}

Para aplicar una gramática, llama a su método `.parse` con la cadena que quieres analizar:

```raku
grammar Pair {
    token TOP   { <key> '=' <value> }
    token key   { \w+ }
    token value { \w+ }
}

my $m = Pair.parse('x=5');
say $m<key>;   # ｢x｣
say $m<value>; # ｢5｣
```

`.parse` devuelve un objeto de coincidencia cuando la gramática empareja la cadena **entera**, y `Nil` cuando no. Como toda la entrada debe coincidir, no hacen falta las anclas `^` y `$`: `.parse` añade ese requisito por ti:

```raku
say Pair.parse('x=5').defined; # True
say Pair.parse('x=').defined;  # False
```

El [objeto de coincidencia](/es/regexes/matching/match-object) funciona igual que los que conociste antes. Cada token usado en la gramática se convierte en una captura con nombre, así que `$m<key>` y `$m<value>` dan las partes coincidentes. Los tokens se anidan, de modo que una gramática construye un pequeño árbol de coincidencias, el tema de una sección posterior.

{% include nav.html %}
