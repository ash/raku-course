---
title: Variabili speciali integrate
---

{% include menu.html %}

Raku predefinisce un insieme di variabili per te. La maggior parte di esse sono _dinamiche_ (il twigil `*`), quindi — come hai visto con le [variabili dinamiche](/it/advanced/special-variables/dynamic-variables) — puoi leggerle ovunque e persino sovrascriverle per un determinato scope. Ecco quelle che userai piu' spesso.

## Stream standard

L'input e l'output passano attraverso tre variabili dinamiche: `$*OUT` (standard output), `$*ERR` (standard error) e `$*IN` (standard input). `say` e `print` scrivono su `$*OUT`; per inviare testo allo standard error, chiama il metodo su `$*ERR`:

```raku
$*OUT.say('normal output'); # goes to standard output
$*ERR.say('a diagnostic');  # goes to standard error
```

Poiche' queste sono dinamiche, reindirizzare `$*OUT` in un blocco invia l'output di tutto cio' che viene chiamato all'interno di quel blocco alla nuova destinazione — senza modificare nessuna parte di quel codice.

## Il programma e il suo processo

Alcune variabili descrivono il programma in esecuzione:

```raku
say $*PROGRAM-NAME; # the path of the script being run
say $*PID;          # the process id of this program
say $*CWD;          # the current working directory
```

I loro valori cambiano ad ogni esecuzione, quindi qui non viene mostrato un output fisso.

## Riga di comando e ambiente

Gli argomenti e l'ambiente arrivano in due contenitori gia' pronti:

* `@*ARGS` — la lista degli argomenti da riga di comando (gli stessi che riceve una subroutine `MAIN`)
* `%*ENV` — le variabili d'ambiente, come hash

```raku
say @*ARGS.elems; # how many arguments were passed
say %*ENV<HOME>;  # the value of the HOME environment variable
```

Queste variabili predefinite ti evitano di configurare manualmente le stesse informazioni. E poiche' sono dinamiche, cercate attraverso lo stack delle chiamate, qualsiasi variabile predefinita `$*` puo' essere sovrascritta per uno scope esattamente come una variabile `$*` creata da te.

Oltre a queste variabili dinamiche, Raku ha anche le variabili predefinite di compilazione con il twigil `?` — `$?FILE` e `$?LINE` — che hai gia' incontrato nella pagina sui [twigil](/it/advanced/special-variables/twigils).

{% include nav.html %}
