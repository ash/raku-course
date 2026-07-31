---
title: '`note`'
---

{% include menu.html %}

Ritus `note` argumenta sua ad rivum errorum standard imprimet. In reliquis, similis est [`say`](../say).

1. Vocatur methodum `gist` in argumentis suis.
1. Addit characterem novae lineae.
1. Convertit eventum ad UTF-8.
1. Mittit ad rivum `STDERR`.

```raku
my $x = 42;
note "Valor currentis \$x est $x";
```

Confirma hunc programmatum nuntium ad `STDOUT` non mittere:

```
$ raku t.raku > /dev/null
Valor currentis $x est 42
```

Si nullum argumentum ad `note` traditur, imprimit `Notatum` ut nuntium defaltum.

{% include nav.html %}