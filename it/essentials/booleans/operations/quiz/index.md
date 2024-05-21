---
title: 'Quiz: Operazioni booleane'
---

{% include menu.html %}

In ciascuna delle sezioni sottostanti, seleziona la risposta corretta che il programma stampa.

## 1

Ecco il programma:

```raku
my $value = True && False;
say $value;
```

Cosa stampa?

{:.quiz}
0 | True
1 | False

## 2 

Cosa stampa il secondo programma?

```raku
my $value = True && False || True;
say $value;
```

{:.quiz}
1 | True
0 | False

## 3

Qual è l'output di questo programma?

```raku
my $value = True || False && True;
say $value;
```

{:.quiz}
1 | True
0 | False

{% include quiz.html %}

## Commenti

Nel secondo e terzo programma, abbiamo espressioni con tre valori booleani. Il risultato dipende dall'ordine in cui vengono eseguite le operazioni. L'operatore `&&` ha una precedenza più stretta rispetto a `||`, quindi viene eseguito per primo.

{% include nav.html %}