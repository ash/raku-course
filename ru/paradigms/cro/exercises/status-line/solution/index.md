---
title: 'Решение: Статус через клиент'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
use Cro::HTTP::Client;

my $response = await Cro::HTTP::Client.get('http://example.com/');
say $response.status;
```

🦋 Исходный код можно найти в файле [status-line.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/cro/status-line.raku).

## Вывод

```
200
```

## Комментарии

1. `Cro::HTTP::Client.get` возвращает промис — сетевой запрос завершается позже, — поэтому его
дожидаются через `await`.

1. Объект ответа уже знает свой `.status`, поэтому мы сразу получаем `200`, не отправляя текст
запроса и не разбирая ответ вручную. Сравните это с вариантом на «сыром» сокете: модуль делает всю
протокольную работу за вас.

{% include nav.html %}
