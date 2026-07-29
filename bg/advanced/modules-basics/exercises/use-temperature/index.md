---
title: Използвайте конвертора
translations_gpt:
---

{% include menu.html %}

## Задача

Даден ви е модул във файл `Temperature.rakumod`:

```raku
unit module Temperature;

sub c-to-f($c) is export {
    $c * 9/5 + 32
}
```

Напишете отделна програма, която използва този модул, за да преобразува температура по Целзий — подадена като аргумент от командния ред — във Фаренхайт и да отпечата резултата.

## Пример

```console
$ raku -I. temperature.raku 100
212
```

## Решение

✅ [Вижте решението](solution)

{% include nav.html %}
