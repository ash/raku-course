---
title: 'Розв''язання: Книжка'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
class Book {
    has Str $.title;
    has Str $.author;
}

my $b = Book.new(title => 'Raku', author => 'Larry');
say "{$b.title} by {$b.author}";
```

🦋 Вихідний код можна знайти у файлі [book.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/book.raku).

## Вивід

```
Raku by Larry
```

## Коментарі

1. Кожне з `has $.title` та `has $.author` оголошує атрибут разом з аксесором для читання.

1. Обидва аксесори використано в одному рядку з подвійними лапками. Кожен узято у фігурні дужки — `{$b.title}` та `{$b.author}`, — і це форма інтерполяції коду: те, що всередині дужок, виконується, а його результат вставляється, тож аксесори викликаються, а їхні значення потрапляють у рядок.

1. Обидва атрибути є рядками, тож розумно було б так їх і оголосити.

{% include nav.html %}
