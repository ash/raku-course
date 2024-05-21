---
title: 'Понимание цикла `for`'
---

{% include menu.html %}

Для каждой из трех программ ниже укажите, сколько строк они выводят.

## 1

```raku
for 1..10 {
    say 'Line';
}
```

{:.quiz-select}
10 | Ваш ответ:&nbsp; (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 :)

## 2

```raku
for 1..10 -> $n {
    say 'Line';
}
```

{:.quiz-select}
10 | Ваш ответ:&nbsp; (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 :)

## 3

```raku
for 1..10 -> $a, $b {
    say 'Line';
}
```

{:.quiz-select}
5 | Ваш ответ:&nbsp; (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 :)


{% include quiz.html %}

{% include nav.html %}