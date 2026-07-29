---
title: 'Розв''язання: Сплощіть частини'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my @first = 1, 2;
my @second = 3, 4, 5;

my @all = flat(@first, @second);
say @all;
say @all.elems;
```

🦋 Вихідний код можна знайти у файлі [flatten-the-parts.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/flatten-the-parts.raku).

## Вивід

```
[1 2 3 4 5]
5
```

## Коментарі

1. Запис `my @all = @first, @second` _не_ дав би плоского масиву — він створив би вкладений масив із двох масивів, `[[1 2] [3 4 5]]`.

1. Підпрограма `flat` зливає елементи обох масивів в одну плоску послідовність, яку потім зберігають у `@all`. Результат має п'ять елементів.

{% include nav.html %}
