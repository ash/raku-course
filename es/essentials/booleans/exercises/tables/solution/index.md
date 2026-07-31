---
title: 'Solution: Tablas booleanas'
---

{% include menu.html %}

Aquí tienes un posible programa que imprime todos los resultados de las operaciones booleanas.

## Código

```raku
say 'True && True is ', True && True; 
say 'True && False is ', True && False;
say 'False && True is ', False && True;
say 'False && False is ', False && False;

say 'True || True is ', True || True; 
say 'True || False is ', True || False;
say 'False || True is ', False || True;
say 'False || False is ', False || False;

say 'True ^^ True is ', True ^^ True; 
say 'True ^^ False is ', True ^^ False;
say 'False ^^ True is ', False ^^ True;
say 'False ^^ False is ', False ^^ False;
```

🦋 Puedes encontrar el código completo en el archivo [tables.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/booleans/tables.raku).

## Salida

Ejecuta el programa, y este imprimirá la siguiente tabla.

```console
$ raku tables.raku
True && True is True
True && False is False
False && True is False
False && False is False
True || True is True
True || False is True
False || True is True
False || False is False
True ^^ True is Nil
True ^^ False is True
False ^^ True is True
False ^^ False is False
```

## Comentarios

Nota que debido a la mayor precedencia de las operaciones booleanas, no necesitas ponerlas entre paréntesis. Esto, sin embargo, no es el caso si estás usando concatenación de cadenas:

```raku
say 'True && True is ' ~ (True && True);
```

Alternativamente, puedes usar [interpolación de código](/es/essentials/strings/code-interpolation).

{% include nav.html %}