---
title: A route with a parameter
---

{% include menu.html %}

The route on the previous page always returned the same text. Real services vary their reply by what the client asks for, and the simplest way is to read part of the **URL** as a parameter. In a Cro route, a segment after the fixed path becomes a variable in the signature:

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Server;

my $application = route {
    get -> 'hello', $name {
        content 'text/plain', "Hello, $name!";
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

The interesting part is the signature `-> 'hello', $name`: it matches a path of two segments — the literal `hello`, then anything, captured into `$name`. The rest of the program is the same server scaffolding as on the previous page. A request for `/hello/Anna` binds `$name` to `Anna` and returns `Hello, Anna!`; `/hello/Bob` returns `Hello, Bob!`. One route, a different answer for every name:

```console
$ curl http://127.0.0.1:8080/hello/Anna
Hello, Anna!
```

> This example needs Cro installed (`zef install cro`).

Parameters are how a route stays small while handling a whole family of paths. A route can take several segments, match only certain shapes, read query strings, and return JSON — but it all builds on this one idea: name the varying parts of the URL in the signature, and use them in the response.

Paths that match no route at all are not your problem: Cro answers them with `404 Not Found` on its own. And when a route *matches* but cannot deliver — the name looks up nothing, say — call `not-found` inside the handler to send that same 404 deliberately. The **method** is checked just as strictly as the path: this block only declares `get`, so a `HEAD` or `POST` request to the same path is answered with `405 Method Not Allowed`. You can see it yourself with `curl -I`, which sends `HEAD` rather than `GET`.

A service is only half the picture, though — something has to call it. The next page turns Cro around and uses its **client** to talk to a server like the ones you have just built.

{% include nav.html %}
