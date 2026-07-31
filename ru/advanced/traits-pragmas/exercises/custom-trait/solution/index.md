---
title: 'Решение: Пользовательский трейт'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
my %role;

multi sub trait_mod:<is>(Routine:D $r, :$role!) {
    %role{$r.name} = $role;
}

sub login() is role('admin') { }

say %role<login>;
```

🦋 Исходный код можно найти в файле [custom-trait.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/custom-trait.raku).

## Вывод

```
admin
```

## Комментарии

1. Типаж — это `multi sub trait_mod:<is>`, именованный параметр которого `:$role!` активирует его для `is role(...)`. В отличие от типажа, работающего по наличию, этот *получает* аргумент: `is role('admin')` привязывает `'admin'` к `$role`.

1. Тело сохраняет это значение под именем подпрограммы. Чтение `%role<login>` после этого возвращает `admin`. (Типажи выполняются во время компиляции, поэтому запись уже существует к моменту выполнения программы.)

{% include nav.html %}
