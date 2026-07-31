---
title: "Catturare l'output"
translations_gpt:
---

{% include menu.html %}

Per leggere ciò che un programma esterno stampa invece di lasciarlo andare sullo schermo, passa `:out` quando lo lanci. Il `Proc` restituito ha allora un handle `.out` da cui puoi leggere:

```raku
my $proc = run 'echo', 'hello', :out;
my $output = $proc.out.slurp(:close);
say $output.chomp; # hello
```

`:out` redirige l'output standard del programma dentro il `Proc`. L'handle `.out` funziona come gli handle di file della sezione precedente, e `.slurp` ne legge tutto in una volta. L'avverbio `:close` è una comoda scorciatoia: dopo la lettura chiude l'handle al posto tuo — lo stesso riordino che facevi esplicitamente con `.close` su un handle di file — così non resta nulla di aperto. Infine `.chomp` toglie il ritorno a capo finale che `echo` aggiunge.

Lo stesso vale con `shell`, il che è comodo per catturare il risultato di una pipeline:

```raku
my $proc = shell 'echo hello | tr a-z A-Z', :out;
say $proc.out.slurp(:close).chomp; # HELLO
```

Puoi catturare anche il flusso degli errori, con `:err` e il corrispondente handle `.err`. Passare sia `:out` sia `:err` tiene i due flussi separati, ciascuno nel proprio handle, così puoi leggerli separatamente:

```raku
my $proc = run 'sh', '-c', 'echo out-line; echo err-line >&2', :out, :err;

say 'stdout: ', $proc.out.slurp(:close).chomp; # stdout: out-line
say 'stderr: ', $proc.err.slurp(:close).chomp; # stderr: err-line
```

Qui il comando della shell stampa una riga sull'output standard e una sull'errore standard (`>&2` vi redirige). Poiché abbiamo chiesto entrambi i flussi, `.out` e `.err` li contengono in modo indipendente: l'output normale del programma non si mescola mai con la sua diagnostica.

Catturare l'output è il modo in cui usi un programma esterno come mattoncino: eseguilo, leggine il risultato e prosegui con quei dati nel tuo programma.

{% include nav.html %}
