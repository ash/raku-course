---
title: 'Розв''язання: Вивести дамп структури даних'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my @data = 'Raku', [1, 2, 3], (key => 'value');

dd @data;
say "Structure: { @data.raku }";
```

🦋 Вихідний код можна знайти у файлі [dump-the-structure.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/dd/dump-the-structure.raku).

## Вивід

```
["Raku", [1, 2, 3], :key("value")]
Structure: ["Raku", [1, 2, 3], :key("value")]
```

## Коментарі

1. `dd @data` виводить схоже на код подання вмісту масиву. Воно потрапляє до стандартного потоку помилок.

1. Метод `.raku` повертає те саме подання рядком, який потім вбудовується у звичайне повідомлення через інтерполяцію коду й виводиться за допомогою `say` у стандартний вивід.

1. Тут обидва рядки виглядають однаково, але мандрують різними потоками виводу: перший походить від `dd` (стандартний потік помилок), другий — від `say` (стандартний вивід). Порівняйте:

```console
$ raku t.raku > /dev/null
["Raku", [1, 2, 3], :key("value")]

$ raku t.raku 2&> /dev/null
Structure: ["Raku", [1, 2, 3], :key("value")]
```

{% include nav.html %}
