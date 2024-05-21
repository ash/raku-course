---
title: Quiz — Variables locales
---

{% include menu.html %}

## 1

¿Qué imprime este programa?

```raku
my $value = 100;

{
    my $value = 1;
    $value *= 2;
    say $value;
}
```

{:.quiz-select}
2 | Respuesta: (: 1, 2, 100, 200 :) | Se usa e imprime una variable local.

## 2

¿Qué imprime este programa?

```raku
my $value = 100;

{
    my $value = 1;
    $value *= 2;
}

say $value;
```

{:.quiz-select}
100 | Respuesta: (: 1, 2, 100, 200 :) | Se modifica una variable local, pero se imprime la variable global.

{% include quiz.html %}

{% include nav.html %}