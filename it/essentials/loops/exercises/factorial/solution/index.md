---
title: 'Solution: Fattoriale'
---

{% include menu.html %}

Un fattoriale di `N` è un prodotto di numeri interi da 1 fino a e incluso `N`. Ad esempio, il fattoriale di 4 è 1 * 2 * 3 * 4 = 24.

## Codice

```raku
my $n = 8;

my $f = 1;
$f *= $_ for 2..$n;

say $f;
```

🦋 Trova il programma nel file [factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/loops/factorial.raku).

## Output

Esegui il programma alcune volte e prova diversi valori di `$n`.

```console
$ raku exercises/loops/factorial.raku
40320
```

## Commenti

Questo programma utilizza l'operatore `*=`, che è una scorciatoia per la moltiplicazione con l'assegnazione: `$x *= $y` è equivalente a `$x = $x * $y`.

Puoi usare un ciclo 'completo' invece di una forma postfissa:

```raku
my $n = 8;

my $f = 1;
for 2..$n -> $x {
    $f *= $x;
}

say $f;
```

## Più su questo argomento

Torneremo su questo compito diverse volte. In questa parte del corso, risolveremo anche questo problema ricorsivamente.

Nella seconda parte del corso, impareremo a conoscere i cosiddetti operatori di riduzione, che rendono la soluzione banale. Inoltre, ci sarà un modo per definire un operatore personalizzato `!` in modo da poter scrivere `$n!` per calcolare un fattoriale. Infine, ci sarà un'altra occasione per vedere una soluzione interessante quando parleremo della clausola `where`.

{% include nav.html %}