---
title: Usare eslif
---

{% include menu.html %}

Finora, abbiamo imparato `if` e `else`. E se volessi organizzare una catena di test? Ci sono almeno due modi per farlo in Raku (in realtà, ce ne sono anche di più).

Una delle possibilità è usare la catena di blocchi `if`, `elsif` e `else`. Nota l'ortografia di `elsif`. Non è né `elseif` né `else if`.

```raku
my $x = prompt 'Inserisci il numero: ';
if $x > 100 {
    say "$x è maggiore di 100.";
}
elsif $x > 50 {
    say "$x è maggiore di 50.";
}
elsif $x > 25 {
    say "$x è maggiore di 25.";
}
else {
    say "$x è 25 o minore.";
}
```

In questo programma, ci sono tre rami e tre test uno dopo l'altro. Non appena una delle condizioni risulta essere `True`, viene eseguito il blocco di codice corrispondente. Se nessun controllo è `True`, viene eseguito il blocco `else`.

Ecco alcuni test del programma che attivano tutti i blocchi:

```console
$ raku t.raku
Inserisci il numero: 120
120 è maggiore di 100.

$ raku t.raku
Inserisci il numero: 75      
75 è maggiore di 50.

$ raku t.raku
Inserisci il numero: 30
30 è maggiore di 25.

$ raku t.raku
Inserisci il numero: 10
10 è 25 o minore.
```

Un modo alternativo è usare la coppia `given` e `when`, che impareremo in futuro.

{% include nav.html %}