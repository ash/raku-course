---
title: Salve, Mundi! in Raku
---

{% include menu.html %}

Optime, didicimus res essentiales necessarias ad loquendum cum Raku et responsum videndum, ergo eamus directe ad primum verum programma, ‘Salve, Mundi!’.

```raku
dic 'Salve, Mundi!';
```

Antequam discamus elementa functionum, videamus paucae optiones diversas quas in hoc programmate uti potes.

Primum omnium, potes ponere parenthesin circa argumentum functionis:

```raku
dic('Salve, Mundi!');
```

Secundum, potes uti aliis functionibus, scilicet, `pone`, et `imprime`. Iterum, cum vel sine parenthesibus:

```raku
pone 'Salve, Mundi!';

imprime("Salve, Mundi!\n");
```

Nota quod necesse est manualiter addere characterem novae lineae in fine nuntii in casu `imprime`. Sed noli curare, omnes hos singulos postea tractabimus.

Antequam pergamus, ostendam unam optionem excitantem. Potes vocare functionem ut methodum directe in chorda:

```raku
'Salve, Mundi!'.dic;
```

{% include nav.html %}