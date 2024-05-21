---
title: Тест — Цикълът while
---

{% include menu.html %}

## 1

Какво отпечатва тази програма?

```raku
my $n = 10;
while $n {
    $n--;
}
say $n;
```

{:.quiz-select}
0 | Отговор: (: 0, 1, −1 :)

## 2

Как да предотвратим тази програма да се изпълнява безкрайно? Направете необходимите промени в кода.

{:.quiz-code .fill}
. | my $n = 5;
. | my $a = 10;
. | while $n {
n a | &nbsp;&nbsp;&nbsp;&nbsp;say $␣<span>-</span>-;
. | }


{% include quiz.html %}

{% include nav.html %}