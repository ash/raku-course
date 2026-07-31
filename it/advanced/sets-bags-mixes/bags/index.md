---
title: Bag e mix
---

{% include menu.html %}

Un set ricorda solo _se_ un valore è presente. A volte si vuole sapere anche _quante volte_ compare. A questo serve il `Bag`: mantiene un conteggio per ogni valore.

Si crea un bag con la routine `bag`. I valori ripetuti non vengono ridotti — vengono contati:

```raku
my $b = bag(<a b a c a>);
say $b<a>; # 3
say $b<b>; # 1
```

Interrogando il bag per un valore con il subscript `< >` si ottiene quante volte quel valore è stato inserito. Il metodo `total` restituisce la somma di tutti i conteggi:

```raku
say bag(<a b a c a>).total; # 5
```

Un `Mix` è la stessa idea del bag, con la differenza che i conteggi (chiamati _pesi_) possono essere frazionari anziché numeri interi. Per assegnare pesi espliciti, si associa ogni valore al suo peso e si converte la lista con `.Mix`:

```raku
my $m = (flour => 2.5, sugar => 0.75).Mix;
say $m<flour>; # 2.5
say $m.total;  # 3.25
```

La consultazione di un peso con `< >` e la somma con `total` funzionano esattamente come per un bag — solo che i numeri non devono essere interi. Qui `total` somma i pesi `2.5` e `0.75`, ottenendo `3.25` — è la somma dei pesi, non un conteggio dei valori. I bag e i mix sono utili ogni volta che si ha bisogno di tracciare quantità — ad esempio, contare quante volte ogni parola compare in un testo, o assegnare pesi alle opzioni.

{% include nav.html %}
