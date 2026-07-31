---
title: Renderizar Pod
translations_gpt: true
---

{% include menu.html %}

Una vez que un archivo contiene Pod, el compilador puede convertirlo en texto formateado sin ejecutar el programa, usando la opción `--doc`:

```
raku --doc mymodule.raku
```

Para el ejemplo de encabezado y párrafo anterior, esto imprime algo como:

```
My Module

This module does something useful.
```

Las listas y los bloques de código también se renderizan. Toma este Pod:

```raku
=begin pod

=head1 Shopping list

Things to buy:

=item Apples
=item Bread
=item Cheese

Run it like this:

=begin code
say 'hello';
=end code

=end pod
```

Renderizado con `raku --doc`, imprime:

```
Shopping list

Things to buy:

  * Apples

  * Bread

  * Cheese

Run it like this:

    say 'hello';
```

Cada `=item` se convierte en una viñeta, y el bloque `=begin code … =end code` se muestra tal cual y con sangría, exactamente como fue escrito.

## Renderizado a HTML

El mismo mecanismo puede producir otros formatos. Para HTML, instalas un módulo formateador una vez y luego lo nombras después de `--doc`:

```
zef install Pod::To::HTML
raku --doc=HTML mymodule.raku > mymodule.html
```

Ahora el mismo documento sale como HTML — el encabezado se convierte en un `<h1>`, la lista en un `<ul>` de `<li>`, y el bloque de código en un `<pre>`:

```html
<h1>Shopping list</h1>
<p>Things to buy:</p>
<ul>
  <li>Apples</li>
  <li>Bread</li>
  <li>Cheese</li>
</ul>
<p>Run it like this:</p>
<pre class="pod-block-code">say 'hello';</pre>
```

(La herramienta envuelve esto en una página HTML completa.) Así es como se produce la documentación oficial de Raku en [docs.raku.org](https://docs.raku.org) a partir del Pod en el código fuente de Rakudo.

{% include nav.html %}
