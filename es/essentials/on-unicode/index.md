---
title: Notas sobre el uso de Unicode
---

{% include menu.html %}

Raku asume que todos tus archivos de programa están guardados como archivos UTF-8. Desde el punto de vista práctico, eso significa que no tienes que preocuparte por caracteres no ASCII en, por ejemplo, literales de cadena. Pero eso no es todo. Lo más probable es que tampoco necesites preocuparte si tu programa lee un archivo de texto que también es un archivo UTF-8. También significa que la longitud de la cadena se detecta correctamente como el número de caracteres y no el número de bytes. (Lo veremos con más detalle más adelante.)

Lo siguiente que debes saber es que puedes usar letras no latinas o no inglesas para identificadores. Puedes nombrar tu variable `$ι` en lugar de `$i` si lo prefieres, y el compilador la analizará correctamente.

Raku trata las propiedades Unicode de los caracteres con suficiente meticulosidad. Por ejemplo, no solo sabe si un carácter es una letra o un dígito, sino que también identifica correctamente caracteres pares como paréntesis o diferentes tipos de corchetes. En muchos casos, puedes elegir un tipo diferente de corchetes para partes separadas del programa. Por ejemplo, puedes modificar nuestro programa ‘¡Hola, Mundo!’ para usar estos caracteres de comillas no latinas (los verás de nuevo cuando trabajemos con gramáticas de Raku):

```raku
say ｢Hello, World!｣;
```

Algunos operadores integrados tienen dos formas: una versión Unicode y una versión ASCII. Por ejemplo, se puede escribir una comparación negada como `!=` o como `≠`. Lo mismo se aplica a las operaciones de conjuntos: por ejemplo, `∈` tiene un equivalente puramente ASCII `(elem)`. O, hay una constante incorporada a la que puedes referirte como `pi` o `π`.

Al trabajar con números, puedes optar por usar fracciones en la forma de `½` en lugar de `0.5`. O, evaluar el cuadrado de `$x` como `$x²` usando un carácter en superíndice.

Encuentra la lista completa de tales pares en la siguiente página de documentación: 📖 [Símbolos Unicode versus ASCII](https://docs.raku.org/language/unicode_ascii).

{% include nav.html %}