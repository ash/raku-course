---
title: El operador definido-o
---

{% include menu.html %}

Usa el llamado operador _definido-o_ `//` para obtener un valor alternativo si una variable aún no está establecida.

```raku
my $a = 'alpha';
say $a // 'gamma';

my $b;
say $b // 'delta';
```

Este programa imprime:

```
alpha
delta
```

El valor de `$a` se establece en la primera línea, por lo que en la expresión `$a // 'gamma'`, se usa el valor actual de `$a`. En contraste, la variable `$b` no fue inicializada, por lo que `$b // 'delta'` devuelve el operando del lado derecho, y el programa imprime `delta`.

## //=

La combinación de `//` y `=` da el operador `//=` que asigna un valor si la variable no está definida.

```raku
my $x;
$x //= 42;
say $x; # 42
```

{% include nav.html %}