---
title: Secuencias perezosas e infinitas
translations_gpt:
---

{% include menu.html %}

Una secuencia no tiene que calcular todos sus valores de una vez. Las secuencias en Raku son _perezosas_ (lazy): cada valor se produce solo cuando realmente se necesita. Esto hace posible describir una secuencia que no tiene fin.

Para escribir una secuencia infinita, usa `Inf` como punto final. Envuelve la secuencia entre paréntesis, porque `...` tiene menor precedencia que `=`:

```raku
my $naturals = (1 ... Inf);
```

Sin los paréntesis, `my $naturals = 1 ... Inf` asignaría solo `1` a la variable y luego construiría la secuencia por su cuenta, y evaluar una secuencia interminable sin resultado colgaría el programa.

Aún no se ha calculado nada. La secuencia entregará valores solo cuando los solicites. El método `head` toma los primeros:

```raku
say (1 ... Inf).head(5); # (1 2 3 4 5)
```

Aunque la secuencia es infinita, solo se generan los primeros cinco números. Sin la evaluación perezosa, un programa que intentará construir toda una secuencia interminable nunca terminaría.

Para una secuencia finita, el método `tail` toma valores del final:

```raku
say (1 ... 100).tail(3); # (98 99 100)
```

La evaluación perezosa es lo que te permite separar la _descripción_ de una secuencia de la decisión de cuánto de ella usar.

{% include nav.html %}
