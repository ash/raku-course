---
title: Lambda
translations_gpt:
---

{% include menu.html %}

Una _lambda_ è una funzione senza nome. Hai già incontrato due modi di scriverne una. Il primo è il **[blocco con la freccia](/it/advanced/anonymous-subroutines)**, che elenca i propri parametri dopo la freccia `->`:

```raku
my &square = -> $x { $x * $x };
say square(7); # 49
```

Il secondo è la forma **[Whatever](/it/advanced/whatever)**, dove un `*` sta al posto dell'argomento e l'espressione attorno diventa una funzione a un argomento:

```raku
my &square = * ** 2;
say square(7); # 49
```

Entrambi creano lo stesso genere di cosa: un pezzo di codice che puoi conservare, passare e chiamare. Le lambda brillano come argomenti delle funzioni di ordine superiore, dove dar loro un nome sarebbe solo d'intralcio:

```raku
say (1..5).map(-> $n { $n * $n }); # (1 4 9 16 25)
say (1..5).map(* ** 2);            # (1 4 9 16 25)
```

La forma con la freccia è più chiara quando il corpo è più lungo o prende parecchi parametri; la forma Whatever è splendidamente breve per le espressioni semplici. Sono due grafie della stessa idea: una funzione senza nome.

{% include nav.html %}
