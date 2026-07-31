---
title: 'Solution: Texto con formato'
translations_gpt: true
---

{% include menu.html %}

Aquí tienes una posible solución a la tarea.

## Código

```raku
=begin pod

=head1 Greeting

Hello, B<world>!

=end pod
```

🦋 Puedes encontrar el código fuente en el archivo [formatted-text.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/pod/formatted-text.raku).

## Salida

Ejecuta con `raku --doc`:

```
Greeting

Hello, world!
```

## Comentarios

1. `B<world>` marca la palabra en negrita; en el renderizado de texto plano aparece como texto ordinario, pero los formatos más ricos lo muestran en negrita.

1. `raku --doc` renderiza el Pod sin ejecutar ningún código del programa.

1. Para realmente *ver* la negrita, renderiza a un formato que soporte estilos. Instala un formateador como `Pod::To::HTML` con `zef install Pod::To::HTML`, luego ejecuta `raku --doc=HTML formatted-text.raku`; la palabra ahora aparece envuelta en un elemento HTML `<b>`. La salida de texto plano con `--doc`, en cambio, no tiene forma de mostrar la negrita una vez que se escribe en un archivo o una tubería.

{% include nav.html %}
