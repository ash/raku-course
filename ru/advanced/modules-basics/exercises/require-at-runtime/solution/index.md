---
title: 'Решение: Загрузка во время выполнения'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

Программа `require-import.raku`:

```raku
sub MAIN(Bool :$quiet) {
    if $quiet {
        say 'Silence.';
    }
    else {
        require Greeting <&hello>;
        say hello('Sam');
    }
}
```

🦋 Оба исходных файла можно найти в каталоге [exercises/advanced/modules-basics/require-at-runtime](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/require-at-runtime).

## Вывод

```console
$ raku -I. require-import.raku
Hello, Sam!

$ raku -I. require-import.raku --quiet
Silence.
```

## Комментарии

1. `require` загружает модуль во время выполнения, а не во время компиляции. Сам по себе он
ничего не импортирует — поэтому просто `hello` осталось бы неизвестным именем.

1. Список `<&hello>` предписывает `require` импортировать этот единственный символ, так что
после этой инструкции `hello('Sam')` можно вызывать напрямую, получая `Hello, Sam!`.

1. Ради этого `require` и нужен: поскольку он выполняется во время работы программы, его можно
поместить внутрь `if`. Если задан `--quiet`, эта ветка пропускается и модуль не загружается
вовсе — чего `use`, работающий во время компиляции, избежать бы не смог.

{% include nav.html %}
