---
title: Genera operatorum Raku
translations_gpt:
---

{% include menu.html %}

Iam multos operatores adhibuisti — `+`, `~`, `++`, et cetera. In Raku, operatores classificantur secundum _ubi_ se ponunt relative ad operandos suos. Cognoscere categorias postea iuvat, cum operatores tuos proprios definies.

## `prefix`

Operator praefixus _ante_ unum operandum venit:

```raku
my $x = 5;
say -$x; # -5
say ?$x; # True
```

Hic, `-` numerum negat et `?` valorem in Booleanum suum convertit.

## `infix`

Operator infixus _inter_ duos operandos sedet. Plerique noti operatores arithmetici et filorum sunt infixi:

```raku
say 3 + 4;       # 7
say 'a' ~ 'b';   # ab
```

Operator infixus non semper symbolum interpunctionis est — verbum esse potest. Operator `gcd` quem cum [integris](/la/advanced/integers) invenisti, exempli gratia, operator infixus est qui ut nomen inter duos operandos suos scribitur:

```raku
say 12 gcd 18;   # 6
```

## `postfix`

Operator postfixus _post_ unum operandum venit:

```raku
my $x = 5;
$x++;
say $x; # 6
```

## `circumfix` et `postcircumfix`

Operator circumfixus operandum suum _circumdat_. Uncis quadratis qui ordinem construunt operator circumfixus est:

```raku
my @a = [1, 2, 3];
```

Operator postcircumfixus aliquid circumdat sed terminum sequitur. Subscriptio operator postcircumfixus est — `[1]` post `@a`:

```raku
my @a = 10, 20, 30;
say @a[1]; # 20
```

Haec nomina — `prefix`, `infix`, `postfix`, `circumfix`, et `postcircumfix` — eadem verba sunt quae Raku adhibet cum [novum operatorem declaras](/la/advanced/user-defined-operators), ut postea videbis.

{% include nav.html %}
