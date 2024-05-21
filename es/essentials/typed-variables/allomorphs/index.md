---
title: Alomorfos
---

{% include menu.html %}

Considera el siguiente programa. Antes de ejecutarlo, ¿puedes decir qué valores de entrada lo romperían y en qué línea?

```raku
my $input = prompt 'Enter something: ';
my Int $i = $input;
my Str $s = $input;

say $i;
say $s;
```

Aquí se crean tres variables escalares. Dos de ellas, `$i` y `$s`, son variables tipadas. Eso significa que `$i` solo puede almacenar enteros y `$s` solo puede almacenar cadenas.

El tipo de retorno de `prompt` depende de los caracteres que escribimos. Si la cadena de entrada puede representar un número entero, el resultado será del tipo `IntStr`, que es _tanto_ `Int` como `Str`, y por lo tanto, puede asignarse a una variable `Int` o `Str`. Así que, si ingresas, por ejemplo, `1234`, el programa no se rompe.

```
$ raku allomorphs.raku
Enter something: 1234
1234
1234
```

El tipo `IntStr` es un ejemplo del llamado _alomorfo_ — un tipo de dato que combina dos otros tipos. Aquí hay algunos ejemplos más.

Si ingresas una cadena que no puede ser un número entero, el programa se rompe en el momento en que asignamos `$input` a `$i`:

```
$ raku allomorphs.raku
Enter something: Hello, World!
Type check failed in assignment to $i; expected Int but got Str ("Hello, World!")
  in block <unit> at allomorphs.raku line 2
```

Nota que obtienes un error incluso si la cadena de entrada puede convertirse a un número, pero no a un entero. Como no es posible almacenar un número de punto flotante o racional en un contenedor entero, Raku emitirá una excepción:

```
$ raku allomorphs.raku
Enter something: 3.14
Type check failed in assignment to $i; expected Int but got RatStr (RatStr.new(3.14, "3....)
  in block <unit> at allomorphs.raku line 2
```

La segunda asignación, `$s = $input`, nunca se romperá ya que una cadena puede tomar cualquier entrada.

🦋 Puedes encontrar el código fuente de este programa en el archivo [allomorphs.raku](https://github.com/ash/raku-course/blob/master/essentials/typed-variables/allomorphs/allomorphs.raku).

{% include nav.html %}