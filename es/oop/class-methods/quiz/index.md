---
title: Quiz — Métodos de clase
translations_gpt:
---

{% include menu.html %}

¿Qué imprime el programa siguiente? El método `n` no usa ningún atributo.

```raku
class T {
    method n { 42 }
}

say T.n + T.new.n;
```

{:.quiz}
0 | 42
1 | 84
0 | (T)
0 | un error

{% include quiz.html %}

{% include nav.html %}
