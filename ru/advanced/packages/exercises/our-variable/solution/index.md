---
title: 'Решение: Переменная our'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
package Config {
    our $port = 8080;
    my  $secret = 42;
}

say $Config::port;
say $Config::secret.defined;
```

🦋 Исходный код можно найти в файле [our-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/our-variable.raku).

## Вывод

```
8080
False
```

## Комментарии

1. `our $port` становится частью пространства имён `Config`, поэтому доступна извне как `$Config::port`, выводя `8080`.

1. `my $secret` является лексической — приватной для блока пакета, — поэтому она не находится в пространстве имён. Путь `$Config::secret` ничего не находит — неопределённое значение, — поэтому `.defined` возвращает `False`. В этом и заключается разница, которую вносит `our`.

{% include nav.html %}
