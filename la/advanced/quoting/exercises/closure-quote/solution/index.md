---
title: 'Solutio: Clausura in q catena'
---

{% include menu.html %}

Hic est possibilis solutio huius exercitii.

## Codex

```raku
my $x = 10;
say q:c/$x squared is {$x ** 2}/;
```

🦋 Inveni codicem fontem in archivo [closure-quote.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/closure-quote.raku).

## Exitus

```
$x squared is 100
```

## Commentarii

1. Adverbium `:c` (clausura) interpolationem codicis inserti `{ … }` in forma aliter ad litteram `q` accendit. Intra uncos, `$x` verus codex est, itaque `{$x ** 2}` ad `100` aestimatur.

1. `$x` extra uncos exacte ut scriptum est relinquitur, quia adverbium scalare `:s` *non* accensum est. Hic est totus sensus adverbiorum per proprietatem: codicem insertum accipis sine etiam interpolatione `$` accensa.

1. Adverbia cumulari possunt. Si etiam `:s` addas, `$x` praecedens quoque interpolatur — ambae proprietates nunc simul accensae sunt:

```raku
my $x = 10;
say q:c:s/$x squared is {$x ** 2}/; # 10 squared is 100
```

{% include nav.html %}
