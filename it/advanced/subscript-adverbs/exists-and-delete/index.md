---
title: Exists e delete
---

{% include menu.html %}

L'avverbio `:exists` trasforma un accesso tramite indice in una domanda: c'è un valore a questa chiave o indice? Restituisce un booleano senza recuperare nulla:

```raku
my %h = apple => 1, pear => 2;

say %h<apple>:exists; # True
say %h<plum>:exists;  # False
```

Questo è il modo corretto per verificare la presenza di una chiave, perché leggere semplicemente `%h<plum>` restituirebbe un valore indefinito oppure, a seconda dei dati, nasconderebbe la differenza tra "assente" e "presente ma indefinito".

L'avverbio `:delete` rimuove l'elemento e restituisce il valore che conteneva:

```raku
my %h = apple => 1, pear => 2;

say %h<apple>:delete; # 1
say %h.keys;          # (pear)
say %h;               # {pear => 2}
```

L'elemento `apple` non c'è più, e il valore eliminato `1` viene restituito così da poterlo utilizzare.

Entrambi gli avverbi funzionano anche con gli array, tramite indice:

```raku
my @a = 10, 20, 30;

say @a[1]:exists; # True
say @a[5]:exists; # False

say @a[1]:delete; # 20
say @a[1]:exists; # False
```

Se sei curioso di sapere come apparirà l'array dopo la rimozione di un elemento centrale, ecco la risposta:

```raku
say @a; # [10 (Any) 30]
```

Quindi una notazione unica e coerente ti permette di interrogare e modificare i contenitori direttamente, senza dover ricorrere a metodi separati.

{% include nav.html %}
