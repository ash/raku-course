---
title: Fallos suaves
translations_gpt:
---

{% include menu.html %}

Lanzar una excepción con `die` lo detiene todo de inmediato. A veces eso es demasiado drástico: quieres que una subrutina informe de que no pudo producir un resultado, pero que sea quien la llama quien decida si eso es fatal. Para esto Raku tiene los _fallos blandos_, creados con `fail`.

Cuando una subrutina llama a `fail`, no lanza nada de inmediato. En su lugar devuelve a quien la llamó un objeto especial `Failure`. Un `Failure` no está definido, así que quien llama puede comprobarlo con discreción:

```raku
sub divide($a, $b) {
    fail 'cannot divide by zero' if $b == 0;
    return $a / $b;
}

say divide(10, 2);         # 5
say divide(10, 0).defined; # False
```

La llamada que funciona devuelve `5`. La que falla devuelve un `Failure`, que informa `False` para `defined`, de modo que quien llama puede comprobar el resultado antes de usarlo.

Un `Failure` se llama _blando_ porque solo se convierte en una excepción real y lanzada si intentas usarlo como valor sin comprobarlo antes. Mientras lo manejes — por ejemplo comprobando `defined` — se mantiene callado. Esto permite que una subrutina señale un problema sin obligar a todo el programa a detenerse.

## Ya has visto esto

Este estilo aplazado de fallo no es exclusivo de `fail`. Antes en esta parte te encontraste dos veces con la misma idea.

Una **división por cero** produce un valor en silencio y solo lanza la excepción cuando realmente lo usas:

```raku
my $x = 1 / 0;   # no error yet
say $x;           # throws only here, when the value is used
```

Un **programa externo que falla** devuelve un `Proc` que solo lanza una excepción si lo descartas sin manejarlo; guárdalo e inspecciónalo y seguirá siendo un valor callado:

```raku
run 'sh', '-c', 'exit 1';   # the failing Proc is discarded, so this throws
```

En cada caso un problema no detiene el programa en el momento en que ocurre: se convierte en un valor que puedes comprobar, y solo asciende a excepción lanzada cuando lo usas sin comprobar o lo ignoras. El tema [No todo error es inmediato](/es/oop/try/deferred-errors) muestra los dos casos uno al lado del otro.

{% include nav.html %}
