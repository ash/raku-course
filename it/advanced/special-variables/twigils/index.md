---
title: Twigil
---

{% include menu.html %}

Un _twigil_ e' un carattere posto tra il sigillo e il nome di una variabile. Non cambia il nome; cambia il comportamento della variabile e il modo in cui viene risolta. I piu' comuni sono:

* `*` — una variabile **dinamica**, ad es. `$*OUT`, cercata attraverso lo stack delle chiamate
* `?` — un valore **in fase di compilazione** fornito dal compilatore, ad es. `$?FILE`, `$?LINE`
* `!` — un attributo **privato** di un oggetto, ad es. `$!balance`
* `.` — un attributo raggiunto tramite il suo metodo accessore, ad es. `$.name`

Hai gia' incontrato diversi di questi senza nominare il twigil: `$*OUT` e `$*IN` (dinamici), e `$!`/`$.` nella [parte sugli oggetti](/it/oop).

Le variabili `?` fornite dal compilatore vengono riempite durante la compilazione del programma:

```raku
say $?LINE; # the line number of this statement
say $?FILE; # the path of this source file
```

Ogni twigil segnala a colpo d'occhio un tipo diverso di variabile, cosi' leggendo `$*foo` sai immediatamente che e' dinamica, e `$?foo` che e' una costante in fase di compilazione. Il prossimo argomento esamina le [variabili dinamiche](/it/advanced/special-variables/dynamic-variables) in dettaglio, poiche' si comportano in modo molto diverso dalle variabili lessicali che hai usato finora.

{% include nav.html %}
