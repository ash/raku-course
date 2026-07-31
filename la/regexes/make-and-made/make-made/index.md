---
title: make et made
translations_gpt:
---

{% include menu.html %}

Loco eius quod valores ex arbore postea eruas, valorem congruentiae **dum** analysas adfigere potes. Intra corpus tesserae _clausulam codicis_ inserere potes — internum `{ … }` inter exemplar scriptum — quae currit simul ac congruentia ad eam pervenit. Intra illam clausulam functio `make` valorem in congruentia currenti servat:

```raku
grammar OneNum {
    token TOP    { <number> { make $<number>.Int } }
    token number { \d+ }
}
```

Cum `TOP` congruit, interna clausula `{ make $<number>.Int }` currit — unci exteriores mera tesserae corpus sunt — et integrum in congruentia servat. Illud postea per `made` (vel alias eius `.ast`) relegis:

```raku
say OneNum.parse('42').made; # 42
```

Quia `$<number>.Int` servavimus, valor a `made` redditus verus `Int` est — ipse numerus, non obiectum congruentiae:

```raku
say OneNum.parse('42').made + 1; # 43
```

Nota hoc ipsum `+ 1` `43` daturum fuisse etiam sine `.Int`, quoniam congruentia in arithmetica in cifras suas vertitur. Ratio `.Int` vocandi est quod valor *servatus* vere numerus **est** — quod vis simul ac in structura datorum tenetur vel ulterius traditur, potius quam congruentia cruda.

Valor servatus quidlibet esse potest — numerus, catena, ordo, obiectum. Tessera etiam valores quos subtesserae suae fecerunt coniungere potest. Exempli gratia, duos numeros captos summans:

```raku
grammar Sum {
    token TOP { <a> '+' <b> { make $<a>.Int + $<b>.Int } }
    token a   { \d+ }
    token b   { \d+ }
}

say Sum.parse('2+3').made; # 5
```

`make` et `made` pons sunt a «congruit» ad «ecce significatio». Clausulas insertas ponere operatur, sed exemplar cum logica miscet; sectio sequens illam logicam in separatam [_classem actionum_](/la/regexes/action-classes) movet.

{% include nav.html %}
