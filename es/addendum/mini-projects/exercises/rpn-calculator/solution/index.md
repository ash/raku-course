---
title: 'Solución: Una calculadora en notación polaca inversa'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my $expression = '3 4 + 5 *';
my @stack;

for $expression.words -> $token {
    if $token ~~ / ^ \d+ $ / {
        @stack.push($token.Int);
    }
    else {
        my $b = @stack.pop;
        my $a = @stack.pop;
        @stack.push( do given $token {
            when '+' { $a + $b }
            when '-' { $a - $b }
            when '*' { $a * $b }
            when '/' { $a / $b }
        });
    }
}

say @stack[0];
```

🦋 Puedes encontrar el código fuente en el archivo [rpn-calculator.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/rpn-calculator.raku).

## Salida

```
35
```

## Comentarios

1. Los números se apilan en una pila. Un operador desapila los dos valores más
recientes, los combina y vuelve a apilar el resultado: la esencia de la evaluación
postfija.

1. `do given $token` convierte el operador en la aritmética adecuada, y el orden `$a` y
después `$b` (desapilados al revés) mantiene la resta y la división en el sentido
correcto.

{% include nav.html %}
