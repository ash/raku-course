---
title: Convertens genera cum operatoribus praefixis
---

{% include menu.html %}

Alius modus transformandi genus obiecti est uti operatoribus praefixis. Hi sunt operatoria unius characteris quae immediate ante valorem (vel variabilem) ponuntur.

`~` | Coactio ad Stringam
`+` | Coactio ad Numerum
`?` | Coactio ad Booleanum

Considera exemplum creandi valorem Booleanum ex integro:

```raku
dic ?42; # Verum
```

Converto ad stringam simile est:

```raku
meus $n = -30;
meus $s = ~$n;
dic $s.chars; # 3, ut "-30" habet 3 characteres
```

Nota quod cum conversione numerica, genus valoris conversi differt secundum numerum in quaestione. Compara conversiones sequentes ex stringis:

```raku
dic (+'100').WHAT;   # (Int)
dic (+'3.14').WHAT;  # (Rat)
dic (+'27E-1').WHAT; # (Num)
```

Ad conversiones Booleanas, est alia ratio quae vocatur `so`. Potes uti ea ut operator praefixus vel ut methodus:

```raku
meus $valor = 42;
dic so $valor; # Verum
dic $valor.so; # Verum
```

{% include nav.html %}