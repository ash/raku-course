---
title: Formato y código
translations_gpt: true
---

{% include menu.html %}

Dentro del texto Pod, marcas las palabras con _códigos de formato_ de una sola letra, escritos como una letra seguida de paréntesis angulares alrededor del texto:

* `B<…>` — negrita
* `I<…>` — cursiva
* `C<…>` — código (monoespaciado)
* `L<…>` — un enlace

```raku
=begin pod

This is B<important>, and C<say> is a built-in.

=end pod
```

Al renderizarlo, `important` aparece en negrita y `say` en fuente de código. Los códigos se anidan y pueden combinarse, así que `B<C<say>>` es código en negrita.

Para un bloque completo de código en lugar de un fragmento en línea, usa un bloque de código delimitado — `=begin code … =end code` — que preserva el texto tal cual:

```raku
=begin pod

Here is how to call it:

=begin code
say greet('world');
=end code

=end pod
```

Las líneas dentro del bloque de código se muestran exactamente como fueron escritas, sin ser interpretadas como Pod. Entre los códigos en línea y los bloques de código, Pod puede documentar una API con prosa formateada y ejemplos con apariencia ejecutable, todo mantenido junto al código que describe.

{% include nav.html %}
