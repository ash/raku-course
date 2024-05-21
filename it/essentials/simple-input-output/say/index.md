---
title: Output con say
---

{% include menu.html %}

La funzione `say` (o una subroutine, o semplicemente routine) stampa i valori sul flusso di output standard, `STDOUT`. Se stai eseguendo il programma da un terminale, l'output appare lì. Se stai utilizzando servizi online, l'output viene inviato a un'area dedicata della pagina web.

Ecco un esempio di utilizzo di `say`:

```raku
say 42;
```

Questa linea può essere parte di un programma più grande o essere l'intero programma stesso. Ovviamente stampa `42` sull'output.

Lavoriamo ora con le stringhe:

```raku
say 'Hello, World!';
```

Voilà, abbiamo ottenuto `Hello, World!` sullo schermo.

La routine `say` può accettare più di un argomento, quindi possiamo stampare più valori in una volta sola:

```raku
say 42, 'Hello, World!';
```

Nota solo che le parti di questo output sono concatenate in una singola stringa: `42Hello, World!`, quindi è meglio aggiungere uno spazio tra di esse. E dovresti essere in grado di risolvere questo problema ormai, ad esempio, in questo modo:

```raku
say 42, ' ', 'Hello, World!';
```

Dopo aver stampato tutti gli argomenti, la routine `say` aggiunge un carattere di nuova linea all'output.

{% include nav.html %}