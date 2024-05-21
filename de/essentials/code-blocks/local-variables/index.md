---
title: Lokale Variablen
---

{% include menu.html %}

Was passiert, wenn Sie eine Variable nicht nur im globalen Geltungsbereich, sondern auch lokal im Block deklarieren?

```raku
my $x = 1;

{
    my $x = 42;
    say $x;
}

say $x;
```

Das Programm hat jetzt zwei unabhängige Variablen. Sie teilen sich den Namen, aber alle Verweise auf `$x` im globalen Geltungsbereich beziehen sich auf die globale Variable, während `$x` innerhalb des Blocks eine lokale Variable ist, die sich von der globalen `$x` unterscheidet. Das Programm gibt zwei verschiedene Werte aus:

```console
$ raku t.raku
42
1
```

{% include nav.html %}