---
title: Викторина — Цикълът until
---

{% include menu.html %}

## 1

Какво отпечатва тази програма?

```raku
my $n = 0;
until $n > 5 {
    $n++;
}
say $n;
```

{:.quiz-select}
6 | Отговор: (: 4, 5, 6 :)

## 2

Как да направим тази програма да има точно пет итерации?

{:.quiz-code .fill}
. | my $n = 1;
6 5 | until $n == ␣ {
. | &nbsp;&nbsp;&nbsp;&nbsp;say $n;
. | &nbsp;&nbsp;&nbsp;&nbsp;$n++;
. | }

{% include quiz.html %}

{% include nav.html %}