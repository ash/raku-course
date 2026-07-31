---
title: Flussi standard
translations_gpt:
---

{% include menu.html %}

Ogni programma ha tre _flussi standard_ che lo collegano al suo ambiente: l'output standard, l'errore standard e l'input standard. Raku li rende disponibili attraverso tre variabili speciali: `$*OUT`, `$*ERR` e `$*IN`.

Hai scritto sull'output standard fin dall'inizio: `say` e `print` mandano il loro testo a `$*OUT`.

```raku
say 'Hello'; # goes to standard output
```

I messaggi diagnostici e di errore restano separati, sull'errore standard, così non si mescolano con l'output vero del programma. La routine `note` scrive lì:

```raku
note 'Something looks wrong'; # goes to standard error
```

Questa separazione è utile perché i due flussi possono essere rediretti in modo indipendente: puoi per esempio salvare l'output di un programma in un file e continuare comunque a vedere i suoi messaggi di errore sullo schermo.

Puoi anche scrivere direttamente sui flussi. Sia `$*OUT` sia `$*ERR` sono _handle_ con i propri metodi `say` e `print`:

```raku
$*OUT.say('a normal line');
$*ERR.say('a diagnostic line');
```

Il terzo flusso, `$*IN`, è l'input standard. Lo hai incontrato indirettamente attraverso `prompt`, che ne legge una riga. Torneremo alla lettura dell'input quando guarderemo gli [handle di file](/it/oop/file-handles), perché `$*IN` è un handle proprio come un file aperto.

{% include nav.html %}
