---
title: Escribir un iterador
translations_gpt:
---

{% include menu.html %}

Un iterador no es más que un objeto que hace el rol integrado `Iterator` y proporciona un método `pull-one`. Ese método devuelve el valor siguiente, o `IterationEnd` cuando no queda nada. Aquí tienes un iterador de cuenta atrás que entrega un número y avanza hacia cero:

```raku
class Countdown does Iterator {
    has Int $.n is rw;

    method pull-one {
        return IterationEnd if $!n <= 0;
        return $!n--;
    }
}
```

Cada llamada a `pull-one` comprueba primero si la cuenta se ha agotado; si no, devuelve el número actual y lo decrementa. El post-decremento `$!n--` devuelve el valor *anterior* a la resta, así que los números salen `3, 2, 1`. Manejarlo a mano se parece a cualquier otro iterador:

```raku
my $c = Countdown.new(n => 3);
say $c.pull-one; # 3
say $c.pull-one; # 2
say $c.pull-one; # 1
say $c.pull-one =:= IterationEnd; # True
```

Un iterador por sí solo no es algo que un bucle `for` pueda tomar directamente: un bucle espera un *iterable*. Envuelve el iterador en una `Seq` y se vuelve recorrible:

```raku
for Seq.new(Countdown.new(n => 3)) -> $x {
    say $x;
}
```

Eso imprime `3`, `2`, `1`. En el código de todos los días recurrirías más bien a `gather` / `take`: la forma de [generador](/es/paradigms/generators) es mucho más corta para el mismo resultado. Aun así, merece la pena ver una vez cómo se escribe el rol `Iterator` directamente, porque deja al descubierto aquello sobre lo que están construidos `gather`, `map` y todo bucle `for`: un objeto que responde a una sola pregunta — «¿cuál es el valor siguiente?».

{% include nav.html %}
