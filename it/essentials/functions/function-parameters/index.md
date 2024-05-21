---
title: Parametri delle funzioni
---

{% include menu.html %}

È il momento di passare alcuni dati a una funzione. Essa può prendere parametri elencati tra parentesi immediatamente dopo il nome della funzione.

```raku
sub greet($name) {
    say "Hello, $name!";
}
```

Ora puoi usare la funzione e passare diversi argomenti ad essa:

```raku
greet('Alla');
greet('Karl');
```

Le due chiamate della stessa funzione produrranno ora risultati diversi:

```console
$ raku t.raku
Hello, Alla!
Hello, Karl!
```

%%tipblock

## Parametro o argomento

Questi termini sono spesso usati in modo intercambiabile. Si riferiscono entrambi alla 'stessa cosa', ma la guardano da prospettive diverse.

* Un parametro è ciò che la funzione si aspetta.
* Un argomento è ciò che passi alla funzione.

Nell'esempio sopra, `$name` è il parametro della funzione, mentre `'Alla'` e `'Karl'` sono i suoi argomenti.

%%/tipblock

## Più parametri

Una funzione può prendere più di un singolo parametro. In questo caso, elencali tutti separati da virgole:

```raku
sub add($x, $y) {
    say $x + $y;
}

add(10, 20); # 30
```

## Nessun parametro

È un caso valido quando la funzione non prende alcun parametro. In questo caso, puoi aggiungere una coppia di parentesi vuote o ometterle completamente, come abbiamo fatto all'inizio di questa sezione.

```raku
sub greet() {
    say 'Hello, World!';
}

greet();
```

## Firma

L'elenco dei parametri di una funzione è chiamato _firma_.

{% include nav.html %}