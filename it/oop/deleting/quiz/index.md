---
title: Quiz — Cancellare file
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
mkdir 'data';
spurt 'data/x.txt', 'hi';
rmdir 'data';
say 'data'.IO.e;
```

{:.quiz}
1 | True
0 | False
0 | un errore
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`rmdir` rimuove solo una directory **vuota**. Qui `data` contiene ancora `x.txt`, quindi `rmdir` non rimuove nulla e lascia la directory al suo posto. `.e` riferisce perciò ancora `True`. Per cancellare la directory dovresti prima rimuoverne il contenuto (per esempio con `.unlink for 'data'.IO.dir`) e poi chiamare `rmdir`.

</div>

{% include nav.html %}
