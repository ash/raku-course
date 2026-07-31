---
title: Phaseres
translations_gpt:
---

{% include menu.html %}

_Phaser_ est specialis copia quae automatice currit in momento particulari in vita programmatis, non ubi apparet in codice fonte. Phaserem non vocas; tantum dicis _quando_ eius codex currere debet, nominando copiam.

Phaseres frequentissimi stadia programmatis totius signant:

* `BEGIN` currit quam primum, dum programma adhuc compilatur;
* `INIT` semel currit in principio exsecutionis, ante codicem principalem;
* `END` semel currit in fine, postquam codex principalis finitus est.

Programma sequens hos phaseres inter sententias ordinarias ponit. Nota quod output non sequitur ordinem linearum in archivo:

```raku
say 'main body';
BEGIN say 'BEGIN';
END say 'END';
INIT say 'INIT';
```

Programma imprimit:

```
BEGIN
INIT
main body
END
```

`BEGIN` primus currit, dum compilatio fit. Deinde, tempore exsecutionis, `INIT` currit ante corpus principale. Corpus principale deinde imprimit, et `END` currit ultimus, ubicumque scriptus sit.

Usus communis `END` est summarium imprimere vel aliquid purgare ante exitum programmatis, dum `BEGIN` utilis est pro opere quod ante omnia fieri debet.

{% include nav.html %}
