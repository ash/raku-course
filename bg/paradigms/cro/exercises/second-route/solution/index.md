---
title: 'Решение: Втори маршрут'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

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

🦋 Намерете програмата във файла [second-route.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/cro/second-route.raku).

## Изход

```
Goodbye!
```

## Коментари

1. Блокът `route` може да съдържа колкото маршрута пожелаете; всеки `get` обработва един път.

1. Cro съпоставя пътя на заявката с правилния маршрут, така че `/hello` и `/bye` връщат всеки своя отговор.

1. Както и на теоретичната страница, `.start` се връща незабавно, така че завършващият блок `react` държи програмата жива, докато не натиснете Ctrl-C — тогава `whenever signal(SIGINT)` спира сървъра и прекратява реакцията.

{% include nav.html %}
