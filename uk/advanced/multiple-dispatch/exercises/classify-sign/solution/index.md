---
title: 'Розв''язання: Класифікуйте величину'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
multi sub size(Int $n where $n.abs < 10)  { 'small' }
multi sub size(Int $n where $n.abs < 100) { 'medium' }
multi sub size(Int $n)                    { 'large' }

say size(7);
say size(30);
say size(-250);
```

🦋 Вихідний код можна знайти у файлі [classify-sign.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/multiple-dispatch/classify-sign.raku).

## Вивід

```
small
medium
large
```

## Коментарі

1. Усі три кандидати приймають один `Int`, тож без речень `where` вони конфліктували б. Умови на перших двох роблять їх різними, а третій є всеохопним.

1. Речення `where` перевіряють `$n.abs`, тож результат визначає сама лише величина, а знак ігнорується. `size(7)` збігається з першим кандидатом (`small`), тоді як `size(-250)` має абсолютне значення `250`, яке не проходить жодної з умов і провалюється до всеохопного (`large`).

1. Кандидати перевіряються від найспецифічнішого до найзагальнішого — саме в тому порядку, в якому їх тут записано.

{% include nav.html %}
