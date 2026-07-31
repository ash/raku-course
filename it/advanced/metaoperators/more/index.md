---
title: Cross, hyper e negati
---

{% include menu.html %}

Oltre alla riduzione e allo zip, Raku dispone di diversi altri meta-operatori. Tre di essi meritano di essere conosciuti qui.

## Cross — `X`

Il meta-operatore cross `X` accoppia **ogni** elemento di una lista con **ogni** elemento di un'altra — il prodotto cartesiano:

```raku
say <a b> X <1 2>; # ((a 1) (a 2) (b 1) (b 2))
```

Come lo zip, può avvolgere un operatore per agire su ogni coppia. `X~` unisce ogni coppia in una stringa, e `X*` moltiplica:

```raku
say <a b> X~ <1 2>;         # (a1 a2 b1 b2)
say (1, 2, 3) X* (10, 100); # (10 100 20 200 30 300)
```

Dove lo zip percorre due liste in parallelo, il cross le combina in ogni modo possibile.

## Hyper — `»…«`

Un meta-operatore hyper applica un operatore a **ciascun elemento** di una lista. L'operatore è racchiuso tra i simboli `»…«` (o nella versione ASCII `>>…<<`). Con due liste funziona elemento per elemento, come lo zip; con un singolo valore da un lato, quel valore viene esteso a tutta la lista:

```raku
say (1, 2, 3) »+» (10, 20, 30); # (11 22 33)
say (1, 2, 3) »*» 2;            # (2 4 6)
```

Le due frecce non devono necessariamente puntare nella stessa direzione, e la loro direzione determina cosa succede quando le liste hanno lunghezze diverse — una punta rivolta **verso** una lista consente a quella lista di essere ripetuta per corrispondere all'altra. Nella scrittura ASCII `<<`/`>>`, le quattro combinazioni sono:

* `>>op<<` — nessun lato si estende; le liste devono avere già la stessa lunghezza, altrimenti si verifica un errore;
* `>>op>>` — la lista **destra** viene ripetuta per corrispondere alla sinistra;
* `<<op<<` — la lista **sinistra** viene ripetuta per corrispondere alla destra;
* `<<op>>` — la lista **più corta** viene ripetuta per corrispondere alla più lunga.

```raku
say (1, 2, 3, 4) <<+>> (10, 20); # (11 22 13 24)  — 10, 20 si ripete come 10, 20, 10, 20
```

Esiste anche una forma unaria, che chiama un metodo su ogni elemento. `>>.uc` converte in maiuscolo ogni stringa:

```raku
say <raku perl>>>.uc; # (RAKU PERL)
```

Le operazioni hyper segnalano anche che il lavoro *può* essere eseguito in parallelo — incontrerai il metodo correlato `.hyper` più avanti, nella [sezione sulla programmazione concorrente](/it/paradigms/hyper-race).

## Negato — `!`

Mettendo `!` davanti a un operatore di confronto si nega il suo risultato. Il familiare `!=` (diverso da) è esattamente questo meta-operatore applicato a `==`, e lo stesso funziona per altri operatori booleani come `eq` e `%%`:

```raku
say 3 != 4;      # True
say 'a' !eq 'b'; # True  — non uguale come stringhe
say 5 !%% 2;     # True  — 5 non è divisibile per 2
```

In breve, `$a !op $b` è solo un modo più ordinato di scrivere `!($a op $b)`.

Questo è intenzionale. A differenza di un linguaggio volutamente minimale come l'Esperanto, che mira a un unico modo regolare di esprimere ogni cosa, Raku è felice di offrirti diverse possibilità — così il negato `!eq` convive con l'operatore dedicato `ne`, e i due significano esattamente la stessa cosa:

```raku
say 'a' ne 'b'; # True — lo stesso test di 'a' !eq 'b'
```

{% include nav.html %}
