---
title: Reditus eventus
---

{% include menu.html %}

Functiones saepe non solum aliquid faciunt sed etiam eventum reddunt. Exempli gratia, in programmate functionali, functiones non debent ullos effectus laterales producere sicut imprimere ad consolam. Nihilominus, Raku te non impedit ne id facias. Videamus quomodo valorem ex functione reddere et quomodo eum in codice vocante accipere possimus.

```raku
sub add($x, $y) {
    return $x + $y;
}

my $sum = add(10, 20);
say $sum; # 30
```

Hic, functio quae `add` appellatur duos numeros accipit et eorum summam reddit. Explicita `return` adhibetur. In parte vocante, valor quem functio reddit uti potest sicut quivis alius valor. In programmate supra, variabili assignatur.

## Ultimus valor aestimatus

In Raku, explicita `return` non requiritur si eventus quem vis ex functione reddere est ultimus valor computatus in corpore eius. Nostra functio `add` simplicior fieri potest:

```raku
sub add($x, $y) {
    $x + $y
}
```

Ut fortasse animadvertisti, non est punctum-commatum in fine lineae quia non requiritur cum linea finem currentis codicis clausulae terminat.

Tales triviales et parvae functiones saepe in una linea formantur ad codicem compendiariorem:

```raku
sub add($x, $y) { $x + $y }
```

## Nullus reditus data

Si opus est ex functione redire ante finem corporis eius, et functio nullum eventum reddit, utere nuda `return`.

```raku
sub test($x) {
    return si $x <= 10;
    dic "$x est supra limitem";
}
```

{% include nav.html %}