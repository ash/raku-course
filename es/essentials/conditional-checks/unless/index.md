---
title: Usando unless
---

{% include menu.html %}

Todas las condiciones booleanas pueden ser fácilmente negadas con el [operador `!`](/es/essentials/booleans/operations#negation). Sin embargo, en algunos casos, una negación explícita hace que la expresión sea más pesada y menos legible. En estos casos, `unless` puede ser un amigo.

El bloque `unless` se ejecuta cuando su condición es `False`.

```raku
my $broken = False;

# ...Algo puede establecer $broken a True aquí...
    
unless $broken {
    say "¡No te preocupes!";
    say "¡Sé feliz!";
}
```

Compara las dos variantes del mismo programa:

Con `if` y negación:

```raku
if !$broken { . . . }
```

Con `unless`:

```raku
unless $broken { . . . }
```

Teniendo las alternativas, siempre puedes elegir lo que te parezca mejor en la situación actual.

Nota que `unless` no puede ser seguido por bloques `else` o `elsif`. En este caso, la única manera es usar `if`.

{% include nav.html %}