---
title: Quiz — Chiudere un channel
translations_gpt:
---

{% include menu.html %}

Cosa stampa il programma seguente?

```raku
my $c = Channel.new;
$c.send(1);
$c.send(2);
$c.close;
say $c.list.elems;
```

{:.quiz}
0 | 0
0 | 1
1 | 2
0 | aspetta per sempre

{% include quiz.html %}

<div class="extended-explanation">

`.list` raccoglie ogni valore ancora nel channel e finisce perché il channel è chiuso. Sono stati inviati due valori, quindi `.elems` è `2`. Senza il `.close`, `.list` aspetterebbe per sempre.

</div>

{% include nav.html %}
