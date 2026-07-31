---
title: Proxificación de llamadas a métodos
translations_gpt:
---

{% include menu.html %}

Ser un contenedor escalar en realidad significa ser un objeto del tipo `Scalar`. En la mayoría de los casos, el uso de escalares es tan transparente que un desarrollador no tiene que pensar en el contenedor en absoluto y puede imaginar que trabaja directamente con los valores almacenados en el.

Esto funciona porque un contenedor escalar delega las llamadas a métodos al valor que contiene. Por ejemplo, después de la asignación `my $lang = 'Raku'`, puedes llamar al método `.chars` sobre la variable:

```raku
my $lang = 'Raku';
say $lang.chars; # 4
```

El programa imprime `4`, que es el numero de caracteres en la cadena `'Raku'`. El resultado es exactamente el mismo que si llamaras a `.chars` directamente sobre el valor de la cadena, en lugar de sobre la variable contenedora:

```raku
say 'Raku'.chars; # 4
```

En otras palabras, el contenedor reenvía silenciosamente la llamada a `.chars` a la cadena que contiene y te devuelve el resultado.

{% include nav.html %}
