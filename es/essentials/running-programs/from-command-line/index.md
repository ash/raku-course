---
title: Ejecutando desde la línea de comandos
---

{% include menu.html %}

Guarda el texto del programa en un archivo de texto, por ejemplo, `hello.raku` y pasa la ruta del archivo a la herramienta de línea de comandos `raku` (el carácter de dólar indica el prompt del shell):

```console
$ raku hello.raku
```

Si el programa no contiene errores, se ejecutará inmediatamente, y si genera alguna salida, verás el resultado en la terminal:

```console
$ raku hello.raku 
Hello, World!
```

Cuando trabajes con sistemas basados en Unix, puedes agregar un shebang y hacer el archivo ejecutable:

```raku
#!/usr/bin/env raku

say 'Hello, World!';
```

Los siguientes pasos son los siguientes:

```console
$ chmod a+x hello.raku
$ ./hello.raku
Hello, World!
```

{% include nav.html %}