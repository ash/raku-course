---
title: q, qq y Q
---

{% include menu.html %}

Hay tres operadores base de entrecomillado, que difieren en cuánto procesan el texto interior:

* `q` — como las comillas simples: casi todo es literal
* `qq` — como las comillas dobles: las variables y las secuencias de escape se interpolan
* `Q` — la forma más literal de todas: **nada** se procesa

Cada uno toma el texto entre un par de delimitadores. Las conocidas `'…'` son un atajo para `q`, y `"…"` es un atajo para `qq`:

```raku
my $name = 'Anna';

say q{Hello $name};  # Hello $name
say qq{Hello $name}; # Hello Anna
```

`q` deja `$name` intacto; `qq` lo interpola. Las secuencias de escape con barra invertida como `\n` se comportan de la misma manera: solo `qq` (y `"…"`) convierte `\n` en un salto de línea real, mientras que tanto `q` como `Q` lo dejan como los dos caracteres `\` y `n`:

```raku
say qq{line\nbreak}; # line<newline>break
say q{line\nbreak};  # line\nbreak
say Q{line\nbreak};  # line\nbreak
```

Entonces, ¿en qué se diferencian `q` y `Q`? `q`, como las comillas simples, aún maneja un *pequeño* conjunto de escapes — una doble barra invertida `\\` se convierte en una sola, y puedes escapar el delimitador de cierre — mientras que la forma `Q` simple no procesa **nada** en absoluto:

```raku
say q{a\\b}; # a\b   — q collapses the escaped backslash
say Q{a\\b}; # a\\b  — Q keeps both characters
```

Puedes elegir cualquier delimitador — `q{…}`, `q[…]`, `q/…/`, `q!…!` — lo cual es útil cuando el texto contiene comillas. Los tres operadores son la base; el siguiente tema muestra cómo los [_adverbios_](/es/advanced/quoting/adverbs) te permiten combinar exactamente qué características están activas.

{% include nav.html %}
