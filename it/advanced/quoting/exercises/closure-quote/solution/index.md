---
title: 'Solution: Una closure in una stringa q'
---

{% include menu.html %}

Ecco una possibile soluzione.

## Codice

```raku
my $x = 10;
say q:c/$x squared is {$x ** 2}/;
```

🦋 Puoi trovare il codice sorgente nel file [closure-quote.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/closure-quote.raku).

## Output

```
$x squared is 100
```

## Commenti

1. L'avverbio `:c` (closure) attiva l'interpolazione del codice incorporato `{ … }` nella forma altrimenti letterale `q`. Dentro le parentesi graffe, `$x` è codice vero, quindi `{$x ** 2}` viene valutato a `100`.

1. Il `$x` fuori dalle parentesi graffe viene lasciato esattamente come scritto, perché l'avverbio scalare `:s` *non* è abilitato. Questo è il punto centrale degli avverbi per singola funzionalità: ottieni il codice incorporato senza attivare anche l'interpolazione di `$`.

1. Gli avverbi possono essere combinati. Aggiungendo anche `:s`, il `$x` iniziale viene interpolato — entrambe le funzionalità sono ora attive contemporaneamente:

```raku
my $x = 10;
say q:c:s/$x squared is {$x ** 2}/; # 10 squared is 100
```

{% include nav.html %}
