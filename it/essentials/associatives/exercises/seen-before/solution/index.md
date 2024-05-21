---
title: 'Soluzione: Visto prima?'
---

{% include menu.html %}

Questo compito è un classico esempio di utilizzo di un hash per tenere traccia degli elementi. Prima di un ciclo, viene creato un hash `%seen`. All'interno del ciclo, la parola inserita `$word` serve come chiave dell'hash.

## Codice

Ecco la soluzione:

```raku
my %seen;
loop {
    my $word = prompt 'Parola: ';
    if %seen{$word} {
        say %seen{$word} == 1 ?? 'Visto!' !! say "Visto %seen{$word} volte!";
    }
    %seen{$word}++;
}
```

🦋 Trova il programma nel file [seen-before.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/seen-before.raku).

## Output

```console
$ raku exercises/associatives/seen-before.raku
Parola: Io
Parola: mai
Parola: visto
Parola: un
Parola: visto
Visto!
Parola: che
Parola: visto
Visto 2 volte!
Vero
Parola: come
Parola: che
Visto!
Parola: visto
Visto 3 volte!
Vero
Parola: segato
Parola: ^C
```

## Commento

La costruzione `%seen{$word}++` non solo incrementa il valore ma lo crea anche se non esiste ancora. Il processo di creazione è chiamato _autovivificazione_. Nota che non accade quando si legge solo il valore come nella condizione: `if %seen{$word}`.

{% include nav.html %}