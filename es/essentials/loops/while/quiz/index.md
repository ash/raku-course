---
title: Quiz — El bucle while
---

{% include menu.html %}

## 1

¿Qué imprime este programa?

```raku
my $n = 10;
while $n {
    $n--;
}
say $n;
```

{:.quiz-select}
0 | Respuesta: (: 0, 1, −1 :)

## 2

¿Cómo evitar que este programa se ejecute infinitamente? Realiza los cambios necesarios en el código.

{:.quiz-code .fill}
. | my $n = 5;
. | my $a = 10;
. | while $n {
n a | &nbsp;&nbsp;&nbsp;&nbsp;say $␣<span>-</span>-;
. | }


{% include quiz.html %}

{% include nav.html %}