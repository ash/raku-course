---
title: Typorum conversiones utens methodis coercitionis typorum
---

{% include menu.html %}

Ad convertendum, vel _coercendum_ typum, voca methodum cum nomine generis datae. Exempli gratia, converte stringam in numerum integrum:

```raku
my $howmany = '42';
my $n = $howmany.Int;
say $n;
```

In multis casibus, non opus est valores explicite convertere, quia Raku id pro te facit. Sequens codex recte et praedicte operatur:

```raku
my $a = '10';
my $b = '20';
my $c = $a + $b;
say "The result is $c."; # The result is 30.
```

Duae variabiles, `$a` et `$b`, continent stringas, sed in expressione arithmetica cum `+` utuntur. Hoc tempore, ambae stringae in integros convertuntur, et sic `$c` etiam integrum accipit. Variabilis continens integrum interpolatur in stringa in ultima linea, ubi Raku necessarias operationes facit ut numerum ut seriem characterum digitorum praebeat.

{% include nav.html %}