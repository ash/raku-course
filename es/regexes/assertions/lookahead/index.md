---
title: Lookahead
translations_gpt:
---

{% include menu.html %}

Un _lookahead_ comprueba lo que viene inmediatamente **después** de la posición actual. Se escribe entre corchetes angulares:

* `<?before …>` — funciona si el texto que sigue coincide (lookahead positivo)
* `<!before …>` — funciona si el texto que sigue **no** coincide (lookahead negativo)

La aserción en sí no empareja ningún carácter; solo comprueba la posición. Por ejemplo, empareja un número solo cuando le siga la palabra `dollars`:

```raku
say '100 dollars' ~~ / \d+ <?before ' dollars'> /; # ｢100｣
```

La coincidencia es solo `100`: el texto ` dollars` se comprobó pero no se incluyó.

Como el lookahead solo afirma lo que sigue, el mismo número coincide o no según la moneda que venga detrás:

```raku
say so '100 euro'    ~~ / \d+ <?before ' euro'> /; # True
say so '100 dollars' ~~ / \d+ <?before ' euro'> /; # False
```

Los dígitos son idénticos en ambas cadenas, pero la aserción acepta `100` solo cuando le sigue ` euro`.

La forma negativa resulta útil para «… pero no cuando le sigue …». Empareja `cat` solo cuando **no** le siga un dígito:

```raku
say so 'cats' ~~ / cat <!before \d> /; # True
say so 'cat5' ~~ / cat <!before \d> /; # False
```

En `cat5` el lookahead ve un dígito justo detrás de `cat`, así que la aserción negativa falla y falla toda la coincidencia.

{% include nav.html %}
