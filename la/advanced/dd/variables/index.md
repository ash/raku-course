---
title: Variabiles dumping
translations_gpt:
---

{% include menu.html %}

Voca `dd` ut videas quid variabilis contineat, similiter ac cum `say` faceres:

```raku
my $var = 42;
dd $var;
```

Una cum valore, `dd` etiam nomen variabilis ostendit:

```console
$var = 42
```

Si variabilis typum declaratum habet, typus quoque apparet. Compara output programmatis sequentis cum praecedenti:

```raku
my Int $var = 42;
dd $var;
```

```console
Int $var = 42
```

Haec est differentia principalis a `say`: unum `dd` in scalari vocatum nomen, et, cum notum est, typum datorum tibi indicat — ut plures vocationes `dd` in programma inserere possis et tamen agnoscas quod output ad quam variabilem pertineat.

Potes etiam structuras datorum complexiores exscribere, ut ordines vel hashes. Hic `dd` repraesentationem codici similem valoris imprimit:

```raku
my @arr = 10, 20, [1, 2, 3], 30;
dd @arr;
```

```console
[10, 20, [1, 2, 3], 30]
```

Nota quod ordo insertus clare visibilis manet (nomen variabilis tamen non imprimitur). Idem operatur pro hashes, quorum claves `dd` ordine alphabetico imprimit:

```raku
my %hash =
    gamma => 'g',
    alpha => 'a',
    beta  => 'b';
dd %hash;
```

```console
{:alpha("a"), :beta("b"), :gamma("g")}
```

{% include nav.html %}
