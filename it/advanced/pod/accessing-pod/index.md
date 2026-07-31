---
title: Accedere al Pod
translations_gpt:
---

{% include menu.html %}

Oltre a renderizzarlo, un programma può leggere il proprio Pod **dall'interno**, mentre è in esecuzione. La variabile speciale `$=pod` contiene il Pod del file corrente come una lista di oggetti blocco, così un programma può ispezionare la propria documentazione:

```raku
=begin pod
=head1 Hello
A paragraph.
=end pod

say $=pod.elems;      # 1
say $=pod[0].name;    # pod
```

`$=pod` qui ha un solo elemento — il blocco `pod` — e si può navigare al suo interno per leggere intestazioni, paragrafi ed elementi come dati. È su questo che si basano gli strumenti che generano documentazione, o che verificano che sia presente. Che venga renderizzata con `--doc` o letta tramite `$=pod`, la documentazione è una parte di prima classe del programma, non un commento da eliminare.

{% include nav.html %}
