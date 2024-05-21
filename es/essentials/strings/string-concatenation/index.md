---
title: Concatenación de cadenas en Raku
---

{% include menu.html %}

Si tienes dos cadenas, puedes unirlas y obtener una nueva cadena más larga. Esta acción se llama concatenación de cadenas. En Raku, concatenas cadenas usando—¿adivina qué?—el operador de concatenación. Este operador es una tilde: `~`. Para concatenar dos cadenas, coloca `~` entre ellas:

```raku
say 'Hello, ' ~ 'World!';
```

Si nuestras cadenas están guardadas en variables, podemos 'concatenar variables', bueno, en realidad, concatenar las cadenas que esas variables contienen:

```raku
my $greeting = 'Hello, ';
my $who = 'World!';

say $greeting ~ $who;
```

O puedes crear una nueva variable usando el valor concatenado:

```raku
my $greeting = 'Hello, ';
my $who = 'World!';
my $message = $greeting ~ $who;

say $message;
```

## Concatenación con asignación

Cuando necesitas actualizar la variable y agregarle la nueva cadena, usa la siguiente forma:

```raku
# En lugar de 
$str = $str ~ $another-str;

# usa:
$str ~= $another-str;
```

{% include nav.html %}