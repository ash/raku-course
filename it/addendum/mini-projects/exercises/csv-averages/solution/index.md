---
title: 'Soluzione: Punteggi da righe CSV'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
my @lines = 'Anna,90', 'Bob,72', 'Cara,84';
my %score;

for @lines -> $line {
    my ($name, $mark) = $line.split(',');
    %score{$name} = $mark.Int;
}

my $average = ([+] %score.values) / %score.elems;
say "average: $average";

say "above average:";
for %score.sort -> $pair {
    say "  {$pair.key}" if $pair.value > $average;
}
```

🦋 Trova il programma nel file [csv-averages.raku](https://github.com/ash/raku-course/blob/master/exercises/addendum/mini-projects/csv-averages.raku).

## Output

```
average: 82
above average:
  Anna
  Cara
```

## Commenti

1. Dividere ogni riga sulla virgola e assegnare a `($name, $mark)` scompatta i due campi in
una volta; `.Int` trasforma il testo del punteggio in un numero.

1. La media è la somma dei valori diviso il loro numero; chi la supera viene elencato. Qui
la media risulta un intero `82`.

1. Quel ciclo finale si può scrivere come pipeline. `sort` ordina le coppie, `grep`
conserva quelle sopra la media e `map` riduce ogni coppia sopravvissuta al proprio nome —
così il corpo del ciclo non porta alcuna logica, solo la stampa:

    ```raku
    say "  $_" for %score.sort.grep(*.value > $average).map(*.key);
    ```

    Letta da sinistra a destra, dice esattamente ciò che fa: ordina, conserva quelli sopra
la media, prendine i nomi. Ogni stadio è un passo piccolo e autosufficiente, e `*.value` /
`*.key` sono [stelle Whatever](/it/advanced/whatever) che costruiscono al volo un blocco a
un argomento.

{% include nav.html %}
