---
title: 'Soluzione: Passate un handle a una funzione'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
sub log-line($fh, $message) {
    $fh.say($message);
}

my $fh = open 'log.txt', :w;
log-line($fh, 'started');
log-line($fh, 'working');
log-line($fh, 'done');
$fh.close;

print slurp 'log.txt';
```

🦋 Trova il programma nel file [pass-a-handle.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/pass-a-handle.raku).

## Output

```
started
working
done
```

## Commenti

1. L'handle restituito da `open` è solo un valore contenuto in `$fh`, quindi può essere passato a `log-line` come argomento, come una stringa o un numero qualunque. Dentro la subroutine, `$fh.say` scrive attraverso quello stesso handle aperto.

1. Poiché l'handle resta aperto per tutte e tre le chiamate, ogni `log-line` aggiunge un'altra riga allo stesso file. `close` scarica poi tutto e `slurp` rilegge le tre righe.

1. È questo che rende componibili gli handle: una funzione può accettare un handle e scriverci (o leggerci) senza curarsi di quale file punti — è il chiamante a deciderlo quando apre il file.

{% include nav.html %}
