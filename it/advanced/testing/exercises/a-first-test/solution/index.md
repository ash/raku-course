---
title: 'Solution: Un primo test'
translations_gpt:
---

{% include menu.html %}

Ecco una possibile soluzione del compito.

## Codice

```raku
use Test;

ok 'Raku'.chars == 4, 'Raku has four letters';

done-testing;
```

🦋 Puoi trovare il codice sorgente nel file [a-first-test.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/testing/a-first-test.raku).

## Output

```
ok 1 - Raku has four letters
1..1
```

## Commenti

1. `ok` ha successo perché la condizione `'Raku'.chars == 4` è vera.

1. `done-testing` emette la riga del piano `1..1`, indicando che è stato eseguito un test.

{% include nav.html %}
