---
title: Lokaj variabloj
---

{% include menu.html %}

Kio okazas se vi deklaras variablon ne nur en la tutmonda amplekso sed ankaŭ loke en la bloko?

```raku
my $x = 1;

{
    my $x = 42;
    say $x;
}

say $x;
```

La programo nun havas du sendependajn variablojn. Ili dividas la nomon, sed ĉiuj referencoj al `$x` en la tutmonda amplekso rilatas al la tutmonda variablo, dum la `$x` ene de la bloko estas loka variablo, malsama de la tutmonda `$x`. La programo presas du malsamajn valorojn:

```console
$ raku t.raku
42
1
```

{% include nav.html %}