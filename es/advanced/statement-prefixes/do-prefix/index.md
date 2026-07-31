---
title: do y el valor de un bloque
translations_gpt:
---

{% include menu.html %}

Un bloque por sí solo es una sentencia, no una expresión, por lo que normalmente no puedes asignarlo a una variable. El prefijo `do` convierte un bloque en una expresión cuyo valor es el valor de su **última** sentencia:

```raku
my $x = do {
    my $a = 3;
    $a + 4;
};

say $x; # 7
```

Dentro del bloque puedes declarar variables, ejecutar varias sentencias y calcular un resultado; `do` devuelve lo que el bloque evalúe. Esto es útil cuando producir un valor necesita más de una sola expresión.

`do` también funciona delante de las sentencias de flujo de control, permitiéndoles devolver un valor también:

```raku
my $sign = do given 5 {
    when * > 0 { 'positive' }
    when * < 0 { 'negative' }
    default    { 'zero' }
};

say $sign; # positive
```

Aquí `do given` convierte todo el `given`/`when` en una expresión que produce `positive`. Lo mismo funciona con `do if` y `do for`. En resumen, `do` es la forma de usar un bloque, o una estructura de control, en un lugar que espera un valor.

{% include nav.html %}
