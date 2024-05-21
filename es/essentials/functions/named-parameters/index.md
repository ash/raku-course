---
title: Parámetros nombrados
---

{% include menu.html %}

En contraste con los [parámetros posicionales](../positional-parameters), los parámetros _nombrados_ se refieren por sus nombres.

La siguiente función toma dos parámetros llamados `$from` y `$to`.

```raku
sub distance(:$from, :$to) { $from - $to }
```

Ahora, para llamar a la función, necesitas nombrar los argumentos:

```raku
say distance(from => 30, to => 10); # 20
```

Es un error pasar los argumentos como si fueran posicionales. Por ejemplo, una llamada `distance(30, 10)` genera un error:

    Too many positionals passed; expected 0 arguments but got 2
        in sub distance at t.raku line 1
        in block <unit> at t.raku line 2

La parte buena es que los argumentos nombrados pueden listarse en cualquier orden. Las siguientes dos llamadas son totalmente equivalentes:

```raku
say distance(from => 30, to => 10); # 20

say distance(to => 10, from => 30); # 20
```

## Pasando variables

Cuando el valor que quieres pasar a una función se guarda en una variable, cuyo nombre coincide con el nombre del parámetro, puedes disfrutar de una sintaxis especial que reduce la escritura:

```raku
my $from = 30;
my $to = 10;
say distance(:$from, :$to); # 20
```

Esto es similar a una llamada más verbosa:

```raku
say distance(from => $from, to => $to); # 20
```

Nuevamente, el orden no es estricto aquí:

```raku
say distance(:$to, :$from); # 20
```

Si el nombre de la variable difiere del nombre del parámetro, usa una de las formas de pasar un par:

```raku
my $a = 20;
my $b = 10;

say distance(from => $a, to => $b);

# o:

say distance(:from($a), :to($b));
```

{% include nav.html %}