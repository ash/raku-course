---
title: Formas posfijas de if y unless
---

{% include menu.html %}

Raku ofrece una solución muy práctica cuando quieres ejecutar una declaración simple condicionalmente. En este caso, no es necesario crear un bloque de código separado. Simplemente coloca `if` o `unless` inmediatamente después de la declaración. En Raku, tales construcciones se llaman _modificadores de declaración_.

```raku
say 'Buenas tardes' if $hours > 12;

say 'Todos los sistemas funcionan' unless $broken;
```

{% include nav.html %}