---
title: Convertendo generibus cum prefixis operatoribus
---

{% include menu.html %}

Alius modus transformandi genus obiecti est uti operatoribus praefixis. Hi sunt operatoria unius characteris quae immediate ante valorem (vel variabilem) ponuntur.

`~` | Coactio ad Stringam
`+` | Coactio ad Numerum
`?` | Coactio ad Booleanum

Considera exemplum creandi valorem Booleanum ex integro:

```raku
say ?42; # Verum
```

Converto ad stringam simile est:

```raku
my $n = -30;
my $s = ~$n;
say $s.chars; # 3, ut "-30" habet 3 characteres
```

Nota quod cum conversione numerica, genus valoris conversi differt secundum numerum in quaestione. Compara conversiones sequentes ex stringis:

```raku
say (+'100').WHAT;   # (Int)
say (+'3.14').WHAT;  # (Rat)
say (+'27E-1').WHAT; # (Num)
```

Ad conversiones Booleanas, est alia ratio quae vocatur `so`. Potes uti ea ut operator praefixus vel ut methodus:

```raku
my $valor = 42;
say so $valor; # Verum
say $valor.so; # Verum
```

{% include nav.html %}