---
title: La routine di stampa
---

{% include menu.html %}

La routine incorporata `print` fa quanto segue:

1. Converte i suoi argomenti in una stringa chiamando il metodo `Str` su di essi.
1. Li invia al flusso `STDOUT`.

Per i tipi di dati semplici, l'output generato da `print` è simile all'output di [`say`](../say) senza il carattere di nuova linea alla fine.

```raku
print 42;
print 'Raku';
```

Questi valori vengono stampati uno dopo l'altro. Non c'è una nuova linea alla fine dell'intero output, inoltre.

```console
$ raku t.raku
42Raku
```

Per i dati aggregati, il risultato può differire da quello che vedi con `say`. Ad esempio, prova con array e hash:

```raku
my @data = 'alpha', 'beta', 'gamma';
print @data;

print "\n"; # Per separare le parti

my %data = alpha => 1, beta => 2, gamma => 3;
print %data;
```

Ecco come appare l'output:

```console
$ raku t.raku
alpha beta gamma
alpha	1
beta	2
gamma	3
```

La routine `print` può anche essere chiamata come un metodo:

```raku
my @data = 'alpha', 'beta', 'gamma';
@data.print;

"\n".print;
```

{% include nav.html %}