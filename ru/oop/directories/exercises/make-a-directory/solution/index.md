---
title: 'Решение: Создайте каталог'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
mkdir 'reports';
spurt 'reports/data.txt', 'x';

say 'reports'.IO.d;
say 'reports/data.txt'.IO.e;
```

🦋 Исходный код можно найти в файле [make-a-directory.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/directories/make-a-directory.raku).

## Вывод

```
True
True
```

## Комментарии

1. `mkdir` создаёт каталог, а `.IO.d` подтверждает, что `reports` — это каталог.

1. Поскольку каталог теперь существует, в него можно записать файл, указав путь, включающий имя
каталога, — `reports/data.txt`. Проверка `.e` для этого пути подтверждает, что файл создан
внутри нового каталога.

1. Порядок здесь важен: `spurt` **не** создаёт недостающие каталоги за вас. Запись
в `reports/data.txt` до того, как появился каталог `reports`, завершится ошибкой вроде
`Failed to open file … : No such file or directory`. Именно предварительное создание каталога —
как здесь делает `mkdir` — и позволяет записи пройти. Удобно, что `mkdir` заодно создаёт
и все недостающие промежуточные каталоги, поэтому вложенный путь вроде `mkdir 'reports/2026'`
строит всю цепочку за один вызов.

{% include nav.html %}
