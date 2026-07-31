---
title: Lookbehind
translations_gpt:
---

{% include menu.html %}

Un _lookbehind_ comprueba lo que viene inmediatamente **antes** de la posición actual:

* `<?after …>` — funciona si el texto anterior coincide (lookbehind positivo)
* `<!after …>` — funciona si el texto anterior **no** coincide (lookbehind negativo)

Esto te permite emparejar algo solo por lo que lo precede, sin incluir ese prefijo en el resultado. Por ejemplo, captura los dígitos que siguen a un signo de dólar dejando el `$` fuera de la coincidencia:

```raku
if '$100' ~~ / <?after '$'> \d+ / {
    say $/; # ｢100｣
}
```

La aserción `<?after '$'>` exige un `$` justo antes de la posición actual, y después `\d+` empareja los dígitos. La coincidencia es `100`, sin el signo de dólar.

El lookahead y el lookbehind se combinan a menudo. Un fragmento de texto envuelto en `<?after …>` y `<?before …>` coincide solo cuando está entre los vecinos exigidos, una forma cómoda de extraer un valor de un contexto conocido.

{% include nav.html %}
