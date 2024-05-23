---
title: Functio PRINCIPALIS
---

{% include menu.html %}

Programma Raku nullum rituale boilerplate requirit, itaque statim utiles instructiones scribere potes. Haec pars programmatis, quae in gradu supra quemlibet [codicem clausum](/la/essentials/code-blocks) (inclusis [functionibus](/la/essentials/functions), exempli gratia), sita est, _mainline_ appellatur.

Si programma functionem cum nomine speciali `MAIN` continet, Raku hanc functionem exsequitur postquam omnia compilavit et postquam codex mainline exsecutus est.

```raku
dic '1. Codex mainline';

sub MAIN {
    dic '3. MAIN vocata';
}

dic '2. Etiam mainline';
```

Hoc programma primum exsequitur `dic` summi gradus, et deinde `MAIN` vocat:

```console
$ raku t.raku
1. Codex mainline
2. Etiam mainline
3. MAIN vocata
```

Certe, etiam possibile est habere programma cum functione `MAIN` et nullo alio codice mainline.

{% include nav.html %}