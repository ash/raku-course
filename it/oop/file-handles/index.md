---
title: Handle di file
translations_gpt:
---

{% include menu.html %}

Leggere o scrivere un file intero in una volta sola è comodo, ma a volte vuoi percorrere un file una riga alla volta, oppure tenere un file aperto mentre ci scrivi ripetutamente. Per questo si usa un _handle di file_.

Il modo più semplice di leggere un file riga per riga non richiede nemmeno un handle esplicito: il metodo `lines` su un oggetto percorso dà le righe una alla volta, pronte per un ciclo `for`:

```raku
spurt 'words.txt', "one\ntwo\nthree\n";

for 'words.txt'.IO.lines -> $line {
    say $line.uc;
}
```

Ogni `$line` è una singola riga, senza il suo ritorno a capo finale. Il programma stampa:

```
ONE
TWO
THREE
```

Per scrivere su un file attraverso un handle, aprilo con `open` e il flag `:w` (write), usa i metodi `say` o `print` dell'handle e chiudilo con `close` quando hai finito:

```raku
my $fh = open 'out.txt', :w;
$fh.say('first line');
$fh.say('second line');
$fh.close;
```

Chiudere l'handle garantisce che tutto ciò che hai scritto venga scaricato su disco. Leggere riga per riga, come sopra, è il modo consueto di trattare file troppo grandi per essere slurpati in memoria tutti insieme.

{% include nav.html %}
