---
title: 'Cuestionario: Operaciones Booleanas'
---

{% include menu.html %}

En cada una de las secciones a continuación, selecciona la respuesta correcta que imprime el programa.

## 1

Aquí está el programa:

```raku
my $value = True && False;
say $value;
```

¿Qué imprime?

{:.quiz}
0 | True
1 | False

## 2 

¿Qué imprime el segundo programa?

```raku
my $value = True && False || True;
say $value;
```

{:.quiz}
1 | True
0 | False

## 3

¿Cuál es la salida de este programa?

```raku
my $value = True || False && True;
say $value;
```

{:.quiz}
1 | True
0 | False

{% include quiz.html %}

## Comentarios

En el segundo y tercer programa, tenemos expresiones con tres valores booleanos. El resultado depende del orden en que se ejecutan las operaciones. El operador `&&` tiene mayor precedencia que `||`, por lo que se ejecuta primero.

{% include nav.html %}