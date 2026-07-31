---
title: Acceder al Pod
translations_gpt: true
---

{% include menu.html %}

Además de renderizarlo, un programa puede leer su propio Pod **desde dentro**, mientras se ejecuta. La variable especial `$=pod` contiene el Pod del archivo actual como una lista de objetos de bloque, de modo que un programa puede inspeccionar su propia documentación:

```raku
=begin pod
=head1 Hello
A paragraph.
=end pod

say $=pod.elems;      # 1
say $=pod[0].name;    # pod
```

`$=pod` aquí tiene un elemento — el bloque `pod` — y puedes adentrarte en él para leer encabezados, párrafos y elementos como datos. Esto es en lo que se basan las herramientas que generan documentación, o que verifican que está presente. Ya sea renderizada con `--doc` o leída a través de `$=pod`, la documentación es una parte de primera clase del programa, no un comentario que se descarta.

{% include nav.html %}
