---
title: Conversione dei tipi utilizzando i costruttori
---

{% include menu.html %}

Un metodo simile è costruire una nuova istanza di un oggetto del tipo richiesto chiamando il suo costruttore, il cui nome è il nome del tipo. Ad esempio:

```raku
my $n = Int('1.23E4');
say $n;      # 12300
say $n.WHAT; # (Int)
```

Qui, la stringa contenente un numero in virgola mobile viene convertita in un intero.

{% include nav.html %}