---
title: Quiz — Variabiles ut parametri nominati
---

{% include menu.html %}

Hic est eadem functio ac in quiz praecedente:

```raku
sub f(:$a, :$b) {
    $a - $b
}
```

Habes etiam tres variabiles in programmate:

```raku
my $a = 1;
my $b = 2;
my $c = 3;
```

Nota omnes modos validos ad functionem vocandam et duas ex tribus variabilibus ei tradendas.

{:.quiz}
1 | f(a => $a, b => $b)
1 | f(a => $c, b => $c)
0 | f($a, $b) | Argumenta posita hic traduntur pro nominatis.
1 | f(:$a, :$b)
0 | f($:a, $:b) | Non validus Raku syntax.
0 | f(:$b, :$c) | Nullus parameter nominatus `c`.
0 | f(:$a, c => $c) | Nullus parameter nominatus `c`.
1 | f(:$a, b => $c)
1 | f(:$a, :b($c)) | Idem ac supra.
1 | f(:a($a), :b($c)) | Etiam bene, quamvis paulum redundans.


{% include quiz.html %}

{% include nav.html %}