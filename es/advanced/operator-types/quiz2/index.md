---
title: Quiz — Prefijo o posfijo
translations_gpt:
---

{% include menu.html %}

Has visto `++` escrito *después* de una variable, como postfijo. También puede escribirse *antes* de ella. A que categoría pertenece `++` en `++$x`?

```raku
my $x = 5;
say ++$x;
```

{:.quiz}
1 | prefix
0 | postfix
0 | infix
0 | postcircumfix

{% include quiz.html %}

<div class="extended-explanation">

La categoría se determina unicamente por la *posición*. Escrito antes de su único operando, `++$x` es un operador **prefijo**; el mismo `++` es postfijo cuando se escribe después, como en `$x++`. Ambas formas incrementan `$x`; la forma prefija devuelve el nuevo valor, por lo que esto imprime `6`.

</div>

{% include nav.html %}
