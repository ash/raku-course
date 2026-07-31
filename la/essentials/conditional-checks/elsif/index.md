---
title: 'Utendo `elsif`'
---

{% include menu.html %}

Hactenus, didicimus `if` et `else`. Quid si vis ordinare catenam testium? Sunt saltem duo modi ad hoc faciendum in Raku (revera, sunt etiam plures).

Una ex possibilitatibus est uti catena `if`, `elsif`, et `else` clausulis. Nota orthographiam `elsif`. Neque `elseif` neque `else if` est.

```raku
my $x = prompt 'Intra numerum: ';
if $x > 100 {
    say "$x maior est quam 100.";
}
elsif $x > 50 {
    say "$x maior est quam 50.";
}
elsif $x > 25 {
    say "$x maior est quam 25.";
}
else {
    say "$x est 25 vel minor.";
}
```

In hoc programmate, sunt tres rami et tres probationes una post alteram. Simul ac una ex condicionibus `True` est, correspondens codicis clausula curritur. Si nulla probatio `True` est, `else` clausula curritur.

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