---
title: zef et oecosystema
translations_gpt:
---

{% include menu.html %}

`zef` est installator modulorum Raku. Iam eo usus es ad modulos nomine installandos; etiam in directorio distributionis locali operatur. Ex interiore distributione eam directe probare et installare potes:

```
zef test .
zef install .
```

`zef test .` archiva sub `t/` exsequitur, et `zef install .` distributionem in Raku tuum installat ut alia programmata eam per `use` adhibere possint. Nomine installare — `zef install Cro` — idem facit postquam distributionem ex systemate prius deponit.

Ad distributionem tuam **publicandam** ut alii eam nomine installare possint, eam in systema imponis. Instrumentum commune ad hoc est `fez`:

```
fez upload
```

Hoc distributionem praesentem componit et in systema Raku submittit, post quod `zef install Maths::Simple` cuilibet operabitur.

> Haec mandata `zef`/`fez` installata et accessum ad retia requirunt, et impositio rationem in systemate requirit.

Itaque cursus vitae moduli communicati est: eum cum `META6.json` dispone, per `zef test` proba, et per `fez upload` publica. Ab eo tempore tantum aliud nomen est quod quisque per `zef install` installare potest.

{% include nav.html %}
