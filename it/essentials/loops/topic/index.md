---
title: Variabile topic
---

{% include menu.html %}

`$_` è una variabile speciale chiamata _variabile topic_.

Considera il ciclo su un intervallo:

```raku
for 1..5 -> $n {
    say $n;
}
```

La variabile `$n` può essere omessa, nel qual caso verrà sostituita con una variabile generata automaticamente `$_`. Il programma è equivalente al seguente:

```raku
for 1..5 {
    say $_;
}
```

Come [ricordi](/it/essentials/hello-world/), è possibile usare `say` come metodo:

```raku
for 1..5 {
    $_.say;
}
```

Chiamare metodi su `$_` non richiede di menzionare la variabile stessa. Quindi, il nostro ciclo può essere ulteriormente semplificato:

```raku
for 1..5 {
    .say;
}
```

{% include nav.html %}