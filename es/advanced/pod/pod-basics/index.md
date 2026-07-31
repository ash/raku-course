---
title: Fundamentos de Pod
translations_gpt: true
---

{% include menu.html %}

La documentación Pod vive en tu archivo fuente, delimitada por líneas que comienzan con `=`. La forma más sencilla de escribir un bloque es entre `=begin pod` y `=end pod`:

```raku
=begin pod

=head1 My Module

This module does something useful.

=end pod
```

Dentro, las directivas describen la estructura:

* `=head1`, `=head2`, … — encabezados en diferentes niveles
* un párrafo ordinario — simplemente texto en sus propias líneas
* `=item` — un elemento en una lista con viñetas

```raku
=begin pod

=head1 Features

=item Fast
=item Small
=item Simple

=end pod
```

La línea `=head1` es un encabezado de nivel superior; las tres líneas `=item` forman una lista. Pod se ubica junto a tu código sin afectarlo — el compilador lo ignora al ejecutar el programa, pero puede extraerlo y renderizarlo bajo demanda, como muestra el último tema.

{% include nav.html %}
