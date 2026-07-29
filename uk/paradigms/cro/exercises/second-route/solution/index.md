---
title: Розв'язання вправи «Другий маршрут»
translations_gpt:
---

{% include menu.html %}

Ось одне з можливих розв'язань задачі.

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

🦋 Знайдіть програму у файлі [second-route.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/cro/second-route.raku).

## Вивід

```
Goodbye!
```

## Коментарі

1. Блок `route` може містити скільки завгодно маршрутів; кожен `get` обробляє один шлях.

1. Cro зіставляє шлях запиту з потрібним маршрутом, тож `/hello` та `/bye` повертають кожен свою відповідь.

1. Як і на теоретичній сторінці, `.start` повертається негайно, тож завершальний блок `react` тримає програму живою, аж поки ви не натиснете Ctrl-C, — тоді `whenever signal(SIGINT)` спиняє сервер і завершує реакцію.

{% include nav.html %}
