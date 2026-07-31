---
title: Recursio cum subprogrammatibus multi
translations_gpt:
---

{% include menu.html %}

Adhuc casus fundamentalis linea _intra_ subprogramma fuit — operator ternarius vel `return` maturus qui argumentum inspicit. Raku modum magis expressivum eiusdem rei scribendae offert. Quia subprogramma plures candidatos `multi` habere potest, casui fundamentali et gradui recursivo **propria separata subprogrammata** dare potes, et missionem multiplicem sinere rectum pro unaquaque vocatione eligere.

Recordare factorialem. Cum `multi` duo casus eius duo subprogrammata fiunt:

```raku
multi fact(0)  { 1 }
multi fact($n) { $n * fact($n - 1) }

say fact(5); # 120
```

Primus candidatus solum tunc congruit cum argumentum exacte `0` est — illud litterale in signatura casus fundamentalis _est_. Omnis alia vocatio ad secundum candidatum it, qui multiplicat et recurrit. Cum `fact($n - 1)` tandem ad `0` pervenit, missio ad primum candidatum transit, et catena vocationum se explicat. Casus fundamentalis non iam ramus in corpore sepultus est; subprogramma est quod pro uno valore exsistit.

Cur `0` et non `1`? Quia omnis gradus unum subtrahit, quilibet numerus initialis tandem exacte in `0` cadit, et `0!` ut `1` definitur — itaque `0` est ubi descensus vere finit. Candidatus litteralis unum valorem _exactum_ congruit, itaque fundamentum `multi fact(1)` `fact(1)` recte computaret sed `fact(0)` ad `multi fact($n)` cadere sineret et ultra nihil in perpetuum recurrere. Ad `0` consistere subprogramma rectum servat pro omni numero integro non negativo, `fact(0)` incluso.

Hoc praesertim bene legitur cum plus quam unus casus fundamentalis est. Fibonacci duobus eget:

```raku
multi fib(0) { 0 }
multi fib(1) { 1 }
multi fib($n) { fib($n - 1) + fib($n - 2) }

say fib(10); # 55
```

Unusquisque casus fundamentalis proprius candidatus unius lineae est, et candidatus recursivus cetera omnia tractat — nulla condicionalia nidificata.

Litterale quale `0` solum illum exactum valorem congruit. Cum casus fundamentalis _intervallum_ tegit — «`$n` est `1` vel minus» — utere loco eius constrictione `where`:

```raku
multi fact($n where * <= 1) { 1 }
multi fact($n)              { $n * fact($n - 1) }

say fact(6); # 720
```

Candidatus constrictus specialior est, itaque Raku eum primum temptat; candidatus simplex `$n` cetera omnia capit.

Eadem disciplina ac prius adhuc valet: omnis semita recursiva ad candidatum casus fundamentalis pervenire debet. Factorialis cum litterali `0`, exempli gratia, solum pro numeris integris non negativis tuta est — `fact(-1)` ultra `0` gradum faceret et in perpetuum recurreret, quia nullus candidatus umquam congruit. Casus per subprogrammata `multi` dividere necessitatem casus fundamentalis non tollit; ei solum nomen et propriam domum dat.

{% include nav.html %}
