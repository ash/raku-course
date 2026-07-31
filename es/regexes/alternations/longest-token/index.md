---
title: Token más largo y primera coincidencia
translations_gpt:
---

{% include menu.html %}

Cuando dos alternativas podrían coincidir ambas en el mismo punto, el operador `|` elige la que empareja el fragmento de texto **más largo**. A esto se le llama _emparejamiento del token más largo_:

```raku
say 'catdog' ~~ / cat | catdog /; # ｢catdog｣
```

Aunque `cat` está escrito primero y coincidiría, `|` prefiere el más largo `catdog`.

A veces quieres lo contrario: probar las alternativas en el orden en que las escribiste y tomar la **primera** que coincida. Eso es lo que hace la barra doble `||`:

```raku
say 'catdog' ~~ / cat || catdog /; # ｢cat｣
```

Ahora `cat` se prueba primero y coincide, así que el motor se detiene ahí y nunca considera `catdog`.

Usa `|` (token más largo) cuando quieras la «mejor» coincidencia con independencia del orden; es la elección habitual y aquella en la que se apoyan las gramáticas. Usa `||` (primera coincidencia) cuando el orden de las alternativas sea significativo y quieras que ganen las anteriores.

{% include nav.html %}
