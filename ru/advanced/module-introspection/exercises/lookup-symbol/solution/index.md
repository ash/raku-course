---
title: 'Решение: Поиск символа'
translations_gpt:
---

{% include menu.html %}

Вот одно из возможных решений задачи.

## Код

Программа, `lookup.raku`:

```raku
use Circle;

say Circle::{'$pi'};
```

🦋 Оба файла с исходным кодом можно найти в директории [exercises/advanced/module-introspection/lookup-symbol](https://github.com/ash/raku-course/tree/master/exercises/advanced/module-introspection/lookup-symbol).

## Вывод

```console
$ raku -I. lookup.raku
3.14
```

## Комментарии

1. `Circle::` — это stash модуля, и использование имени в качестве ключа — `Circle::{'$pi'}` — извлекает хранящееся под ним значение. Ключ должен включать сигил, так же как и перечисленные имена.

1. Это обращается к тому же значению, что и квалифицированное `$Circle::pi`, но поскольку имя является обычной строкой, оно может быть вычислено во время выполнения, а не прописано в исходном коде.

{% include nav.html %}
