---
title: Variables tipadas
---

{% include menu.html %}

En Raku, una variable escalar (o, un contenedor escalar) puede contener un solo objeto de diferentes tipos. Por ejemplo, la misma variable puede contener primero un número y luego una cadena:

```raku
my $var = 42;
$var = 'Hola';
```

Aquí hay otro ejemplo de mezcla de diferentes tipos de datos en la misma expresión:

```raku
my $a = '100';
my $b = 200;
say $a + $b; # 300
```

Esto, probablemente, no sea la mejor práctica de codificación, pero es un programa Raku perfectamente válido.

No obstante, Raku te permite especificar qué puede contener una variable dada. Hay más detalles en los temas a continuación.

{% include nav.html %}