---
title: Contenedores escalares
translations_gpt:
---

{% include menu.html %}

Como su nombre sugiere, los contenedores escalares albergan valores individuales (escalares). Estos contenedores se marcan con el sigilo `$`.

Aquí tienes uno de los usos más simples y directos de un escalar:

```raku
my $lang = 'Raku';
```

La variable `$lang` es un contenedor escalar.

Por defecto, los contenedores escalares no imponen un tipo sobre los datos, por lo que puedes almacenar un valor de cualquier tipo en ellos. La demostración más simple de esto es que puedes reutilizar la misma variable para almacenar un entero y luego una cadena:

```raku
my $value = 42;
$value = 'forty-two';
```

(El autor no te anima a programar de esta manera.)

Internamente, esto significa que, por defecto, un nuevo contenedor puede mantener valores del tipo `Any`. `Any` es el tipo base para la mayoría de los demás tipos, como `Int` o `Str`.

{% include nav.html %}
