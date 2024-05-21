---
title: Escaping special characters in Raku strings
---

{% include menu.html %}

Immagina di voler stampare un'etichetta del prezzo e di conservare sia il nome del prodotto che il suo prezzo in variabili scalari?

```raku
my $product = 'Electricity';
my $price = 3.14;
```

Come stampi l'etichetta se il prezzo deve essere in dollari? L'output previsto è: `Electricity costs $3.14`. Un segno di dollaro nelle stringhe tra doppi apici è un indicatore di una variabile da interpolare. Per stampare il carattere `$` stesso, devi eseguirne l'escape:

```raku
say "$product costs \$$price";
```

Ovviamente, puoi usare la concatenazione di stringhe ed evitare l'escape di `$`:

```raku
say $product ~ ' costs $' ~ $price;
```

Questa variante stampa esattamente la stessa stringa, ma l'interpolazione sembra più naturale e facile da leggere. Nota che il carattere `$` non è stato né interpolato né eseguito l'escape in una stringa tra apici singoli: `' costs $'`. Questa è la principale differenza. I caratteri speciali tra apici singoli appaiono così come sono.

Ecco alcuni altri caratteri speciali che hanno un significato speciale nelle stringhe tra doppi apici:

`\$` | Segno di dollaro
`\n` | Nuova riga
`\r` | Ritorno a capo
`\t` | Tabulazione orizzontale
`\"` | Doppio apice
`\\` | Barra rovesciata

Il modo in cui citi la stringa definisce come Raku tratta i caratteri speciali. Considera questi due esempi:

```raku
say 'One\nTwo';
say "Three\nFour";
```

Se esegui questo programma, vedrai che la prima stringa appare così com'è su una singola riga. La seconda stringa è stata divisa in due parti:

    One\nTwo
    Three
    Four

Tra doppi apici, una sequenza speciale `\n` è stata elaborata come un carattere di nuova riga, mentre in una stringa tra apici singoli era una normale sequenza di due caratteri: `\` e `n`.

C'è un'eccezione interessante per `'` e `\`. Tra apici singoli, puoi eseguire l'escape di un apice singolo prefissandolo con un altro `\`:

```raku
say '\''; # '
```

Anche una barra rovesciata deve essere eseguita l'escape se segue un apice singolo:

```raku
say 'a\b\c\\'; # a\b\c\
```

{% include nav.html %}