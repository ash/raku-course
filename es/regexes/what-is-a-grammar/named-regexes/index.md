---
title: Expresiones regulares con nombre
translations_gpt:
---

{% include menu.html %}

Hasta ahora has escrito patrones directamente dentro de `/ … /`. También puedes darle un **nombre** a un patrón y reutilizarlo, igual que a una subrutina. Se declara con `my regex` (o con `my token`, que conocerás bien enseguida):

```raku
my regex number { \d+ }
```

Para usar un regex con nombre dentro de otro patrón, escribe su nombre entre corchetes angulares, `<number>`:

```raku
my regex number { \d+ }

if '42 cats' ~~ / <number> / {
    say $<number>; # ｢42｣
}
```

Llamar a `<number>` empareja el patrón **y** lo captura bajo ese nombre, así que el texto coincidente está disponible como `$<number>`: una captura con nombre que te sale gratis.

Un regex con nombre puede usarse varias veces en un mismo patrón. Cuando aparece más de una vez, las capturas forman una lista a la que se llega por índice:

```raku
my regex num { \d+ }

if '3-4' ~~ / <num> '-' <num> / {
    say $<num>[0]; # ｢3｣
    say $<num>[1]; # ｢4｣
}
```

Los regex con nombre mantienen legibles los patrones y te permiten construir otros mayores a partir de piezas más pequeñas y bien nombradas. Eso es exactamente lo que hace una gramática a mayor escala.

{% include nav.html %}
