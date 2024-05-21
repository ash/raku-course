---
title: Valores predeterminados
---

{% include menu.html %}

Tanto los parámetros posicionales como los nombrados pueden tener valores predeterminados. Si la función tiene un valor predeterminado para el parámetro dado, ese parámetro puede omitirse al llamar a la función.

## Parámetros posicionales

Un ejemplo de un valor predeterminado para una función con parámetros posicionales:

```raku
sub greet($name = 'World') {
    say "Hello, $name!";
}

greet('Merinda');
greet();
```

La primera llamada usa el nombre pasado como el único argumento y, por lo tanto, imprime `Hello, Merinda!`. La segunda llamada usa el valor predeterminado e imprime `Hello, World!`.

Si una función tiene más de un parámetro, entonces los valores predeterminados solo se pueden usar al final de la lista de ellos:

```raku
sub f($a, $b, $c = 42, $d = 50) { . . . } # correcto
# sub f($a = 10, $b = 20, $c, $d) { . . . } # INCORRECTO
```

## Parámetros nombrados

Se usa la misma sintaxis para establecer valores predeterminados para parámetros nombrados:

```raku
sub greet(:$name = 'World') {
    say "Hello, $name!";
}

greet(name => 'Merinda'); # Hello, Merinda!
greet(); # Hello, World!
```

El orden de los parámetros nombrados no importa, por lo que cualquiera de ellos puede tener valores predeterminados, incluso el primero en la lista:

```raku
sub greet(:$greeting = 'Hello', :$name) {
    say "$greeting, $name!";
}

greet(name => 'Alla'); # Hello, Alla!
```

{% include nav.html %}