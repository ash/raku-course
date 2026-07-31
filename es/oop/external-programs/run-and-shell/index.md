---
title: run y shell
translations_gpt:
---

{% include menu.html %}

Hay dos maneras de lanzar un programa externo. La función `run` toma la orden y sus argumentos como valores **separados** y ejecuta el programa directamente, sin implicar a ninguna shell:

```raku
run 'echo', 'hello';
```

Esto ejecuta el programa `echo` con el único argumento `hello`, que imprime `hello`. Como los argumentos se pasan por separado, no hay riesgo de que la shell interprete mal espacios o caracteres especiales: `run` es la opción segura por omisión.

La función `shell`, en cambio, pasa una **única cadena** a la shell del sistema, que la interpreta. Esto te permite usar funcionalidades de la shell como las tuberías y las redirecciones:

```raku
shell 'echo hello | tr a-z A-Z';
```

Aquí la shell ejecuta `echo`, encauza su salida a través de `tr` e imprime `HELLO`. La comodidad viene con una advertencia: como la shell analiza la cadena, construir una orden `shell` a partir de entrada no fiable es peligroso. Prefiere `run` salvo que necesites expresamente funcionalidades de la shell.

Ambas devuelven un objeto `Proc` que describe cómo terminó el programa. Por omisión, el programa lanzado comparte la salida de tu programa, así que lo que imprime aparece en la pantalla. Para capturar esa salida hay que pedirlo, y ese es el tema de la página siguiente.

{% include nav.html %}
