---
title: 'Solución: Una palabra invertida'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
class Word {
    has $.text;

    method reversed {
        $.text.flip;
    }
}

say Word.new(text => 'Raku').reversed;
```

🦋 Puedes encontrar el código fuente en el archivo [greeter.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/methods/greeter.raku).

## Salida

```
ukaR
```

## Comentarios

1. El método `reversed` llega al `text` del propio objeto a través de su accesor `$.text` y le aplica el método incorporado `flip`, que devuelve la cadena invertida.

1. El método se llama directamente sobre el objeto `Word` recién creado. No se guarda nada de vuelta: `reversed` simplemente calcula y devuelve un valor nuevo a partir del atributo.

1. Fíjate en que dentro de la clase puedes leer la variable directamente, sin pasar por el accesor:

```raku
    method reversed {
        $!text.flip;
    }
```

{% include nav.html %}
