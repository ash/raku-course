---
title: Valori predefiniti
---

{% include menu.html %}

Sia i parametri posizionali che quelli nominati possono avere valori predefiniti. Se la funzione ha un valore predefinito per il parametro dato, quel parametro può essere omesso quando si chiama la funzione.

## Parametri posizionali

Un esempio di valore predefinito per una funzione con parametri posizionali:

```raku
sub greet($name = 'World') {
    say "Hello, $name!";
}

greet('Merinda');
greet();
```

La prima chiamata utilizza il nome passato come unico argomento e quindi stampa `Hello, Merinda!`. La seconda chiamata utilizza il valore predefinito e stampa `Hello, World!`.

Se una funzione ha più di un parametro, i valori predefiniti possono essere utilizzati solo alla fine dell'elenco:

```raku
sub f($a, $b, $c = 42, $d = 50) { . . . } # corretto
# sub f($a = 10, $b = 20, $c, $d) { . . . } # SBAGLIATO
```

## Parametri nominati

La stessa sintassi viene utilizzata per impostare valori predefiniti per i parametri nominati:

```raku
sub greet(:$name = 'World') {
    say "Hello, $name!";
}

greet(name => 'Merinda'); # Hello, Merinda!
greet(); # Hello, World!
```

L'ordine dei parametri nominati non importa, quindi ognuno di essi può avere valori predefiniti, anche il primo nell'elenco:

```raku
sub greet(:$greeting = 'Hello', :$name) {
    say "$greeting, $name!";
}

greet(name => 'Alla'); # Hello, Alla!
```

{% include nav.html %}