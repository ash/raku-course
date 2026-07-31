---
title: run et shell
translations_gpt:
---

{% include menu.html %}

Duo modi sunt programma externum lanciandi. Functio `run` imperatum et argumenta eius ut valores **separatos** accipit et programma directe currit, nullo interposito interprete imperandi:

```raku
run 'echo', 'hello';
```

Hoc programma `echo` cum uno argumento `hello` currit, quod `hello` imprimit. Quia argumenta separatim traduntur, nullum periculum est ne interpres spatia vel characteres speciales male intellegat — `run` est electio praedefinita tuta.

Functio `shell` contra **unam chordam** ad interpretem systematis tradit, qui eam interpretatur. Hoc tibi permittit facultatibus interpretis uti, qualia sunt fistulae et redirectiones:

```raku
shell 'echo hello | tr a-z A-Z';
```

Hic interpres `echo` currit, exitum eius per `tr` fundit, et `HELLO` imprimit. Commoditas cum cautione venit: quia interpres chordam parsit, imperatum `shell` ex introitu non fidendo aedificare periculosum est. `run` praefer nisi facultatibus interpretis proprie eges.

Utraque `Proc` obiectum reddit quod describit quomodo programma finierit. Ex more programma lanciatum exitum programmatis tui communicat, itaque quidquid imprimit in screen apparet. Ut illum exitum loco eius capias, illum petis — argumentum sequens.

{% include nav.html %}
