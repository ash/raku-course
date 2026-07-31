---
title: Modulos utendo
translations_gpt:
---

{% include menu.html %}

Ut modulo utaris, illum per enuntiatum `use` onera. Postea nomina quae modulus exportat praesto sunt ac si ea ipse scripsisses.

Dato archivo `Greeting.rakumod` ex argumento superiore, programma eo sic utitur:

```raku
use Greeting;

say hello('Anna');
```

Quia `hello` `is export` notatum est, enuntiatum `use` illud praesto facit, et programma illud directe vocat:

```
Hello, Anna!
```

Ut Raku modulum inveniat, ille in semita quaesitionis modulorum esse debet. Cum archivum moduli in eadem directoria ac programma tuum sedet, Raku illic quaerere iubes per optionem `-I.` (punctum «directoriam currentem» significat):

```console
$ raku -I. program.raku
Hello, Anna!
```

Moduli installati (postea in [Modulis ex rete installandis](/la/advanced/installing-modules) tractati) sponte inveniuntur, itaque optio `-I` solis modulis opus est qui iuxta programma tuum habitant.

{% include nav.html %}
