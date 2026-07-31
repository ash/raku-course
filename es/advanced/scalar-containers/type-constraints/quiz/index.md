---
title: Quiz — Restricciones de tipo
translations_gpt:
---

{% include menu.html %}

Un contenedor se declara de la siguiente manera:

```raku
my Int $int;
```

¿Cual de las siguientes asignaciones causa un error en tiempo de compilación?

{:.quiz}
0 | $int = 123;
0 | $int = 100 + 23;
0 | $int = '123'.Int;
1 | $int = 123.45;

{% include quiz.html %}

{% include nav.html %}
