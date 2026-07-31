---
title: Methodos dum exsecutione addere
translations_gpt:
---

{% include menu.html %}

MOP non solum ad inspectionem servit — genus etiam **mutare** potest dum programma currit. Metamethodus `.^add_method` novam methodum classi addit:

```raku
class Empty {
}

Empty.^add_method('greet', method { 'hi' });

say Empty.new.greet; # hi
```

Classis `Empty` sine ullis methodis definitur. `Empty.^add_method('greet', …)` deinde methodum nomine `greet` adfigit, ut anonymam `method { … }` datam. Ex illo puncto omne obiectum `Empty` ad `.greet` respondet, ac si in classem scripta esset.

Haec est vera metaprogrammatio: metaobiectum classis `Empty` iubetur novam methodum producere. Idem protocollum subest facultatibus quibus iam usus es — conceptualiter, cum `class`, `role`, `has` vel `method` scribis, compilator genus tuum per methodos MOP quales `.^add_method` et `.^add_attribute` tuo nomine aedificat.

«Conceptualiter», quia hoc exemplar linguae est, non promissum de aliquo uno compilatore. MOP est id quibus terminis systema obiectorum *definitur*; utrum data implementatio omnem declarationem revera per illas metamethodos ducat — et utrum id facere observare possis — ab illa implementatione pendet. Eadem de causa has metamethodos ipsum *vocare* ab implementatione pendet: quas compilator patefaciat, et quomodo exacte se gerant, differre possunt, itaque codex qui `.^add_method` et similia petit non in omni Raku eodem modo currat.

Methodos tempore exsecutionis addere instrumentum potens et raro necessarium est. Pleraque programmata id numquam petunt, sed id est quod systema obiectorum Raku apertum reddit: regulae classium ipsae terminis MOP scriptae sunt, itaque eas extendere potes. Ad codicem cotidianum, metamethodi inspectionis argumenti superioris sunt ea MOP pars qua revera uteris.

{% include nav.html %}
