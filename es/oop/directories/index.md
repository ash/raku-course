---
title: Trabajar con directorios
translations_gpt:
---

{% include menu.html %}

Para trabajar con el propio sistema de archivos — comprobar qué existe y crear directorios — Raku usa _objetos de ruta_. Cualquier cadena se puede convertir en uno con el método `.IO`, y el objeto de ruta responde entonces a las preguntas sobre esa ruta.

Las preguntas más comunes son si una ruta existe y qué clase de cosa es:

```raku
spurt 'greeting.txt', 'hi';

say 'greeting.txt'.IO.e; # True  — does it exist?
say 'greeting.txt'.IO.f; # True  — is it a file?
say 'greeting.txt'.IO.d; # False — is it a directory?
```

`.e` comprueba la existencia, `.f` comprueba si es un archivo regular y `.d` si es un directorio.

Para crear un directorio nuevo, usa `mkdir`:

```raku
mkdir 'reports';
say 'reports'.IO.d; # True
```

El tema siguiente muestra cómo listar lo que contiene un directorio.

{% include nav.html %}
