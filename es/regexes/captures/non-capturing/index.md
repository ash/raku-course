---
title: Grupos sin captura
translations_gpt:
---

{% include menu.html %}

Los paréntesis `( )` hacen dos trabajos a la vez: _agrupan_ una parte del patrón y la _capturan_ en `$0`, `$1` y demás. A veces solo quieres el primer trabajo — tratar varios átomos como una sola unidad — sin gastar en ello un número de captura. Para eso usa los corchetes `[ ]`, que agrupan **sin** capturar.

La agrupación importa en cuanto añades un cuantificador. Un cuantificador se liga solo al átomo inmediatamente anterior, así que el patrón de abajo repite únicamente la última letra:

```raku
say 'abccc' ~~ / abc ** 3 /; # ｢abccc｣
```

Solo se repitió la `c` tres veces. Envuelve toda la pieza en `[ ]` para repetirla entera:

```raku
say 'abcabcabc' ~~ / [ abc ] ** 3 /; # ｢abcabcabc｣
```

Ahora `[ abc ]` es una sola unidad y `** 3` se aplica al grupo.

Como `[ ]` no ocupa ninguna plaza de captura, los números quedan reservados para las partes que de verdad te importan. Compara una simple coincidencia de clave y valor:

```raku
if 'foo=42' ~~ / (\w+) '=' (\d+) / {
    say $0; # ｢foo｣
    say $1; # ｢42｣
}
```

Supón que a la clave puede precederla una palabra que quieres saltarte. Agrupa ese prefijo con `[ ]` para que no altere la numeración:

```raku
if 'the foo=42' ~~ / [ \w+ \s ]? (\w+) '=' (\d+) / {
    say $0; # ｢foo｣
    say $1; # ｢42｣
}
```

El opcional `[ \w+ \s ]?` emparejó `the ` pero no reclamó ninguna captura, así que `$0` sigue siendo la clave y `$1` sigue siendo el valor. Si hubieras escrito ese prefijo con `( )`, todo se habría desplazado: el prefijo sería `$0`, la clave `$1` y el valor `$2`.

La regla es corta: usa `( )` cuando quieras conservar el texto emparejado, y `[ ]` cuando solo quieras agrupar. Ambas clases admiten cuantificadores y alternativas, y por eso la alternativa anterior `[ cat | dog ] house` usaba corchetes: necesitaba la agrupación pero no otra captura.

{% include nav.html %}
