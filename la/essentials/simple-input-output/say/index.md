---
title: Output cum dicere
---

{% include menu.html %}

Functio `dicere` (vel subrutina, vel simpliciter rutina) valores ad fluxum output standardum, `STDOUT`, imprimit. Si programma e terminali curris, output ibi apparet. Si officia online uteris, output ad aream dedicatam paginae interretialis mittitur.

Hic est exemplum utendi `dicere`:

```raku
dicere 42;
```

Haec linea potest esse pars maioris programmatis vel totum programma ipsum. Manifestum est quod `42` ad output imprimit.

Nunc cum stringis laboramus:

```raku
dicere 'Salve, Munde!';
```

Ecce, habemus `Salve, Munde!` in scrinio.

Rutina `dicere` plus quam unum argumentum accipere potest, ita plures valores simul imprimere possumus:

```raku
dicere 42, 'Salve, Munde!';
```

Nota tantum quod partes huius outputis ad unam stringam concatenantur: `42Salve, Munde!`, ita melius est spatium inter eos addere. Et hanc quaestionem solvere iam potes, exempli gratia, hoc modo:

```raku
dicere 42, ' ', 'Salve, Munde!';
```

Postquam omnia argumenta imprimit, rutina `dicere` characterem novae lineae ad output addit.

{% include nav.html %}