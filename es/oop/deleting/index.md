---
title: Borrar archivos y directorios
translations_gpt:
---

{% include menu.html %}

Igual que `spurt` y `mkdir` crean cosas en el disco, dos rutinas las eliminan.

La rutina `unlink` borra un archivo:

```raku
spurt 'temp.txt', 'scratch data';
say 'temp.txt'.IO.e; # True

unlink 'temp.txt';
say 'temp.txt'.IO.e; # False
```

`unlink` borra el archivo indicado. Como las demás rutinas del sistema de archivos, también tiene forma de método sobre un objeto de ruta: `'temp.txt'.IO.unlink`.

El borrado es inmediato y definitivo: no hay ninguna papelera de la que recuperar nada. Fíjate en que, una vez desaparecido el archivo, hay que comprobarlo con `.e` (existencia) y no con `.f`, porque las comprobaciones de tipo `.f` y `.d` lanzan una excepción cuando la ruta no está.

La rutina `rmdir` elimina un directorio, pero solo si está **vacío**:

```raku
mkdir 'reports';
rmdir 'reports';
say 'reports'.IO.e; # False
```

Si el directorio todavía contiene algo, `rmdir` no elimina nada y lo deja en su sitio. Así que, para borrar un directorio que contiene archivos, primero lo vacías y después lo eliminas:

```raku
mkdir 'reports';
spurt 'reports/jan.txt', 'January';
spurt 'reports/feb.txt', 'February';

.unlink for 'reports'.IO.dir;   # delete every entry
rmdir 'reports';                # now the directory is empty
say 'reports'.IO.e;             # False
```

`'reports'.IO.dir` lista las entradas del directorio (lo vimos en el tema anterior), y llamar a `.unlink` sobre cada una las elimina. Una vez vacío el directorio, `rmdir` puede llevárselo. (Este bucle plano da por sentado que el directorio solo contiene archivos; un árbol con subdirectorios anidados tendría que entrar antes en ellos de forma recursiva.)

{% include nav.html %}
