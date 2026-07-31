---
title: Capturas posicionales
translations_gpt:
---

{% include menu.html %}

Pon una parte del patrón entre paréntesis `( )` para _capturarla_. Tras una coincidencia lograda, cada pieza capturada está disponible como `$0`, `$1` y así sucesivamente, numeradas desde cero en el orden en que se abren los paréntesis:

```raku
if '2025-06' ~~ / (\d+) '-' (\d+) / {
    say $0; # ｢2025｣
    say $1; # ｢06｣
}
```

El primer par de paréntesis capturó el año en `$0` y el segundo capturó el mes en `$1`. El texto entre ambos — el `-` literal — se empareja pero no se captura.

Cada captura es a su vez un pequeño objeto de coincidencia, así que puedes pedirle su `.Str`, su posición y demás. En una cadena entre comillas dobles una captura se interpola como el texto que emparejó:

```raku
if 'hello world' ~~ / (\w+) ' ' (\w+) / {
    say "$1 $0"; # world hello
}
```

Aquí las dos palabras capturadas se imprimen en el orden inverso, lo que las intercambia.

Las capturas se guardan también en la variable de coincidencia `$/`, y `$0` es en realidad una forma abreviada de escribir `$/[0]`. Puedes trabajar directamente a través de `$/`:

```raku
if '2025-06' ~~ / (\d+) '-' (\d+) / {
    say $/[0];    # ｢2025｣
    say $/[1];    # ｢06｣
    say $/.elems; # 2
}
```

`$/` es el objeto de coincidencia completo, indexarlo llega a las capturas posicionales y `.elems` te dice cuántas hay.

{% include nav.html %}
