---
title: Розв'язання вправи «Стан через клієнт»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
use Cro::HTTP::Client;

my $response = await Cro::HTTP::Client.get('http://example.com/');
say $response.status;
```

🦋 Знайдіть програму у файлі [status-line.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/cro/status-line.raku).

## Вивід

```
200
```

## Коментарі

1. `Cro::HTTP::Client.get` повертає обіцянку — мережевий запит завершується пізніше, — тож ми робимо `await`.

1. Об'єкт відповіді вже знає свій `.status`, тож ми отримуємо `200` безпосередньо, не надсилаючи тексту запиту й не розбираючи відповіді вручну. Порівняйте це з версією на сирому сокеті: модуль робить усю протокольну роботу за вас.

{% include nav.html %}
