---
title: Variables escalares
---

{% include menu.html %}

Hasta ahora, los programas que hemos visto tenían cadenas de texto codificadas. Vamos a introducir un poco de libertad y permitir que el programa use variables.

Hay algunos tipos de variables en Raku. Una variable es un contenedor que puede almacenar algunos datos. Comenzaremos con los contenedores más simples que solo pueden mantener un único valor. Tales contenedores se llaman _escalars_ o variables escalares. Una variable tiene un nombre precedido por un indicador especial que informa sobre la naturaleza del contenedor. Ese indicador es un carácter llamado _sigil_. Para los contenedores escalares, dicho sigil es un carácter de dólar `$`.

Aquí hay un par de ejemplos de variables escalares:

```raku
$name

$age
```

{% include nav.html %}