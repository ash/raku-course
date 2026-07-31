---
title: Publicar con fez
translations_gpt:
---

{% include menu.html %}

El tema anterior presentó `fez` como una forma de subir una distribución al ecosistema de Raku. No es obligatorio usar `fez` — no es la única forma de publicar — pero es la opción más común, y hace más que subir: también puede configurar una nueva distribución y gestionar tu cuenta de autor. Instálalo con `zef`:

```
zef install fez
```

## Iniciar una distribución

En lugar de ensamblar un `META6.json` y los directorios `lib/` y `t/` a mano, puedes dejar que `fez` los genere automáticamente:

```
fez init My::Greeting
```

`fez init` inicializa una nueva distribución sobre la cual construir — un directorio de proyecto con un `META6.json` ya preparado y la estructura estándar ya en su lugar — para que puedas ir directamente a escribir código en `lib/` y pruebas en `t/` en lugar de preparar el archivo de metadatos tú mismo.

## Registro e inicio de sesión

Para publicar se necesita una cuenta en el ecosistema. La creas una vez con `fez register` (te pide un nombre de usuario, correo electrónico y contraseña) e inicias sesión con `fez login`, que almacena tu clave para que los comandos posteriores estén autenticados:

```
fez register
fez login
```

Tu nombre de usuario es importante: el `META6.json` de una distribución debe llevar un campo `auth` establecido como `zef:<username>`, que es como el ecosistema sabe que la subida es realmente tuya.

## Subida

Con la cuenta en su lugar y la distribución lista, `fez upload` empaqueta el directorio actual y lo envía:

```
fez upload
```

Después de eso, cualquiera puede instalarlo por nombre con `zef install My::Greeting`. Cada versión solo puede subirse una vez, así que recuerda incrementar la `version` en `META6.json` antes de publicar una actualización.

## Otros comandos útiles

Algunos comandos más de `fez` que te serán útiles:

* `fez review` — verificar una distribución en busca de posibles problemas antes de subirla;
* `fez list` — mostrar las distribuciones que ya has publicado;
* `fez refresh` — reconstruir `META6.json` a partir de los archivos actualmente en disco.

> Todos estos necesitan `fez` instalado y acceso a la red, y todo después de `init` necesita una cuenta en el ecosistema.

{% include nav.html %}
