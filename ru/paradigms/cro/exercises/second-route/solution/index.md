---
title: 'Решение: Второй маршрут'
translations_gpt:
---

{% include menu.html %}

Вот один из возможных вариантов решения задачи.

## Код

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Server;

my $application = route {
    get -> 'hello' {
        content 'text/plain', 'Hello from Cro!';
    }
    get -> 'bye' {
        content 'text/plain', 'Goodbye!';
    }
}

my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'),
    :port(8080),
    :application($application),
);
$server.start;

say 'Listening on http://127.0.0.1:8080 — press Ctrl-C to stop';

react {
    whenever signal(SIGINT) {
        $server.stop;
        done;
    }
}
```

🦋 Исходный код можно найти в файле [second-route.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/cro/second-route.raku).

## Вывод

```
Goodbye!
```

## Комментарии

1. Блок `route` может содержать сколько угодно маршрутов; каждый `get` обслуживает один путь.

1. Cro сопоставляет путь запроса с нужным маршрутом, поэтому `/hello` и `/bye` возвращают каждый
свой ответ.

1. Как и на теоретической странице, `.start` возвращает управление немедленно, поэтому завершающий
блок `react` удерживает программу в живых, пока вы не нажмёте Ctrl-C: тогда
`whenever signal(SIGINT)` останавливает сервер и завершает реакцию.

{% include nav.html %}
