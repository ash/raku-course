---
title: Notatio Ritus
---

{% include menu.html %}

Ritus `notatio` argumenta sua ad rivum errorum standard imprimet. In reliquis, similis est [`dicere`](../say).

1. Vocatur methodum `gist` in argumentis suis.
1. Addit characterem novae lineae.
1. Convertit eventum ad UTF-8.
1. Mittit ad rivum `STDERR`.

```raku
my $x = 42;
notatio "Valor currentis \$x est $x";
```

Confirma hunc programmatum nuntium ad `STDOUT` non mittere:

```
$ raku t.raku > /dev/null
Valor currentis $x est 42
```

Si nullum argumentum ad `notatio` traditur, imprimit `Notatum` ut nuntium defaltum.

{% include nav.html %}