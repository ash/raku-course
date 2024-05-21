---
title: Convertir tipos con operadores prefijos
---

{% include menu.html %}

Otra forma de transformar el tipo de un objeto es usar operadores prefijos. Estos son operadores de un solo carácter que se colocan inmediatamente antes del valor (o una variable).

`~` | Coerción a cadena
`+` | Coerción numérica
`?` | Coerción booleana

Considera un ejemplo de creación de un valor booleano a partir de un entero:

```raku
say ?42; # True
```

Convertir a una cadena es similar:

```raku
my $n = -30;
my $s = ~$n;
say $s.chars; # 3, ya que "-30" tiene 3 caracteres
```

Observa que con la conversión numérica, el tipo del valor convertido difiere dependiendo del número en cuestión. Compara las siguientes conversiones desde cadenas:

```raku
say (+'100').WHAT;   # (Int)
say (+'3.14').WHAT;  # (Rat)
say (+'27E-1').WHAT; # (Num)
```

Para conversiones booleanas, hay otra rutina llamada `so`. Puedes usarla como un operador prefijo o como un método:

```raku
my $value = 42;
say so $value; # True
say $value.so; # True
```

{% include nav.html %}