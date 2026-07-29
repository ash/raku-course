---
title: 'Розв''язання: Власний трейт'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my %role;

multi sub trait_mod:<is>(Routine:D $r, :$role!) {
    %role{$r.name} = $role;
}

sub login() is role('admin') { }

say %role<login>;
```

🦋 Вихідний код можна знайти у файлі [custom-trait.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/traits-pragmas/custom-trait.raku).

## Вивід

```
admin
```

## Коментарі

1. Трейт є `multi sub trait_mod:<is>`, чий іменований параметр `:$role!` спрацьовує для `is role(...)`. На відміну від трейта, який лише присутній, цей *отримує* аргумент: `is role('admin')` зв'язує `'admin'` із `$role`.

1. Тіло зберігає це значення під іменем підпрограми. Зчитування `%role<login>` згодом дає `admin`. (Трейти виконуються під час компіляції, тож на момент запуску програми цей запис уже на місці.)

{% include nav.html %}
