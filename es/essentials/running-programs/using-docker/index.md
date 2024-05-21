---
title: Usando docker para ejecutar Raku
---

{% include menu.html %}

Una imagen de docker de Rakudo Star se puede usar tanto para ejecutar un shell REPL como para ejecutar un programa desde un archivo.

Para iniciar el shell, ejecuta el siguiente comando. Este descargará la última imagen de `rakudo-star` si es necesario.

```console
$ docker run -it rakudo-star
```
Para ejecutar un programa, usa el siguiente comando:

```console
$ docker run -v "$(pwd):/script" rakudo-star raku /script/hello.raku
```

Agrega la bandera `--rm` si deseas limpiar el contenedor y eliminar el sistema de archivos cuando el contenedor termine. Encuentra más instrucciones en la página del proyecto.

## Enlaces externos

* [Imagen de Docker](https://hub.docker.com/_/rakudo-star/)
* [Proyecto de Raku en docker en GitHub](https://github.com/Raku/docker)

{% include nav.html %}