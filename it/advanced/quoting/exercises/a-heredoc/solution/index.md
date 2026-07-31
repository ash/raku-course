---
title: 'Solution: Un heredoc'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my $name  = 'Anna';
my $item  = 'Raku Book';
my $price = 25;
my $count = 3;

print qq:to/END/;
    Dear $name,
    You ordered $count copies of "$item".
    That comes to {$count * $price} dollars.
    Thank you!
    END
```

🦋 Puoi trovare il codice sorgente nel file [a-heredoc.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/a-heredoc.raku).

## Output

```
Dear Anna,
You ordered 3 copies of "Raku Book".
That comes to 75 dollars.
Thank you!
```

## Commenti

1. L'heredoc inizia con `qq:to` anziché `q:to`, quindi interpola. Come una stringa `qq`, inserisce gli scalari — `$name`, `$count`, `$item` — *e* esegue il codice incorporato: il blocco `{$count * $price}` calcola `3 * 25`, così il totale `75` appare inline.

1. Le virgolette doppie attorno a `"$item"` sono solo caratteri letterali qui; dentro un heredoc non c'è nessun delimitatore da cui fare l'escape, quindi vengono stampate così come sono mentre `$item` viene comunque interpolato.

1. Il corpo e il terminatore di chiusura `END` sono indentati degli stessi quattro spazi. L'indentazione del terminatore viene rimossa da ogni riga, quindi quei quattro spazi non raggiungono mai la stringa — l'output inizia dal margine sinistro.

1. L'heredoc termina già con un carattere di nuova riga, quindi viene usato `print` anziché `say` per evitare di aggiungere una seconda riga vuota.

{% include nav.html %}
