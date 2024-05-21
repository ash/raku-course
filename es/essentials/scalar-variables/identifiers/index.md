---
title: Nombres de variables
---

{% include menu.html %}

Antes de avanzar más, dediquemos un tiempo a un tema interesante sobre los nombres permitidos de las variables. Hasta ahora hemos visto nombres simples como `$name` o `$age`, que consistían completamente en letras minúsculas del alfabeto inglés. Pero hay más posibilidades.

## Sensibilidad a mayúsculas y minúsculas

Los nombres de las variables (o _identificadores_) distinguen entre mayúsculas y minúsculas. Eso significa que todos los nombres a continuación se refieren a diferentes contenedores escalares:

```raku
$myname

$MyName

$myName

$MYNAME
```

Depende de ti seguir un esquema de nombres, pero probablemente puedes reservar los nombres en mayúsculas para constantes.

## Otros caracteres

Entre los caracteres ASCII, puedes usar dígitos, el carácter de subrayado `_`, un guion `-` y comilla simple (que representa un apóstrofe) `'`. Ten en cuenta que el primer carácter del identificador debe ser una letra o un guion bajo. Tanto `-` como `'` deben ser seguidos por un carácter alfabético. Aquí hay algunos identificadores válidos más:

```raku
$___

$a'b'c

$my-name

$address2
```

Nuevamente, depende de ti elegir los nombres, pero probablemente no sea una buena práctica elegir deliberadamente nombres que parezcan crípticos.

## Caracteres Unicode

La definición de letras y dígitos se extiende en realidad para incluir todos aquellos caracteres que se consideran letras y dígitos decimales según sus propiedades Unicode. Por ejemplo, las siguientes variables son válidas en Raku:

```raku
$привет

$駱駝道

$αβγ

$Δ۲ # donde ۲ es un dígito
```

{% include nav.html %}