---
title: Subprogrammata nidificata
translations_gpt:
---

{% include menu.html %}

Subroutina _intra_ aliam subroutinam definiri potest. Subroutina inclusa est subroutina ordinaria, sed tantum intra subroutinam continentem visibilis est.

```raku
sub outer {
    sub inner {
        say 'I am the inner subroutine';
    }

    inner;
}

outer;
```

Programma imprimit:

```
I am the inner subroutine
```

Hic `inner` intra `outer` declaratur, et `outer` eam vocat. Hoc operatur quia `inner` per totum corpus subroutinae `outer` in ambitu est.

Extra `outer` autem, nomen `inner` non exsistit. Programma sequens compilari non potest:

```raku
sub outer {
    sub inner { 42 }
}

inner; # error: Undeclared routine: inner
```

Inclusio utilis est cum subroutina auxiliaris ab una sola subroutina requiritur. Eam intus servare clare indicat eam rem privatam esse et impedit ne aliunde per errorem vocetur.

{% include nav.html %}
