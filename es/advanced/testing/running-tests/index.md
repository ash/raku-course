---
title: Ejecutar pruebas
translations_gpt: true
---

{% include menu.html %}

Un archivo de pruebas individual es simplemente un programa Raku, así que puedes ejecutarlo directamente:

```
raku t/01-basic.rakutest
```

Imprime su salida TAP en la pantalla. Para más de uno o dos archivos, necesitas un _ejecutor de pruebas_ que ejecute un directorio completo de pruebas y resuma los resultados. El ejecutor de Raku es `prove6`:

```
prove6 t/
```

Esto ejecuta cada archivo de pruebas en `t/` e informa cuántos archivos y pruebas pasaron, con un resultado global de aprobado/fallido al final — mucho más fácil de leer que la salida TAP cruda de cada archivo.

Cuando una distribución tiene un `META6.json`, la herramienta de módulos ejecuta sus pruebas por ti:

```
zef test .
```

`zef test` encuentra el directorio `t/`, ejecuta el conjunto de pruebas e informa el resultado — que es exactamente lo que sucede automáticamente antes de que se instale una distribución. Así, las pruebas cumplen una doble función: tú las ejecutas mientras desarrollas con `prove6`, y el ecosistema las ejecuta para verificar una distribución antes de que alguien la instale.

> Los archivos de pruebas se nombran con la extensión `.rakutest` (o `.t`) y convencionalmente se numeran, como en `t/01-basic.rakutest`.

{% include nav.html %}
