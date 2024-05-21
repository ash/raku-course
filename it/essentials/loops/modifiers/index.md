---
title: while e until come modificatori di istruzione
---

{% include menu.html %}

Sia `while` che `until` possono essere usati nella forma di modificatori di istruzione ([similmente](/it/essentials/conditional-checks/modifiers) a `if` e `unless`).

Considera un esempio che emula la divisione modulo:

```raku
my $x = 10;
$x -= 3 while $x > 2;
say $x; # 1
```

Qui, `-=` è l'operatore che combina sia la sottrazione che l'assegnazione. In questo caso, `$x -= 3` è equivalente a `$x = $x - 3`.

Il modificatore `while` permette all'istruzione `$x -= 3` di ripetersi finché la condizione `$x > 2` rimane `True`. Non appena diventa `False`, il ciclo si interrompe.

Nota che se la condizione è `False` inizialmente, l'istruzione non viene eseguita affatto.

Lo stesso programma può essere riscritto con `until`. Per questo, la condizione deve essere invertita:

```raku
my $x = 10;
$x -= 3 until $x <= 2;
say $x; # 1
```

{% include nav.html %}