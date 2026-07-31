---
title: Instalar módulos desde la web
translations_gpt:
---

{% include menu.html %}

Más allá de los módulos que escribes tú mismo, existe una gran colección de módulos publicados por la comunidad de Raku. Cubren todo, desde frameworks web hasta formatos de datos, y puedes instalarlos y usarlos en tus propios programas.

## El instalador `zef`

Los módulos se instalan con `zef`, el gestor de módulos estándar que viene con Rakudo. Para instalar un módulo, proporciona a `zef` el nombre del módulo:

```console
$ zef install JSON::Fast
```

`zef` descarga el módulo junto con todo lo que necesita, ejecuta sus pruebas y lo instala. Una vez instalado, el módulo se encuentra automáticamente en la ruta de búsqueda, así que un programa puede cargarlo con un simple `use` — no se necesita la opción `-I`:

```raku
use JSON::Fast;
```

También puedes buscar en el ecosistema y actualizar o eliminar módulos:

```console
$ zef search Test
$ zef uninstall JSON::Fast
```

## De dónde vienen los módulos

Los módulos publicados residen en el _ecosistema_ de Raku. Puedes explorarlo en el sitio web [raku.land](https://raku.land), que lista las distribuciones disponibles y su documentación.

## `META6.json`

Una distribución destinada a ser compartida incluye un archivo de descripción llamado `META6.json`. Este registra el nombre de la distribución, la versión, los módulos que proporciona y las otras distribuciones de las que depende. `zef` lee este archivo para saber qué instalar y cómo encajan las piezas. Cuando publicas tu propio módulo, proporcionar un `META6.json` correcto es lo que hace que sea instalable por todos los demás.

{% include nav.html %}
