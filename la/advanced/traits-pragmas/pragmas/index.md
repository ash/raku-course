---
title: Pragmata
---

{% include menu.html %}

_Pragma_ simile videtur modulo cum `use` onerato, sed loco codicis importandi regulam compilationis mutat pro reliquo ambitu currenti. Unum activa cum `use` et (ubi sensum habet) deactiva cum `no`.

Pragma maximi momenti, `strict`, **ex defectu activum** est in Raku: requirit ut omnis variabilis declaretur ante usum, quod est cur error typographicus in nomine variabilis deprehendatur potius quam silenter novam variabilem creet.

`strict` deactivando cum `no strict` illud requisitum tollitur, ita ut variabili quae numquam cum `my` declarata est assignare possis:

```raku
no strict;

$x = 42;
say $x; # 42
```

Cum defectu `strict` vigente, illud nudum `$x = 42` error tempore compilationis esset — *Variable '$x' is not declared*. Linea `no strict` regulam pro reliquo ambitu circumdantis relaxat.

Alia pragmata includunt `fatal` (quod defectum quietum in exceptionem iactam convertit — utile postquam tractationem exceptionum cognovisti), `isms` (ad idiomata ex aliis linguis mutuata permittenda), et `variables` (ad regulas variabilium moderandas). Effectus pragmatis _lexicalis_ est — tantum ad finem blocki in quo apparet durat — ita ut regulam pro exacta regione codicis ubi eam vis stringere vel laxare possis.

Unum pragma argumentum accipit: `lib` directorium addit ad indicem quem Raku perscrutatur cum modulos onerat — aequivalens in-programmate optionis `-I` lineae mandatorum:

```raku
use lib 'lib';
```

Ad id pervenies cum tuos proprios [modulos](/la/advanced/modules-basics/using-modules) scribere et onerare incipies.

{% include nav.html %}
