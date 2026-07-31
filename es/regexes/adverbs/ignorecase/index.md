---
title: Emparejamiento sin distinguir mayúsculas
translations_gpt:
---

{% include menu.html %}

Normalmente un regex distingue las mayúsculas de las minúsculas: `/hello/` no empareja `HELLO`. El adverbio `:i` (abreviatura de `:ignorecase`) desactiva esa distinción:

```raku
say 'HELLO' ~~ /:i hello/; # ｢HELLO｣
```

Con `:i` las letras coinciden sin importar las mayúsculas, así que el patrón en minúsculas empareja el texto en mayúsculas. Funciona en ambas direcciones y también con formas mixtas:

```raku
say 'I use RAKU' ~~ /:i raku/; # ｢RAKU｣
```

También puedes escribir el adverbio sobre el operador `m///` en lugar de dentro del patrón:

```raku
say 'HELLO' ~~ m:i/hello/; # ｢HELLO｣
```

Ambas formas hacen que **todo** el patrón ignore las mayúsculas. La [página siguiente](/es/regexes/adverbs/adverb-scope) examina más de cerca *dónde* se aplica un adverbio — la diferencia entre las dos colocaciones — y cómo volver a activar la distinción de mayúsculas para una parte del patrón.

{% include nav.html %}
