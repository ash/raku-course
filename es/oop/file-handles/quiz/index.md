---
title: Quiz — Leer líneas
translations_gpt:
---

{% include menu.html %}

Un archivo `n.txt` contiene tres líneas. ¿Cuántas veces se ejecuta el cuerpo de este bucle?

```raku
for 'n.txt'.IO.lines -> $line {
    say $line;
}
```

{:.quiz}
0 | 1
1 | 3
0 | 0
0 | una vez por cada carácter

{% include quiz.html %}

{% include nav.html %}
