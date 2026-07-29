---
title: 'Решение: Подключитесь к хосту'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

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

🦋 Исходный код можно найти в файле [connect-to-host.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/connections/connect-to-host.raku).

## Вывод

```
connected to example.com
```

## Комментарии

1. `IO::Socket::INET.new(:host, :port)` открывает соединение немедленно и бросает исключение,
если хост недостижим.

1. Обёртка в `try` превращает это исключение в `Nil` вместо аварийного завершения. Конструкция
`if … -> $conn` связывает сокет при успешном соединении и выполняет ветку `else`, когда соединения
нет, — надёжный способ попытаться подключиться.

1. Чтобы увидеть ветку `else` в действии, поменяйте `$host` на несуществующее имя, например
`'example.comp'`. Тогда не сработает разрешение DNS — без `try` вы получили бы ошибку вроде
`Failed to resolve host name 'example.comp'`, — но здесь `try` превращает её в `Nil`, и программа
спокойно печатает `could not connect to example.comp`.

{% include nav.html %}
