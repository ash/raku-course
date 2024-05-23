---
title: Notae de usu Unicodi
---

{% include menu.html %}

Raku assumit omnes fasciculos programmatis tui ut UTF-8 fasciculi servati sint. Ex practica sententia, id significat te non curare de characteribus non-ASCII in, exempli gratia, literalibus stringae. Sed non solum id. Verisimiliter non necesse erit curare si programma tuum fasciculum textus legit qui etiam fasciculus UTF-8 est. Etiam significat longitudinem stringae recte deprehendi ut numerus characterum et non numerus byte-orum. (Postea diligentius inspiciemus.)

Proximum quod scire vis est te posse uti litteris non-Latinis vel non-Anglicis pro identificatoribus. Variabile tuum nominare potes `$ι` loco `$i` si mavis, et compilator id recte interpretabitur.

Raku proprietates Unicodi characterum satis pedantice tractat. Exempli gratia, non solum scit si character sit littera vel digitus, sed etiam recte identificat characteres parium sicut parenthesin vel diversos generis claudendi. In multis casibus, potes eligere diversum genus claudendi pro partibus separatis programmatis. Exempli gratia, potes modificare nostrum programma ‘Hello, World!’ utatur his characteribus non-Latinis pro citando (videbis eos iterum cum grammaticis Raku laborabimus):

```raku
say ｢Hello, World!｣;
```

Quidam operatores in-builti duas formas habent: versionem Unicodi et versionem ASCII. Exempli gratia, quis potest scribere comparationem negatum ut `!=` vel ut `≠`. Idem valet pro operationibus set: exempli gratia, `∈` habet purum ASCII aequivalentem `(elem)`. Vel, est constans in-builta quam potes referre ut `pi` vel `π`.

Cum numeris laborans, potes eligere uti fractionibus in forma `½` loco `0.5`. Vel, quadratum `$x` aestimare ut `$x²` utens charactere superscripto.

Invenies plenam indicem talium parium in sequenti pagina documentorum: 📖 [Symbola Unicode versus ASCII](https://docs.raku.org/language/unicode_ascii).

{% include nav.html %}