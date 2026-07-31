---
title: regex, token y rule
translations_gpt:
---

{% include menu.html %}

Las tres palabras clave se construyen una sobre otra:

* `regex` — retrocede, como los patrones de `/ … /`
* `token` — **no** retrocede
* `rule` — como `token`, pero los espacios del patrón son significativos

_Retroceder_ significa que, cuando una parte posterior del patrón falla, el motor vuelve atrás y prueba una coincidencia más corta para una parte anterior. Un `regex` hace esto:

```raku
my regex r { \w+ 'b' }
say so 'aaab' ~~ / <r> /; # True
```

`\w+` agarra primero todo `aaab` y después tiene que devolver la última `b` para que la `b` literal pueda coincidir. Un `token` se niega a devolver nada:

```raku
my token t { \w+ 'b' }
say so 'aaab' ~~ / <t> /; # False
```

Aquí `\w+` toma todo `aaab`, la `b` literal no encuentra nada libre y el token simplemente falla en lugar de retroceder.

Eso suena a limitación, pero para las gramáticas es exactamente lo que quieres: cada token debe emparejar una cosa limpia y comprometerse con ella. Esto hace el análisis más rápido y el resultado predecible. **Usa `token` por omisión**; recurre a `regex` solo en las raras ocasiones en que de verdad necesites retroceso.

{% include nav.html %}
