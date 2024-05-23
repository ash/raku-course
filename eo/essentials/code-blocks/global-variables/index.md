---
title: Tutmondaj variabloj
---

{% include menu.html %}

Ni kreu variablon antaŭ la koda bloko:

```raku
my $x = 1;

{
    $x = 42;
    say $x;
}

say $x;
```

En ĉi tiu kazo, `$x` estas tutmonda variablo (ĝi estas en la tutmonda amplekso), kaj la programo presas `42` dufoje.

{% include nav.html %}