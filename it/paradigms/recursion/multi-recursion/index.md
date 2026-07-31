---
title: Ricorsione con subroutine multi
translations_gpt:
---

{% include menu.html %}

Finora il caso base è stato una riga _dentro_ la subroutine: un ternario o un `return` anticipato che controlla l'argomento. Raku offre un modo più espressivo di scrivere la stessa cosa. Poiché una subroutine può avere più candidati `multi`, puoi dare al caso base e al passo ricorsivo **subroutine separate proprie** e lasciare che la distribuzione multipla scelga quella giusta per ogni chiamata.

Ricorda il fattoriale. Con `multi`, i suoi due casi diventano due subroutine:

```raku
multi fact(0)  { 1 }
multi fact($n) { $n * fact($n - 1) }

say fact(5); # 120
```

Il primo candidato corrisponde solo quando l'argomento è esattamente `0`: quel letterale nella firma _è_ il caso base. Ogni altra chiamata va al secondo candidato, che moltiplica e ricorre. Quando `fact($n - 1)` raggiunge finalmente `0`, la distribuzione passa al primo candidato e la catena di chiamate si srotola. Il caso base non è più un ramo sepolto nel corpo; è una subroutine che esiste per un unico valore.

Perché `0` e non `1`? Perché ogni passo sottrae uno, qualunque numero di partenza atterra prima o poi esattamente su `0`, e `0!` è definito come `1` — quindi `0` è dove la discesa finisce davvero. Un candidato letterale corrisponde a un unico valore *esatto*, quindi una base `multi fact(1)` calcolerebbe correttamente `fact(1)` ma lascerebbe `fact(0)` cadere in `multi fact($n)` e ricorrere oltre lo zero per sempre. Fermarsi a `0` tiene corretta la subroutine per ogni numero intero non negativo, `fact(0)` compreso.

Questo si legge particolarmente bene quando i casi base sono più di uno. Fibonacci ne ha bisogno di due:

```raku
multi fib(0) { 0 }
multi fib(1) { 1 }
multi fib($n) { fib($n - 1) + fib($n - 2) }

say fib(10); # 55
```

Ogni caso base è un candidato di una riga a sé, e il candidato ricorsivo si occupa di tutto il resto — nessuna condizione annidata.

Un letterale come `0` corrisponde solo a quel valore esatto. Quando il caso base copre un _intervallo_ — «`$n` è `1` o meno» — usa invece un vincolo `where`:

```raku
multi fact($n where * <= 1) { 1 }
multi fact($n)              { $n * fact($n - 1) }

say fact(6); # 720
```

Il candidato vincolato è più specifico, quindi Raku lo prova per primo; il candidato semplice `$n` raccoglie tutto il resto.

Vale ancora la stessa disciplina di prima: ogni percorso ricorsivo deve raggiungere un candidato di caso base. Il fattoriale con il letterale `0`, per esempio, è sicuro solo per i numeri interi non negativi — `fact(-1)` scavalcherebbe `0` e ricorrerebbe per sempre, perché nessun candidato corrisponderebbe mai. Dividere i casi fra subroutine `multi` non toglie il bisogno di un caso base; gli dà soltanto un nome e una casa propria.

{% include nav.html %}
