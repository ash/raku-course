---
title: Fila coniungere
translations_gpt:
---

{% include menu.html %}

Ut filum finire exspectes, voca ei `.finish` (quod etiam `.join` scribitur). Programma principale ibi consistit donec filum paratum sit:

```raku
my $t = Thread.start({ say 'in the thread' });
$t.finish;
say 'done';
```

Hoc imprimit:

```
in the thread
done
```

Quia `.finish` exspectat, nuntius fili certo ante `done` apparebit. Sine `.finish` ordo imprevisus esset, et programma etiam finire posset antequam filo occasio imprimendi esset.

Cum plura fila incipis, unumquodque coniungis ut certus sis omnia perfecisse:

```raku
my $a = Thread.start({ 1 + 1 });
my $b = Thread.start({ 2 + 2 });
$a.finish;
$b.finish;
say 'both finished';
```

Duo fila simul currunt, et utrumque ante ultimum `say` coniungere garantit `both finished` solum tunc imprimi cum vere parata sunt. Coniungere est modus quo laborem simultaneum in punctum programmatis praedicibile rursus reducis.

Quoniam vocatio methodi in [iunctura](/la/paradigms/junctions) ad omnem valorem quem tenet diffunditur, plura fila una expressione coniungere potes. Coniunge ea operatore `all` `&` et voca `.finish` in iunctura:

```raku
my $a = Thread.start({ 1 + 1 });
my $b = Thread.start({ 2 + 2 });

($a & $b).finish;
say 'both finished';
```

`.finish` in `$a & $b` vocare illud in utroque filo currit, itaque programma exspectat donec neutrum adhuc currat — idem effectus ac ea singillatim coniungere, sed ut «fini utrumque horum» legitur et pro quolibet numero filorum per `&` coniunctorum operatur.

{% include nav.html %}
