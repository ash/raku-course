---
title: Classi di caratteri
translations_gpt:
---

{% include menu.html %}

Spesso non vuoi riconoscere un carattere fisso, ma un carattere qualunque preso da un insieme. Un insieme così si chiama _classe di caratteri_ e si scrive fra `<[` e `]>`:

```raku
say 'grey' ~~ / gr <[ae]> y /; # ｢grey｣
say 'gray' ~~ / gr <[ae]> y /; # ｢gray｣
```

La classe `<[ae]>` riconosce un singolo carattere che sia `a` oppure `e`, quindi corrispondono entrambe le grafie del colore.

Dentro le parentesi puoi elencare un _intervallo_ con due punti:

```raku
say 'a1b2' ~~ / <[0..9]> /; # ｢1｣
```

`<[0..9]>` riconosce una cifra qualunque; la prima cifra nella stringa è `1`.

Per riconoscere un carattere qualunque che **non** sia nell'insieme, metti un segno meno subito dopo la parentesi aperta:

```raku
say 'stop!' ~~ / <-[a..z]> /; # ｢!｣
```

Qui `<-[a..z]>` riconosce il primo carattere che non sia una lettera minuscola, cioè il punto esclamativo.

Puoi combinare più pezzi in un'unica classe. Per esempio `<[a..z A..Z 0..9]>` riconosce una lettera o una cifra. Gli spazi lì sono solo per leggibilità: come ovunque in un regex, gli spazi dentro `<[…]>` vengono ignorati, quindi `<[a..zA..Z0..9]>` è esattamente la stessa classe.

{% include nav.html %}
