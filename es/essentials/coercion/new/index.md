---
title: Convertir tipos usando formas de constructor
---

{% include menu.html %}

Un método similar es construir una nueva instancia de un objeto del tipo requerido llamando a su constructor, cuyo nombre es el nombre del tipo. Por ejemplo:

```raku
my $n = Int('1.23E4');
say $n;      # 12300
say $n.WHAT; # (Int)
```

Aquí, la cadena que contiene un número de punto flotante se convierte en un entero.

{% include nav.html %}