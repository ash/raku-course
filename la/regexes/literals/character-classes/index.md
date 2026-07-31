---
title: Classes litterarum
translations_gpt:
---

{% include menu.html %}

Saepe non unum characterem fixum congruere vis sed quemlibet characterem ex serie. Talis series _classis characterum_ appellatur et inter `<[` et `]>` scribitur:

```raku
say 'grey' ~~ / gr <[ae]> y /; # ｢grey｣
say 'gray' ~~ / gr <[ae]> y /; # ｢gray｣
```

Classis `<[ae]>` unum characterem congruit qui aut `a` aut `e` est, itaque utraque coloris scriptura congruit.

Intra uncos _intervallum_ duobus punctis enumerare potes:

```raku
say 'a1b2' ~~ / <[0..9]> /; # ｢1｣
```

`<[0..9]>` quamlibet unam cifram congruit; prima cifra in catena est `1`.

Ut quemlibet characterem congruas qui in serie **non** est, pone signum minus statim post uncum apertum:

```raku
say 'stop!' ~~ / <-[a..z]> /; # ｢!｣
```

Hic `<-[a..z]>` primum characterem congruit qui littera minuscula non est, quod est signum exclamationis.

Plures partes in una classe coniungere potes. Exempli gratia, `<[a..z A..Z 0..9]>` litteram vel cifram congruit. Spatia ibi sola legibilitatis causa sunt — sicut ubique in regex, spatia intra `<[…]>` neglecta sunt, itaque `<[a..zA..Z0..9]>` exacte eadem classis est.

{% include nav.html %}
