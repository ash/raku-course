---
title: Numeri razionali in Raku
---

{% include menu.html %}

I numeri razionali sono una caratteristica unica di Raku. Il tipo di dato `Rat` rappresenta tali numeri.

Internamente, i numeri razionali sono frazioni con due parti intere: numeratore e denominatore. Quindi, puoi facilmente presentare numeri come 1/3 senza perdere precisione.

Ci sono alcuni modi per scrivere un numero `Rat` in un programma in Raku:

```raku
my $x = 1/2;
my $y = <2/3>;
```

Nota che la barra qui è parte della notazione. Non è un operatore di divisione, quindi `1/2` non significa che dividi 1 per 2. Tuttavia, nella stampa, i razionali sono mostrati come numeri decimali o interi:

```raku
say 1/2; # 0.5
say 3/4; # 0.75
```

La parte della linea dopo il simbolo `#` è un commento ed è ignorata dal compilatore. Tali commenti saranno usati nel corso per mostrare l'output del programma.

## Forma decimale

È importante rendersi conto che quando scrivi il numero in forma decimale, ad esempio, `0.5`, Raku crea un numero `Rat` in quel momento. Non è un intero, ma non è nemmeno un numero a virgola mobile (`float` o `double` in altre lingue). È ancora un numero razionale!

Considera il seguente esempio:

```raku
say 0.1 + 0.2 - 0.3;
```

Se un linguaggio di programmazione utilizza l'aritmetica a virgola mobile per questi calcoli, il risultato non sarà uguale a 0. Il sito web [0.30000000000000004.com](https://0.30000000000000004.com) fornisce un elenco esaustivo di esempi in cui l'aritmetica a virgola mobile non dà un risultato atteso.

Ma Raku stampa un esatto `0`. Questo accade perché tratta i numeri `0.1`, `0.2` e `0.3` come numeri razionali e li mantiene come `1/10`, `2/10` e `3/10` internamente. Eseguilo dalla riga di comando per confermarlo:

```console
$ raku -e 'say 0.1 + 0.2 - 0.3'
0
```

## Forme Unicode

È anche possibile utilizzare caratteri Unicode che rappresentano le frazioni, come `½` o `¼` o `¾`. Probabilmente, non è sempre facile digitarli con la tastiera, ma queste frazioni sono esattamente gli stessi valori delle loro versioni ASCII scritte come frazione o come numero decimale:

`½` | `1/2` | `<1/2>` | `0.5`
`¼` | `1/4` | `<1/4>` | `0.25`
`¾` | `3/4` | `<3/4>` | `0.75`

Con alcune frazioni, come `1/3`, hai meno opzioni, `⅓` o `<1/3>`, poiché la forma decimale richiederebbe un numero infinito di cifre.

{% include nav.html %}