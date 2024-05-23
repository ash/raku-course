---
title: dum et donec ut statement modifiers
---

{% include menu.html %}

Et `dum` et `donec` adhiberi possunt in forma statement modifiers ([similiter](/la/essentials/conditional-checks/modifiers) ad `si` et `nisi`).

Considera exemplum quod modulum divisionis imitatur:

```raku
meum $x = 10;
$x -= 3 dum $x > 2;
dic $x; # 1
```

Hic, `-=` est operator qui tam subtractionem quam assignationem coniungit. In hoc casu, `$x -= 3` aequivalet `$x = $x - 3`.

Modifier `dum` permittit statement `$x -= 3` iterare dum condicio `$x > 2` manet `Verum`. Simul ac fit `Falsum`, loop sistit.

Nota quod si condicio initio `Falsum` est, statement omnino non exequitur.

Idem programma cum `donec` rescribi potest. Ad hoc, condicio invertenda est:

```raku
meum $x = 10;
$x -= 3 donec $x <= 2;
dic $x; # 1
```

{% include nav.html %}