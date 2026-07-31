---
title: zef y el ecosistema
translations_gpt:
---

{% include menu.html %}

`zef` es el instalador de módulos de Raku. Ya lo has usado para instalar módulos por nombre; también funciona con un directorio de distribución local. Desde dentro de una distribución puedes probarla e instalarla directamente:

```
zef test .
zef install .
```

`zef test .` ejecuta los archivos en `t/`, y `zef install .` instala la distribución en tu Raku para que otros programas puedan usar `use` con ella. Instalar por nombre — `zef install Cro` — hace lo mismo después de descargar primero la distribución del ecosistema.

Para **publicar** tu propia distribución y que otros puedan instalarla por nombre, la subes al ecosistema. La herramienta común para esto es `fez`:

```
fez upload
```

Esto empaqueta la distribución actual y la envía al ecosistema de Raku, después de lo cual `zef install Maths::Simple` funcionará para cualquiera.

> Estos comandos necesitan `zef`/`fez` instalado y acceso a la red, y la subida necesita una cuenta en el ecosistema.

Así que el ciclo de vida de un módulo compartido es: organizarlo con un `META6.json`, probarlo con `zef test` y publicarlo con `fez upload`. A partir de entonces, es simplemente otro nombre que cualquiera puede instalar con `zef install`.

{% include nav.html %}
