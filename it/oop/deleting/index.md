---
title: Cancellare file e directory
translations_gpt:
---

{% include menu.html %}

Proprio come `spurt` e `mkdir` creano cose su disco, due routine le rimuovono.

La routine `unlink` cancella un file:

```raku
spurt 'temp.txt', 'scratch data';
say 'temp.txt'.IO.e; # True

unlink 'temp.txt';
say 'temp.txt'.IO.e; # False
```

`unlink` cancella il file indicato. Come le altre routine del file system, ha anche una forma a metodo su un oggetto percorso — `'temp.txt'.IO.unlink`.

La cancellazione è immediata e definitiva: non c'è alcun cestino da cui recuperare. Nota che, una volta sparito il file, devi verificarlo con `.e` (esistenza) invece che con `.f`, perché i test di tipo `.f` e `.d` sollevano un'eccezione quando il percorso non c'è.

La routine `rmdir` rimuove una directory, ma solo se **vuota**:

```raku
mkdir 'reports';
rmdir 'reports';
say 'reports'.IO.e; # False
```

Se la directory contiene ancora qualcosa, `rmdir` non rimuove nulla e la lascia al suo posto. Quindi, per cancellare una directory che contiene file, prima la svuoti e poi la rimuovi:

```raku
mkdir 'reports';
spurt 'reports/jan.txt', 'January';
spurt 'reports/feb.txt', 'February';

.unlink for 'reports'.IO.dir;   # delete every entry
rmdir 'reports';                # now the directory is empty
say 'reports'.IO.e;             # False
```

`'reports'.IO.dir` elenca le voci della directory (l'argomento precedente lo ha trattato), e chiamare `.unlink` su ciascuna le rimuove. Una volta che la directory è vuota, `rmdir` può portarla via. (Questo ciclo piatto presuppone che la directory contenga solo file; un albero con sottodirectory annidate dovrebbe prima entrare ricorsivamente in esse.)

{% include nav.html %}
