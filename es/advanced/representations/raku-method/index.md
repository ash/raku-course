---
title: El método `.raku`
---

{% include menu.html %}

El tercer método de representación, `.raku`, devuelve una cadena con una representación **similar a código** del valor — idealmente, una cadena que podrías pegar de vuelta en un programa para recrear el mismo valor. Cada valor en Raku lo tiene.

```raku
say 42.raku;        # 42
say 'Raku'.raku;    # "Raku"
say (1, 2, 3).raku; # (1, 2, 3)
```

Observa cómo la cadena `'Raku'` regresa con las comillas alrededor, para que puedas distinguir un número de una cadena de un vistazo — exactamente el tipo de detalle que quieres al depurar.

El método también funciona con datos compuestos, incluyendo estructuras anidadas:

```raku
my @data = 1, [2, 3], 4;
say @data.raku; # [1, [2, 3], 4]
```

Como `.raku` devuelve una cadena ordinaria, puedes usarlo en cualquier lugar donde se espere una cadena, por ejemplo dentro de un mensaje interpolado:

```raku
my @data = 10, 20, 30;
say "The data is { @data.raku }";
# The data is [10, 20, 30]
```

Usa `.raku` siempre que quieras esa representación similar a código como cadena para combinarla con tus propios mensajes. Muy pronto presentaremos `dd`, una herramienta de Rakudo que imprime el mismo tipo de representación por ti en un solo paso.

{% include nav.html %}
