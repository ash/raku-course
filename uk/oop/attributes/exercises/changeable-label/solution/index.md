---
title: 'Розв''язання: Змінювана позначка'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
class Label {
    has $.text is rw;
}

my $l = Label.new(text => 'draft');
$l.text ~= ' (revised)';
say $l.text;
```

🦋 Вихідний код можна знайти у файлі [changeable-label.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/changeable-label.raku).

## Вивід

```
draft (revised)
```

## Коментарі

1. Трейт `is rw` змушує аксесор повертати записуваний контейнер, тож той може стояти ліворуч від присвоєння.

1. Оскільки він записуваний, складений оператор `~=` теж на ньому працює: `$l.text ~= ' (revised)'` читає поточний текст, приєднує суфікс і зберігає результат назад — і все це через той самий аксесор.

{% include nav.html %}
