---
title: La rutina de impresión
---

{% include menu.html %}

La rutina incorporada `print` hace lo siguiente:

1. Convierte sus argumentos a una cadena llamando al método `Str` en ellos.
1. Los envía al flujo `STDOUT`.

Para tipos de datos simples, la salida generada por `print` es similar a la salida de [`say`](../say) sin el carácter de nueva línea al final.

```raku
print 42;
print 'Raku';
```

Estos valores se imprimen uno tras otro. Tampoco hay una nueva línea al final de toda la salida.

```console
$ raku t.raku
42Raku
```

Para datos agregados, el resultado puede diferir de lo que ves con `say`. Por ejemplo, prueba con arrays y hashes:

```raku
my @data = 'alpha', 'beta', 'gamma';
print @data;

print "\n"; # Para separar las partes

my %data = alpha => 1, beta => 2, gamma => 3;
print %data;
```

Así es como se ve la salida:

```console
$ raku t.raku
alpha beta gamma
alpha	1
beta	2
gamma	3
```

La rutina `print` también se puede llamar como un método:

```raku
my @data = 'alpha', 'beta', 'gamma';
@data.print;

"\n".print;
```

{% include nav.html %}