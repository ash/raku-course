---
title: Quiz 2 — List and scalar vs. list and array
---

{% include menu.html %}

Sunt indices in parte dextra in infra assignationibus. Obiecta cuius generis variabiles servant?

### 1

```raku
my $x = (100, 200, 300);
my @x = (100, 200, 300);

say $x.WHAT;
say @x.WHAT;
```

Elige responsa correcta:

{:.quiz-select}
(List) | Typus `$x` est&nbsp; (: (Array), (Int), (List) :)
(Array) | Typus `@x` est&nbsp; (: (Array), (Int), (List) :)

## 2*

Hic est casus magis complicatus. Noli sollicitari si nunc non intellegis. Ad hunc locum redibimus in secunda parte cursus.

```raku
my $x = [100, 200, 300];
my @x = [100, 200, 300];

say $x.WHAT;
say @x.WHAT;
```

Elige responsa correcta:

{:.quiz-select}
(Array) | Typus `$x` est&nbsp; (: (Array), (Int), (List) :)
(Array) | Typus `@x` est&nbsp; (: (Array), (Int), (List) :)

{% include quiz.html %}

{% include nav.html %}