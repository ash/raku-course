---
title: 'Розв''язання: Зв''яжіть скаляр'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $source = 1;
my $bound := $source;
my $copy = $source;

$source = 9;
say $bound;
say $copy;
```

🦋 Вихідний код можна знайти у файлі [bind-a-scalar.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/ordered-containers/bind-a-scalar.raku).

## Вивід

```
9
1
```

## Коментарі

1. Зв'язування через `:=` робить `$bound` іще одним іменем того самого контейнера, що й `$source`, а не копією. Тож зміна `$source` видима через `$bound`, який виводить `9`.

1. Звичайне присвоєння через `=` копіює значення в окремий контейнер, тож пізніша зміна на `$copy` не впливає, і він досі виводить `1`.

1. Побачити це поруч — і є весь сенс: `:=` розділяє контейнер, `=` дублює значення.

{% include nav.html %}
