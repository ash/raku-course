---
title: Entrada con prompt
---

{% include menu.html %}

El opuesto de `say` es `prompt`. Espera a que el usuario ingrese algo y presione Enter. Luego, envía la entrada al programa como una cadena. Puedes tomar el resultado de `prompt` y pasarlo a `say`. En este caso, repites lo que el usuario escribe. Vamos a crear un programa así:

```raku
say prompt;
```

Si ejecutas este programa, puede que te confundas ya que el programa entra en un estado en el que solo espera alguna entrada. Para hacer el programa más amigable para el usuario, es bueno imprimir el mensaje del prompt. No necesitas agregar un `say` separado, porque puedes pasar el mensaje a `prompt`:

```raku
prompt '¿Qué idioma vas a aprender? '
```

Antes de concluir esta sección, vamos a combinar todas las piezas y crear un programa que pregunte sobre los deseos del usuario y luego imprima una frase usando el texto que el usuario ingresó.

```raku
say 'Vas a aprender ', prompt '¿Qué idioma vas a aprender? ';
```

Si ingresaste `Raku`, obtienes la siguiente frase impresa:

    Vas a aprender Raku

¡Bien, ahora podemos hablar con el programa, y podemos hacer que el programa nos hable!

Ten en cuenta que como `say` necesita conocer las cadenas antes de imprimirlas, Raku primero ejecutará `prompt`, para que el diálogo se desarrolle en el orden correcto:

```console
$ raku t.raku 
¿Qué idioma vas a aprender? Raku
Vas a aprender Raku
```

{% include nav.html %}