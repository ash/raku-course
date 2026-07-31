---
title: Il modulo Test
translations_gpt:
---

{% include menu.html %}

Importa gli strumenti di test con `use Test`. Il controllo più basilare è `ok`, che ha successo quando la sua condizione è vera. Ogni controllo accetta una descrizione opzionale:

```raku
use Test;

ok 1 == 1, 'one equals one';
ok 2 > 1,  'two is greater';

done-testing;
```

L'esecuzione stampa, nel formato di test standard noto come _TAP_:

```
ok 1 - one equals one
ok 2 - two is greater
1..2
```

Ogni controllo superato viene riportato come `ok` con il suo numero e la descrizione; uno fallito sarebbe `not ok`. Il `1..2` finale è il _piano_, che indica quanti test sono stati eseguiti. La chiamata a `done-testing` alla fine emette quel piano automaticamente.

Quando ci si aspetta un valore specifico, `is` è più chiaro di `ok`, perché in caso di fallimento riporta sia il valore atteso che quello effettivo:

```raku
use Test;

is 2 + 2, 4, 'addition works';

done-testing;
```

Questo stampa `ok 1 - addition works`. Per vedere il reporting in azione, passa a `is` un'aspettativa errata:

```raku
use Test;

is 2 + 2, 5, 'addition works';

done-testing;
```

Ora il controllo fallisce, e l'output spiega esattamente come:

```
not ok 1 - addition works
# Failed test 'addition works'
# at test.raku line 3
# expected: '5'
#      got: '4'
1..1
# You failed 1 test of 1
```

La riga `not ok` segna il fallimento, e le righe diagnostiche sotto di essa mostrano cosa era atteso rispetto a cosa è stato effettivamente ottenuto — ecco perché `is` è più utile di un semplice `ok` quando conta un valore specifico.

`ok`, `is` e `done-testing` sono già sufficienti per scrivere un file di test utile; l'argomento successivo aggiunge [gli altri confronti](/it/advanced/testing/comparisons).

{% include nav.html %}
