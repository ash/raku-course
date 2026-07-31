---
title: Concatenare et combinare
translations_gpt:
---

{% include menu.html %}

Promissa etiam potentiora fiunt cum ea componis. Usitatissima necessitas est **plura** simul exspectare. `await` indicem promissorum accipit et effectus eorum ordine reddit:

```raku
my @jobs = (start { 1 }), (start { 2 }), (start { 3 });
say await @jobs;     # (1 2 3)
say [+] await @jobs; # 6
```

Tria opera simul currunt; `await @jobs` omnia exspectat et `(1, 2, 3)` reddit. Quia effectus eodem ordine ac promissa redeunt, eos ut solet reducere potes.

Opus etiam in promissum concatenare potes per `.then`, quod blocum sequentem currit simul atque promissum perfectum est. Intus, `.result` valor promissi originalis est:

```raku
my $p = start { 10 };
my $q = $p.then({ .result * 2 });
say await $q; # 20
```

`$q` novum promissum est quod effectum `$p` duplicat. Illud exspectare `20` dat.

Blocus parametrum expressum non habet, itaque promissum perfectum ut variabilem thematis `$_` accipit — quapropter nudum `.result` operatur: revera `$_.result` est. Si mavis illi promisso nomen dare, utere bloco acuto:

```raku
my $q = $p.then(-> $prev { $prev.result * 2 });
```

Hoc eodem prorsus modo se gerit; `$prev` promissum originale `$p` est, et `$prev.result` valor eius.

Cum `start`, `await` et `.then`, integras fistulas operis simultanei describere potes: multa negotia lancia, effectus eorum compone, et nova negotia ex veteribus aedifica — omnia sine filo ullo directe tangendo.

{% include nav.html %}
