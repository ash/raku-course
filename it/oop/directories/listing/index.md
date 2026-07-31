---
title: Elencare una directory
translations_gpt:
---

{% include menu.html %}

La routine `dir` restituisce le voci di una directory, ciascuna come oggetto percorso. Il loro ordine non è fissato, quindi è comune ordinare il risultato per avere un output prevedibile.

```raku
mkdir 'box';
spurt 'box/a.txt', '';
spurt 'box/b.txt', '';

for dir('box').sort -> $entry {
    say $entry.basename;
}
```

Questo stampa i nomi dei file nella directory `box`, in ordine:

```
a.txt
b.txt
```

Ogni voce è un oggetto percorso completo; il metodo `basename` dà solo il nome finale, senza la parte di directory. A un oggetto percorso puoi porre tutte le domande di prima — `.f`, `.d`, `.e` — così puoi, per esempio, percorrere una directory e selezionarne solo i file.

{% include nav.html %}
