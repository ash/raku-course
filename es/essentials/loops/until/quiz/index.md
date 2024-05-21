---
title: Quiz — El bucle until
---

{% include menu.html %}

## 1

¿Qué imprime este programa?

```raku
my $n = 0;
until $n > 5 {
    $n++;
}
say $n;
```

{:.quiz-select}
6 | Respuesta: (: 4, 5, 6 :)

## 2

¿Cómo hacer que este programa tenga precisamente cinco iteraciones?

{:.quiz-code .fill}
. | my $n = 1;
6 5 | until $n == ␣ {
. | &nbsp;&nbsp;&nbsp;&nbsp;say $n;
. | &nbsp;&nbsp;&nbsp;&nbsp;$n++;
. | }

{% include quiz.html %}

{% include nav.html %}