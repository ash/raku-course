---
title: Coppie
---

{% include menu.html %}

Una coppia è una struttura dati che mantiene un nome e un valore. Formano un oggetto solido che può essere memorizzato in una variabile scalare. Ecco un esempio di come creare una coppia:

```raku
my $pair = name => 'Anna';
```

Il tipo della variabile `$pair` è `Pair`:

```raku
say $pair.WHAT; # (Pair)
```

È possibile accedere al nome e al valore separatamente utilizzando i metodi corrispondenti `key` e `value`:

```raku
say $pair.key; # name
say $pair.value; # Anna
```

Una caratteristica importante delle coppie è che sono oggetti immutabili. Ciò significa che non puoi assegnare un nuovo valore o dare un nuovo nome a una coppia esistente. Ma puoi assegnare una coppia completamente nuova alla stessa variabile, ovviamente:

```raku
my $pair = name => 'Anna';
$pair = name => 'John';
say $pair.value; # John
```

## Sottoscrizione

C'è un altro metodo per leggere il valore di una coppia. Puoi sottoscriverla con il nome della sua chiave tra parentesi angolari. Ecco come fare:

```raku
say $pair<name>;
```

Nota che non è necessario citare il nome della chiave se non contiene spazi. Se lo fa, le cose diventano un po' più rigorose:

```raku
my $pair = 'employee name' => 'Julie Madelon';
say $pair{'employee name'};
```

Non perdere di vista il fatto che questa volta vengono utilizzate le parentesi graffe.

{% include nav.html %}