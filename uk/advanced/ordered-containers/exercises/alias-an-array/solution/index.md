---
title: 'Розв''язання: Псевдонім масиву'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my @original = 10, 20, 30;
my @alias := @original;

@original.push(40);
say @alias;
```

🦋 Вихідний код можна знайти у файлі [alias-an-array.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/alias-an-array.raku).

## Вивід

```
[10 20 30 40]
```

## Коментарі

1. Зв'язування `@alias := @original` робить `@alias` іще одним іменем того самого контейнера-масиву, а не його копією.

1. Цього разу зміну зроблено через `@original`, і вона є структурною — `push` додає елемент. Оскільки обидва імені є тим самим контейнером, `@alias` теж бачить новий елемент. Ці два імені цілком взаємозамінні: байдуже, яким із них ви читаєте чи змінюєте масив.

{% include nav.html %}
