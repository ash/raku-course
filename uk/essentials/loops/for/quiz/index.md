---
title: 'Розуміння циклу `for`'
---

{% include menu.html %}

Для кожної з трьох програм нижче, скажіть, скільки рядків вони виводять.

## 1

```raku
for 1..10 {
    say 'Line';
}
```

{:.quiz-select}
10 | Ваша відповідь:&nbsp; (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 :)

## 2

```raku
for 1..10 -> $n {
    say 'Line';
}
```

{:.quiz-select}
10 | Ваша відповідь:&nbsp; (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 :)

## 3

```raku
for 1..10 -> $a, $b {
    say 'Line';
}
```

{:.quiz-select}
5 | Ваша відповідь:&nbsp; (: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 :)


{% include quiz.html %}

{% include nav.html %}