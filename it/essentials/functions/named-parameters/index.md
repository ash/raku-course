---
title: Parametri nominati
---

{% include menu.html %}

In contrasto con i [parametri posizionali](../positional-parameters), i parametri _nominati_ sono riferiti dai loro nomi.

La seguente funzione prende due parametri chiamati `$from` e `$to`.

```raku
sub distance(:$from, :$to) { $from - $to }
```

Ora, per chiamare la funzione, è necessario nominare gli argomenti:

```raku
say distance(from => 30, to => 10); # 20
```

È un errore passare gli argomenti come se fossero posizionali. Ad esempio, una chiamata `distance(30, 10)` genera un errore:

    Troppi posizionali passati; previsti 0 argomenti ma ne sono stati ricevuti 2
        in sub distance at t.raku line 1
        in block <unit> at t.raku line 2

La parte buona è che gli argomenti nominati possono essere elencati in qualsiasi ordine. Le seguenti due chiamate sono totalmente equivalenti:

```raku
say distance(from => 30, to => 10); # 20

say distance(to => 10, from => 30); # 20
```

## Passare variabili

Quando il valore che vuoi passare a una funzione è contenuto in una variabile, il cui nome coincide con il nome del parametro, puoi usufruire di una sintassi speciale che riduce la digitazione:

```raku
my $from = 30;
my $to = 10;
say distance(:$from, :$to); # 20
```

Questo è simile a una chiamata prolissa:

```raku
say distance(from => $from, to => $to); # 20
```

Anche in questo caso, l'ordine non è rigido:

```raku
say distance(:$to, :$from); # 20
```

Se il nome della variabile differisce dal nome del parametro, usa uno dei modi per passare una coppia:

```raku
my $a = 20;
my $b = 10;

say distance(from => $a, to => $b);

# oppure:

say distance(:from($a), :to($b));
```

{% include nav.html %}