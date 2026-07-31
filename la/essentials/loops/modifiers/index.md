---
title: '`while` et `until` ut statement modificatores'
---

{% include menu.html %}

Et `while` et `until` adhiberi possunt in forma statement modifiers ([similiter](/la/essentials/conditional-checks/modifiers) ad `if` et `unless`).

Considera exemplum quod modulum divisionis imitatur:

```raku
my $x = 10;
$x -= 3 while $x > 2;
say $x; # 1
```

Hic, `-=` est operator qui tam subtractionem quam assignationem coniungit. In hoc casu, `$x -= 3` aequivalet `$x = $x - 3`.

Modifier `while` permittit statement `$x -= 3` iterare dum condicio `$x > 2` manet `True`. Simul ac fit `False`, loop sistit.

Nota quod si condicio initio `False` est, statement omnino non exequitur.

Idem programma cum `until` rescribi potest. Ad hoc, condicio invertenda est:

```raku
my $x = 10;
$x -= 3 until $x <= 2;
say $x; # 1
```

{% include nav.html %}