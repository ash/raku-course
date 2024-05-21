---
title: Il blocco else
---

{% include menu.html %}

Un blocco `if` può essere seguito da un blocco `else`, che viene eseguito quando la condizione non è soddisfatta.

```raku
my $t = 36.6;
if 35.5 < $t < 37.5 {
    say 'You are fine.';
}
else {
    say 'Call a doctor, maybe?';
}
```

Il blocco `else` non può essere utilizzato da solo (esiste un'alternativa migliore chiamata [`unless`](../unless), che verrà introdotta tra poco).

{% include nav.html %}