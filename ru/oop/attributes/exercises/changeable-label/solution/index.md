---
title: 'Решение: Изменяемая метка'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
class Label {
    has $.text is rw;
}

my $l = Label.new(text => 'draft');
$l.text ~= ' (revised)';
say $l.text;
```

🦋 Исходный код можно найти в файле [changeable-label.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/changeable-label.raku).

## Вывод

```
draft (revised)
```

## Комментарии

1. Трейт `is rw` заставляет аксессор возвращать изменяемый контейнер, поэтому он может стоять
слева от присваивания.

1. Раз запись разрешена, с ним работает и составной оператор `~=`: `$l.text ~= ' (revised)'`
читает текущий текст, приписывает суффикс и записывает результат обратно — и всё это через
один и тот же аксессор.

{% include nav.html %}
