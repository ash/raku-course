---
title: 'Solución: Ejecute un comando'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
run 'echo', 'home:', '$HOME';
```

🦋 Puedes encontrar el código fuente en el archivo [run-a-command.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/run-a-command.raku).

## Salida

```
home: $HOME
```

## Comentarios

1. `run` lanza `echo` directamente, pasando cada cadena como argumento separado. Sin `:out`, la salida del programa va derecha a la pantalla.

1. El argumento llega a `echo` exactamente como está escrito: `$HOME` se imprime tal cual, no se sustituye por tu carpeta personal, porque no hay ninguna shell que lo expanda. Por eso `run` es la opción segura por omisión: la misma orden dada a `shell` podría comportarse de forma muy distinta.

1. Para imprimir de verdad la carpeta personal, deja que sea una shell quien haga la expansión: `shell 'echo home: $HOME'` imprime algo como `home: /home/anna`. (Mantén también las comillas simples del lado de Raku: unas comillas dobles `"$HOME"` harían que el propio Raku intentara interpolar una variable llamada `$HOME` antes de que `echo` llegara a ejecutarse.)

{% include nav.html %}
