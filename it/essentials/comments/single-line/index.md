---
title: Commenti su una singola linea
---

{% include menu.html %}

La forma più semplice di un commento è un commento su una singola linea. Inizia con il carattere `#` e continua fino alla fine della linea corrente.

```raku
my $name; # Questa variabile viene utilizzata per memorizzare il nome dell'utente
$name = prompt 'Qual è il tuo nome? ';
say $name; # Ora vediamo il nome
```

Nota che uno shebang come `#!/usr/bin/env raku` nella prima linea di codice è anche un commento per Raku, mentre può essere letto ed eseguito dalla shell.

{% include nav.html %}