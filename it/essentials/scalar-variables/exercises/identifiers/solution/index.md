---
title: 'Solution: Correggere gli identificatori'
---

{% include menu.html %}

Ci sono più modi per rendere corretti gli identificatori. Alcune opzioni possibili sono mostrate qui:

## Codice

```raku
my $AGE = 30;
my $Name = 'Valdis';
my $Middle'Name = 'C.';
my $address2 = 'Second street, 12';
my $from-to = 'London to Paris';
```

Tutti gli identificatori sono validi, ma probabilmente è meglio evitare nomi con apostrofi se `$non` hai forti ragioni per usarli.

🦋 Puoi trovare il codice sorgente nel file [identifiers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/scalar-variables/identifiers.raku).

## Output

Questo programma non genera alcun output, ma non dovresti ricevere errori quando Rakudo lo compila e lo esegue:

```console
$ raku exercises/scalar-variables/identifiers.raku
```

## Commenti

Elenchiamo i problemi con i nomi originali:

1. Gli spazi non sono ammessi: `$ A G E`.
1. Una variabile ha bisogno di un sigillo: `Name` (è possibile avere variabili senza sigillo in Raku, ma non possono comunque essere dichiarate come `my Name`).
1. Un apostrofo (in realtà un singolo apice) non può iniziare un nome: `$'Middle'Name`.
1. Anche una cifra non può iniziare un nome: `$2address`.
1. Due trattini non possono stare insieme: `$from--to`.

{% include nav.html %}