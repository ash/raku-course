---
title: Series
translations_gpt:
---

{% include menu.html %}

_Series_ est ordinata collectio valorum, qui unus post alterum producuntur. Raku series operatore `...` construit, qui exemplar ex valoribus datis agnoscit et cetera usque ad finem generat.

Simplicissimus casus ab uno valore ad alterum numerat:

```raku
say 1 ... 5; # (1 2 3 4 5)
```

Si duos valores initiales praebeas, Raku gradum inter eos sumit et eodem gradu pergit. Hoc modo seriem arithmeticam facis:

```raku
say 1, 3 ... 11; # (1 3 5 7 9 11)
```

Hic valores initiales `1, 3` gradum ad duo constituunt, itaque Raku binis numerat et consistit cum `11` attingit.

Valor ab operatore `...` productus est typi `Seq`:

```raku
say (1 ... 5).WHAT; # (Seq)
```

Sequentia capita ostendunt alia exemplaria quae operator `...` agnoscere potest, et quomodo series pigra esse possit -- etiam infinita.

{% include nav.html %}
