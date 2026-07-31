---
title: 'Solution: Tabla de compras'
---

{% include menu.html %}

## Código

Aquí tienes una posible solución:

```raku
my $chair-price = 20.57;
my $chairs = 4;
my $chairs-total = $chair-price * $chairs;

my $table-price = 50.18;
my $tables = 1;
my $tables-total = $table-price * $tables;

say "Item\tPrice\tN\tTotal";
say "Chairs\t\$$chair-price\t$chairs\t\$$chairs-total";
say "Tables\t\$$table-price\t$tables\t\$$tables-total";
```

Todos los números están codificados y guardados en varias variables. También estamos usando el operador de multiplicación `*` para calcular el resultado. Aprenderemos más sobre los operadores en las próximas secciones de este curso, pero en este punto, la construcción como `$chair-price * $chairs` no debería ser algo que cause preguntas.

Las tres líneas que generan la salida imprimen las tres líneas de la tabla, incluyendo su encabezado. Observa cómo las columnas están separadas por los caracteres de tabulación `\t`. En las filas de datos, también vemos un carácter de dólar escapado: `\$` así como diferentes variables que queremos interpolar.

🦋 Puedes encontrar el código fuente en el archivo [purchase-table.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/purchase-table.raku).

## Salida

Ejecuta el programa y observa cómo imprime la tabla:

```
$ raku exercises/strings/purchase-table.raku
Item    Price   N      Total
Chairs  $20.57  4      $82.28
Tables  $50.18  1      $50.18
```

## Comentarios

¿Notaste los guiones en los nombres de las variables como `$chair-price` o `$tables-total`? Esta es una forma perfectamente aceptable de nombrar variables en Raku.

No te confundas con los dos símbolos de dólar adyacentes. Raku los lee por separado. Por ejemplo, en la subcadena `\$$price`, el primer signo de dólar está escapado y por lo tanto representa a sí mismo, mientras que el segundo es parte del nombre de la variable `$price`.

Todas las cadenas están entrecomilladas con comillas dobles para permitir la interpolación de las variables y los caracteres especiales.

Volvamos a esta tarea nuevamente después de familiarizarnos con los arrays y hashes.

{% include nav.html %}