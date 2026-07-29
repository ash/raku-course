---
title: 'Решение: Форматированный текст'
translations_gpt:
---

{% include menu.html %}

Вот возможное решение задачи.

## Код

```raku
=begin pod

=head1 Greeting

Hello, B<world>!

=end pod
```

🦋 Исходный код можно найти в файле [formatted-text.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/pod/formatted-text.raku).

## Вывод

Запустите с `raku --doc`:

```
Greeting

Hello, world!
```

## Комментарии

1. `B<world>` выделяет слово жирным; при отрисовке в виде обычного текста оно отображается как обычный текст, но в более богатых форматах оно будет показано жирным.

1. `raku --doc` отрисовывает Pod без запуска программного кода.

1. Чтобы действительно *увидеть* жирный шрифт, отрисуйте документ в формат, поддерживающий стили. Установите форматтер, например `Pod::To::HTML`, с помощью `zef install Pod::To::HTML`, затем выполните `raku --doc=HTML formatted-text.raku`; слово будет обёрнуто в HTML-элемент `<b>`. Вывод обычного `--doc` в виде текста, напротив, не имеет возможности показать жирный шрифт при записи в файл или конвейер.

{% include nav.html %}
