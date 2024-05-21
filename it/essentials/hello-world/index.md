---
title: Ciao, Mondo! in Raku
---

{% include menu.html %}

Bene, abbiamo imparato le cose essenziali necessarie per parlare con Raku e vedere la risposta, quindi andiamo direttamente al primo vero programma, 'Ciao, Mondo!'.

```raku
say 'Ciao, Mondo!';
```

Prima di imparare le basi delle funzioni, vediamo alcune opzioni diverse che puoi utilizzare in questo programma.

Prima di tutto, puoi mettere le parentesi attorno all'argomento della funzione:

```raku
say('Ciao, Mondo!');
```

In secondo luogo, puoi usare altre funzioni, cioè, `put`, e `print`. Ancora, con o senza parentesi:

```raku
put 'Ciao, Mondo!';

print("Ciao, Mondo!\n");
```

Nota che devi aggiungere manualmente il carattere di nuova riga alla fine del messaggio nel caso di `print`. Ma non preoccuparti, copriremo tutti questi dettagli più avanti.

Prima di andare avanti, lascia che ti mostri un'altra opzione interessante. Puoi chiamare una funzione come un metodo direttamente sulla stringa:

```raku
'Ciao, Mondo!'.say;
```

{% include nav.html %}