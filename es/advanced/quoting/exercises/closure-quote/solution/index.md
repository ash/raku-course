---
title: 'Solution: Un closure en una cadena q'
---

{% include menu.html %}

Aquí tienes una de las posibles soluciones:

## Código

```raku
my $x = 10;
say q:c/$x squared is {$x ** 2}/;
```

🦋 Encuentra el programa en el archivo [closure-quote.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/closure-quote.raku).

## Salida

```
$x squared is 100
```

## Comentarios

1. El adverbio `:c` (closure) activa la interpolación de código incrustado `{ … }` en la forma `q`, que de otro modo es literal. Dentro de las llaves, `$x` es código real, así que `{$x ** 2}` se evalúa como `100`.

1. El `$x` fuera de las llaves se deja exactamente como está escrito, porque el adverbio escalar `:s` *no* está habilitado. Este es precisamente el sentido de los adverbios por característica: obtienes código incrustado sin activar también la interpolación de `$`.

1. Los adverbios se pueden combinar. Si añades `:s` también, el `$x` inicial se interpola — ambas características están activas a la vez:

```raku
my $x = 10;
say q:c:s/$x squared is {$x ** 2}/; # 10 squared is 100
```

{% include nav.html %}
