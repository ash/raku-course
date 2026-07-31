---
title: Trait integrati
---

{% include menu.html %}

Un _trait_ viene applicato con la parola chiave `is` subito dopo una dichiarazione. Viene eseguito al momento della compilazione e modifica una proprietà fissa dell'elemento a cui è associato. Raku ne fornisce molti; ne hai già usati alcuni.

Per impostazione predefinita, i parametri di una subroutine sono **in sola lettura** — non è possibile assegnare loro un valore all'interno della routine. Il trait `is copy` fornisce una copia privata e modificabile dell'argomento, che puoi cambiare senza influire sul chiamante:

```raku
sub greet($name is copy) {
    $name = "dear $name";
    say "Hello, $name!";
}

my $who = 'Anna';
greet($who); # Hello, dear Anna!
say $who;    # Anna — the caller's own variable is untouched
```

Il trait `is rw` va oltre: lega il parametro alla variabile del chiamante, quindi una modifica effettuata all'interno della routine è visibile all'esterno:

```raku
sub bump($n is rw) {
    $n++;
}

my $x = 10;
bump($x);
say $x; # 11
```

Senza uno di questi trait, `$n++` causerebbe un errore di compilazione, perché il parametro sarebbe in sola lettura.

Un altro trait comune imposta un valore predefinito:

```raku
my $port is default(8080);
say $port; # 8080
```

Qui `is default` assegna alla variabile un valore di fallback. Ogni trait integrato — `is rw`, `is copy`, `is default` e altri — associa uno specifico comportamento a tempo di compilazione a una dichiarazione. Il prossimo argomento mostra che i trait non sono un insieme chiuso: [puoi definire i tuoi](/it/advanced/traits-pragmas/writing-a-trait).

{% include nav.html %}
