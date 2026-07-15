---
title: The solution of ’A second route‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

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

🦋 You can find the source code in the file [second-route.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/cro/second-route.raku).

## Output

```
Goodbye!
```

## Comments

1. A `route` block can hold as many routes as you like; each `get` handles one path.

1. Cro matches the request path to the right route, so `/hello` and `/bye` return their own responses.

1. As on the theory page, `.start` returns immediately, so the closing `react` block keeps the program alive until you press Ctrl-C — `whenever signal(SIGINT)` then stops the server and ends the reaction.

{% include nav.html %}
