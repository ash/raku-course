---
title: map parallelum per hyper
translations_gpt:
---

{% include menu.html %}

Voca `.hyper` in indice ante `map` vel `grep`, et opus per plura fila operaria diffunditur — dum effectus adhuc **ordine originali** redeunt:

```raku
say (1..5).hyper.map(* * 2); # (2 4 6 8 10)
```

Hoc prorsus ut `map` ordinarium apparet, et effectus idem est; sola differentia est quod duplicationes fortasse in nucleis diversis eodem tempore computatae sunt.

`.hyper` cum `grep` eodem prorsus modo operatur — unumquodque elementum parallele probatur, et ea quae transeunt adhuc ordine originali redeunt:

```raku
say (1..10).hyper.grep(* %% 2); # (2 4 6 8 10)
```

Quia `.hyper` ordinem servat, substitutio directa est pro `map` vel `grep` tardo: nihil quod ex ordine effectuum pendet mutari debet. Emolumentum solum apparet cum opus uniuscuiusque elementi satis magnum est ut pretium fila ordinandi superet — numerum quadrare longe nimis vile est ut re vera parallelizari mereatur. Pro opere per elementum vere sumptuoso super indicem magnum, `.hyper` exspectationem longam in brevem vertere potest pretio unius vocationis methodi.

Unum tenendum: utrum opus *revera* per nuclea diffundatur, compilatoris est. Lingua effectus figit — et, pro `.hyper`, ordinem eorum originalem — sed exsecutionem parallelam actualem non postulat. `.hyper` et `.race` parallelismum **rogant** potius quam exigunt, itaque compilator quidam eas in stagno filorum currere potest vel elementa tacite in serie tractare. Eas ut occasionem accelerationis habe, non ut garantiam.

Quia ordo servatur, operationes quae ex eo *pendent* adhuc recte exeunt. Hic unumquodque verbum parallele in maiusculas vertitur, et tamen partes in locutionem ordine originali rursus iunguntur:

```raku
say <raku is fun>.hyper.map(*.uc).join(' '); # RAKU IS FUN
```

{% include nav.html %}
