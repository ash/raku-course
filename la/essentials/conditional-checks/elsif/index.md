---
title: Usus eslif
---

{% include menu.html %}

Hactenus, didicimus `si` et `alioquin`. Quid si vis ordinare catenam testium? Sunt saltem duo modi ad hoc faciendum in Raku (revera, sunt etiam plures).

Una ex possibilitatibus est uti catena `si`, `elsif`, et `alioquin` clausulis. Nota orthographiam `elsif`. Neque `elseif` neque `else si` est.

```raku
meum $x = roga 'Intra numerum: ';
si $x > 100 {
    dic "$x maior est quam 100.";
}
elsif $x > 50 {
    dic "$x maior est quam 50.";
}
elsif $x > 25 {
    dic "$x maior est quam 25.";
}
alioquin {
    dic "$x est 25 vel minor.";
}
```

In hoc programmate, sunt tres rami et tres probationes una post alteram. Simul ac una ex condicionibus `Verum` est, correspondens codicis clausula curritur. Si nulla probatio `Verum` est, `alioquin` clausula curritur.

Hic sunt paucae probationes currendi programmatis quae omnes clausulas excitant:

```console
$ raku t.raku
Intra numerum: 120
120 maior est quam 100.

$ raku t.raku
Intra numerum: 75      
75 maior est quam 50.

$ raku t.raku
Intra numerum: 30
30 maior est quam 25.

$ raku t.raku
Intra numerum: 10
10 est 25 vel minor.
```

Alternativus modus est uti par `datis` et `quando`, quod in futuro discemus.

{% include nav.html %}