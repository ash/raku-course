---
title: Capturas en el reemplazo
translations_gpt:
---

{% include menu.html %}

La parte de reemplazo de `s///` puede referirse a las capturas hechas por el patrón. Esto te permite reordenar el texto coincidente en lugar de limitarte a tirarlo.

Por ejemplo, convierte una fecha escrita como `año-mes` en `mes/año` capturando ambos números y volviéndolos a colocar en el orden inverso:

```raku
my $d = '2025-06';
$d ~~ s/ (\d+) '-' (\d+) /$1\/$0/;
say $d; # 06/2025
```

El patrón captura el año en `$0` y el mes en `$1`. En el reemplazo, `$1` y `$0` se escriben en orden invertido, con una barra entre ellos. (La barra se protege como `\/` para que no se confunda con el final de la sustitución.) Fíjate en que los espacios son insignificantes del lado del **patrón** pero literales del lado del **reemplazo**, así que el reemplazo se escribe sin espacios alrededor.

Las capturas con nombre funcionan igual. Esto hace que una sustitución se lea con claridad incluso cuando hay varias piezas:

```raku
my $name = 'Doe, Jane';
$name ~~ s/ $<last>=(\w+) ', ' $<first>=(\w+) /$<first> $<last>/;
say $name; # Jane Doe
```

{% include nav.html %}
