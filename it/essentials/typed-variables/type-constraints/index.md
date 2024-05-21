---
title: Vincoli di tipo
---

{% include menu.html %}

Raku è un linguaggio con il cosiddetto sistema di tipi graduale. Nella maggior parte dei casi, non è necessario preoccuparsi di specificare il tipo della variabile. In alcuni casi, tuttavia, potresti voler restringere il tipo per la variabile data, e puoi farlo specificando il tipo come mostrato di seguito:

```raku
my Int $var = 42;
```

Ora, è possibile assegnare un altro valore intero a `$var`, ma un tentativo di inserire una stringa o anche un numero in virgola mobile termina con un'eccezione:

```raku
my Int $var = 42;
$var = '314E-2';
```

Questo programma genera il seguente errore:

    Type check failed in assignment to $var; expected Int but got Str ("314E-2")
      in block <unit> at t.raku line 2

{% include nav.html %}