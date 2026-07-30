---
title: Quiz — Prefix of postfix
---

{% include menu.html %}

Je hebt gezien dat `++` *na* een variabele geschreven wordt, als postfix. Het kan ook *voor* de variabele geschreven worden. Welke categorie heeft `++` in `++$x`?

```raku
my $x = 5;
say ++$x;
```

{:.quiz}
1 | prefix
0 | postfix
0 | infix
0 | postcircumfix

{% include quiz.html %}

<div class="extended-explanation">

De categorie wordt puur bepaald door de *positie*. Geschreven voor zijn enkele operand is `++$x` een **prefix**-operator — dezelfde `++` is een postfix wanneer deze erna geschreven wordt, zoals in `$x++`. Beide vormen verhogen `$x`; de prefix-vorm geeft de nieuwe waarde terug, dus dit print `6`.

</div>

{% include nav.html %}
