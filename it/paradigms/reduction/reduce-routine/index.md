---
title: La routine reduce
translations_gpt:
---

{% include menu.html %}

Quando vuoi ridurre con un'operazione tua invece che con un singolo operatore già nominato, usa la routine `reduce`. Prende un blocco a due argomenti e lo applica lungo l'elenco, portando avanti il risultato corrente:

```raku
say (1..5).reduce(* + *); # 15
```

Il blocco `* + *` ha due stelle [Whatever](/it/advanced/whatever): la prima è il risultato accumulato finora, la seconda è l'elemento successivo. Quindi `reduce` calcola `((((1 + 2) + 3) + 4) + 5)`, cioè `15` — lo stesso di `[+]`, ma scritto come blocco.

Per vedere quei due argomenti al lavoro, dai loro un nome e stampa ogni passo. Un blocco con la freccia restituisce la sua ultima espressione, quindi `$x + $y` è sia ciò di cui il blocco parla sia il valore che restituisce a `reduce`:

```raku
say (1..5).reduce(
    -> $x, $y {
        say "$x + $y";
        $x + $y;
    }
);
```

Questo stampa:

```
1 + 2
3 + 3
6 + 4
10 + 5
15
```

Ciascuna delle prime quattro righe è una chiamata al blocco. `$x` è il risultato accumulato finora e `$y` è l'elemento successivo dell'elenco. La primissima chiamata riceve i primi due valori dell'elenco, `1` e `2`; ogni chiamata seguente riceve come `$x` il totale del passo precedente — `3`, poi `6`, poi `10` — abbinato al numero successivo come `$y`. Il valore del blocco diventa la `$x` della chiamata seguente, e il totale finale, `15`, è ciò che `reduce` restituisce e che `say` stampa sull'ultima riga.

Poiché il blocco può essere qualunque cosa, `reduce` è più generale. Per esempio, costruire un valore passo dopo passo:

```raku
say (1..4).reduce(-> $acc, $x { $acc * 10 + $x }); # 1234
```

Ogni passo moltiplica l'accumulatore per dieci e aggiunge la cifra successiva, trasformando le cifre separate `1, 2, 3, 4` nel numero `1234`.

Come gli altri metodi che prendono un blocco, `reduce` si legge bene con la forma della [chiamata con i due punti](/it/advanced/colon-calls), che lascia cadere le parentesi attorno al blocco:

```raku
say (1..5).reduce: * + *; # 15
```

In breve: `[op]` è la forma rapida per un operatore già nominato, e `reduce` è la forma flessibile per un blocco combinatore qualunque. Entrambi ripiegano un elenco in un unico valore.

{% include nav.html %}
