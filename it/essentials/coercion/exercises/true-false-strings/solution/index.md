---
title: 'Solution: Stringhe vere e false'
---

{% include menu.html %}

Questo esercizio è simile a [quello precedente](../../true-false-numbers), ma questa volta, il compito è un po' più complicato. Ci sono più stringhe 'sospette' che possono essere trattate come `False`. Esploriamole.

```raku
say ?'';

say ?' ';
say ?'        ';

say ?"\n";

say ?'0';
say ?'0.0';
```

Di tutte queste, solo la stringa vuota viene considerata `False`. Tutte le altre stringhe, anche quelle che contengono solo spazi o un carattere esplicito `0`, diventano `True`.

🦋 Puoi trovare il programma completo con l'esempio sopra nel file [true-false-strings.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/coercion/true-false-strings.raku).

{% include nav.html %}