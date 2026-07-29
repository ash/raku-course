---
title: Розв'язання вправи «Приєднайтеся до вузла»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

## Код

```raku
my $host = 'example.com';

if try IO::Socket::INET.new(:host($host), :port(80)) -> $conn {
    say "connected to $host";
    $conn.close;
}
else {
    say "could not connect to $host";
}
```

🦋 Знайдіть програму у файлі [connect-to-host.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/connections/connect-to-host.raku).

## Вивід

```
connected to example.com
```

## Коментарі

1. `IO::Socket::INET.new(:host, :port)` відкриває з'єднання негайно й кидає виняток, якщо вузол недосяжний.

1. Обгортання його в `try` перетворює цей виняток на `Nil` замість аварії. Конструкція `if … -> $conn` зв'язує сокет, коли з'єднання вдається, і виконує гілку `else`, коли ні, — надійний спосіб спробувати з'єднатися.

1. Щоб побачити гілку `else` в дії, змініть `$host` на ім'я, якого не існує, як-от `'example.comp'`. Тоді пошук у DNS зазнає невдачі — без `try` ви отримали б помилку на кшталт `Failed to resolve host name 'example.comp'`, — але тут `try` перетворює її на `Nil`, і програма спокійно друкує `could not connect to example.comp`.

{% include nav.html %}
