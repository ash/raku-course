---
title: Capturas con nombre
translations_gpt:
---

{% include menu.html %}

Las capturas numeradas son cómodas, pero cuando un patrón crece los nombres resultan más claros que los números. Para dar nombre a una captura, escribe `$<nombre>=( … )`:

```raku
if 'Anna:30' ~~ / $<name>=(\w+) ':' $<age>=(\d+) / {
    say $<name>; # ｢Anna｣
    say $<age>;  # ｢30｣
}
```

A las piezas capturadas se llega ahora por nombre con `$<name>` y `$<age>` en lugar de con `$0` y `$1`. Es lo mismo que escribir `$/<name>`, porque los nombres viven dentro de la variable de coincidencia `$/`.

Las capturas con nombre hacen que un patrón se lea casi como una descripción de los datos:

```raku
if 'x=5' ~~ / $<key>=(\w+) '=' $<value>=(\w+) / {
    say "key is $<key>, value is $<value>"; # key is x, value is 5
}
```

Igual que con las capturas posicionales, cada captura con nombre es un objeto de coincidencia, así que `$<age>.Str` da el texto simple y `$<age>.from` da su posición.

{% include nav.html %}
