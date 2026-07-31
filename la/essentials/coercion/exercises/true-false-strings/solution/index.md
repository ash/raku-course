---
title: 'Solutio: Veri et falsi catenae'
---

{% include menu.html %}

Hoc exercitium simile est [praecedenti](../../true-false-numbers), sed hoc tempore, munus paulo difficilius est. Plures sunt 'suspecti' fili qui tamquam `Falsi` tractari possunt. Exploramus eos.

```raku
say ?'';

say ?' ';
say ?'        ';

say ?"\n";

say ?'0';
say ?'0.0';
```

Ex omnibus his, solum filum vacuum tamquam `False` convertitur. Omnes alii fili, etiam illi qui tantum spatia vel characterem explicitum `0` continent, `Veri` fiunt.

🦋 Totum programma cum exemplo supra inveni potes in archivo [true-false-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/coercion/true-false-strings.raku).

{% include nav.html %}