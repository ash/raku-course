---
title: 'Solución: Piedra, papel o tijera'
translations_gpt:
---

{% include menu.html %}

Aquí tienes una posible solución para la tarea.

## Código

```raku
my %beats = rock => 'scissors', scissors => 'paper', paper => 'rock';

sub winner($a, $b) {
    return 'tie' if $a eq $b;
    return %beats{$a} eq $b ?? "$a wins" !! "$b wins";
}

for <rock scissors>, <paper rock>, <paper paper> -> ($a, $b) {
    say "$a vs $b: { winner($a, $b) }";
}
```

🦋 Puedes encontrar el código fuente en el archivo [rock-paper-scissors.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/control-logic/rock-paper-scissors.raku).

## Salida

```
rock vs scissors: rock wins
paper vs rock: paper wins
paper vs paper: tie
```

## Comentarios

1. El hash `%beats` codifica las reglas: cada jugada se asocia con la jugada a la que
vence. Eso convierte el arbitraje en una sola consulta en lugar de en una larga cadena
de condiciones.

1. Si `%beats{$a}` es la jugada del contrario, gana `$a`; en caso contrario (las jugadas
iguales ya se han tratado) gana `$b`.

{% include nav.html %}
