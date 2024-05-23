---
title: Commentarii unius lineae
---

{% include menu.html %}

Simplissima forma commentarii est commentarius unius lineae. Incipit a charactere `#` et pergit usque ad finem lineae currentis.

```raku
my $name; # Haec variabilis ad nomen usoris servandum adhibetur
$name = prompt 'Quod est nomen tuum? ';
say $name; # Nunc nomen videmus
```

Nota quod sheebang sicut `#!/usr/bin/env raku` in prima linea codicis etiam commentarius pro Raku est, dum a testudine legi et exsequi potest.

{% include nav.html %}