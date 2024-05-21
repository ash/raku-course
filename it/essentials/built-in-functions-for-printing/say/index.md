---
title: La routine say
---

{% include menu.html %}

La routine incorporata `say` esegue le seguenti azioni:

1. Chiama il metodo `gist` sui suoi argomenti.
1. Aggiunge un carattere di nuova linea.
1. Converte il risultato in UTF-8.
1. Lo invia al flusso `STDOUT`.

Dal punto di vista dell'utente, `say` semplicemente stampa il contenuto di una variabile sul terminale e aggiunge la nuova linea.

Il primo passo richiede alcune spiegazioni. Il metodo `gist` è un metodo definito per ogni tipo di dato incorporato, come interi o stringhe. Per tali tipi semplici, il risultato restituito è un valore leggibile che rappresenta l'elemento.

```raku
say 42; # 42
say 'Raku'; # Raku
```

Per dati più complessi, come array o hash, il metodo `gist` aggiunge una certa formattazione.

```raku
my @data = 'alpha', 'beta', 'gamma';
say @data; # [alpha beta gamma]

my %data = alpha => 1, beta => 2, gamma => 3;
say %data; # {alpha => 1, beta => 2, gamma => 3}
```

La routine `say` può essere chiamata sia come funzione che come metodo:

```raku
say 42;
say(42);
42.say;
```

Puoi passare più di un argomento a `say`. I pezzi di output sono uniti senza spazi tra di loro.

```raku
say(100, 500); # 100500
```

{% include nav.html %}