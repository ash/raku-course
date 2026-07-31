---
title: Quiz — Atributos
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente?

```raku
class P {
    has $.x = 7;
    has $.y;
}

say P.new(x => 1).y;
```

{:.quiz}
0 | 1
0 | 7
1 | (Any) | El programa quiere imprimir `y`, que nunca se fijó
0 | un error

{% include quiz.html %}

{% include nav.html %}
