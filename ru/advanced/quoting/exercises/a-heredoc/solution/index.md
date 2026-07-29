---
title: 'Решение: Heredoc'
translations_gpt:
---

{% include menu.html %}

Вот одно из возможных решений задачи.

## Код

```raku
my $name  = 'Anna';
my $item  = 'Raku Book';
my $price = 25;
my $count = 3;

print qq:to/END/;
    Dear $name,
    You ordered $count copies of "$item".
    That comes to {$count * $price} dollars.
    Thank you!
    END
```

🦋 Исходный код можно найти в файле [a-heredoc.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/a-heredoc.raku).

## Вывод

```
Dear Anna,
You ordered 3 copies of "Raku Book".
That comes to 75 dollars.
Thank you!
```

## Комментарии

1. Heredoc начинается с `qq:to`, а не с `q:to`, поэтому он интерполирует. Как и строка в `qq`, он подставляет скаляры — `$name`, `$count`, `$item` — *и* выполняет встроенный код: блок `{$count * $price}` вычисляет `3 * 25`, поэтому итоговая сумма `75` появляется в тексте.

1. Двойные кавычки вокруг `"$item"` здесь — просто обычные символы; внутри heredoc'а нет разделителя, который нужно экранировать, поэтому они выводятся как есть, а `$item` по-прежнему интерполируется.

1. Тело и закрывающий `END` имеют одинаковый отступ в четыре пробела. Отступ терминатора удаляется из каждой строки, поэтому эти четыре пробела не попадают в строку — вывод начинается от левого края.

1. Heredoc уже заканчивается переводом строки, поэтому используется `print`, а не `say`, чтобы не добавить вторую пустую строку.

{% include nav.html %}
