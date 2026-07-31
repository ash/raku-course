---
title: Meta-operatori di riduzione
---

{% include menu.html %}

Un meta-operatore di riduzione si scrive come un operatore normale racchiuso tra parentesi quadre, ad esempio `[+]` o `[*]`. Prende una lista di valori e inserisce l'operatore tra ogni coppia di essi, riducendo l'intera lista a un singolo valore.

Per esempio, `[+]` somma tutti gli elementi di una lista:

```raku
my @data = 3, 5, 7, 9, 11;
say [+] @data; # 35
```

Il costrutto `[+] @data` equivale a scrivere l'operatore a mano:

```raku
say 3 + 5 + 7 + 9 + 11; # 35
```

Qualsiasi operatore infisso adatto funziona allo stesso modo. Con `[*]` si ottiene il prodotto della lista, quindi applicarlo all'intervallo `1..$n` è un modo pratico per calcolare un fattoriale:

```raku
my $n = 5;
say [*] 1..$n; # 120
```

Qui, l'intervallo `1..$n` produce i numeri da 1 a 5, e `[*]` li moltiplica: `1 * 2 * 3 * 4 * 5`, cioè _5!_.

Funziona anche la concatenazione di stringhe. La riduzione `[~]` unisce una lista di stringhe in una sola:

```raku
my @strings = <neun hundert fünf und zwanzig>;
say [~] @strings; # neunhundertfünfundzwanzig
```

Anche gli operatori di confronto possono essere ridotti. `[<]` verifica se i valori sono in ordine strettamente crescente:

```raku
say [<] 1, 2, 3; # True
```

## Riduzione triangolare

Se si inserisce un backslash all'interno delle parentesi quadre, si ottiene una riduzione _triangolare_, che conserva tutti i risultati intermedi invece del solo risultato finale:

```raku
say [\+] 1..5; # (1 3 6 10 15)
```

Ogni elemento del risultato è una somma parziale: `1`, poi `1+2`, poi `1+2+3`, e così via fino alla somma dell'intera lista.

{% include nav.html %}
