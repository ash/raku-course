---
title: Contesto elemento e lista
---

{% include menu.html %}

Due ulteriori contesti decidono se qualcosa viene trattato come una **lista** di piu valori o come un singolo **elemento**. Questa e la differenza alla base dei sigilli `@` e `$`.

Nel _contesto lista_, un array si espande nei suoi elementi. Un ciclo `for` mette il suo argomento in contesto lista, quindi itera su ciascun elemento:

```raku
my @a = 1, 2, 3;

my $count = 0;
$count++ for @a;
say $count; # 3
```

Nel _contesto elemento_, lo stesso array viene trattato come un singolo valore. Il contestualizzatore `$( … )` forza il contesto elemento, quindi il ciclo ora vede una sola cosa e viene eseguito una volta:

```raku
my @a = 1, 2, 3;

my $count = 0;
$count++ for $(@a);
say $count; # 1
```

Ecco perche assegnare un array a uno scalare lo impacchetta come un singolo elemento piuttosto che copiarne gli elementi: `my $x = @a` mette `@a` in contesto elemento. Nota che quel singolo elemento puo essere un altro contenitore con molti elementi al suo interno:

```raku
my @a = 1, 2, 3;

my $var = @a;
say $var;      # [1 2 3]
say $var.WHAT; # (Array)
```

La variabile `$var` ora contiene un singolo oggetto (essendo un contenitore scalare), che e un `Array`. Puoi facilmente verificarlo trattando `$x` come una sorta di riferimento ad array (come lo chiameresti in altri linguaggi):

```raku
say $var[1]; # 2
```

Il contestualizzatore corrispondente `@( … )` fa l'opposto, forzando il contesto lista.

Esiste anche il _contesto sink_ — il contesto di un'istruzione il cui valore viene scartato, come una riga che esiste solo per il suo effetto collaterale. Quando un valore finisce in contesto sink senza nulla di utile da fare, Raku puo avvisare di un "useless use", che e un utile suggerimento che hai dimenticato di usare un risultato.

Il sigillo che scegli (`$` contro `@`) e in realta una scelta di contesto, e i contestualizzatori `$( )` e `@( )` ti permettono di sovrascriverlo dove necessario.

{% include nav.html %}
