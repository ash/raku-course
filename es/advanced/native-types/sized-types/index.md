---
title: Tipos con tamaño y desbordamiento
---

{% include menu.html %}

Además del simple `int`, Raku tiene enteros con un ancho de bits fijo: `int8`, `int16`, `int32`, `int64`, y sus equivalentes sin signo `uint8`, `uint16`, `uint32`, `uint64`. El número indica cuántos bits ocupa el valor.

Un ancho fijo significa un rango fijo. Un `int8` contiene valores de `-128` a `127`; un `uint8` contiene de `0` a `255`. Como el almacenamiento no puede crecer, sobrepasar el límite superior provoca que el valor vuelva al inicio — esto es el _desbordamiento_ (overflow):

```raku
my int8 $i = 127;
$i++;
say $i; # -128
```

Sumar uno al mayor `int8` no produce `128` (que no cabría); se envuelve al valor más pequeño, `-128`. Los tipos sin signo también se desbordan:

```raku
my uint8 $u = 255;
$u++;
say $u; # 0
```

Esto es lo contrario de un `Int` normal, que simplemente crece tanto como sea necesario y nunca se desborda. Esta compensación es precisamente la razón de ser de los nativos con tamaño definido: aceptas un rango fijo a cambio de un almacenamiento predecible, compacto y rápido.

Usa un tipo nativo con tamaño cuando conozcas el rango de tus datos y quieras eficiencia — por ejemplo, bytes de datos binarios en un array `uint8`. Para aritmética ordinaria donde los números pueden crecer sin límite, usa `Int`.

{% include nav.html %}
