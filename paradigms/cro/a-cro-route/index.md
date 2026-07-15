---
title: A Cro route
---

{% include menu.html %}

A Cro HTTP service is described by a set of _routes_: each route says which URL it handles and what to return. You build them inside a `route` block with the `get` keyword:

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Server;

my $application = route {
    get -> 'hello' {
        content 'text/plain', 'Hello from Cro!';
    }
}

my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'),
    :port(8080),
    :application($application),
);
$server.start;

say 'Listening on http://127.0.0.1:8080/hello — press Ctrl-C to stop';

react {
    whenever signal(SIGINT) {
        $server.stop;
        done;
    }
}
```

Read the route as “a `GET` request for the path `hello` returns the text `Hello from Cro!`”. The `content` function sets both the content type and the body — no manual status lines or `\r\n` in sight. `Cro::HTTP::Server` ties the routes to an address and port, and `.start` begins serving.

One subtlety: `.start` does **not** block — it starts the service on background threads and returns at once, and if the program simply ended there, the server would vanish with it. The closing `react` block is what keeps the program alive, and it is an old friend: `whenever signal(SIGINT)` reacts to the interrupt signal (Ctrl-C on the keyboard) by stopping the server and calling `done`. The reactive tools from earlier in this part are exactly how a Cro program waits, serves, and shuts down cleanly.

> This example needs Cro installed (`zef install cro`). Run it, open `http://127.0.0.1:8080/hello`, and stop the server with Ctrl-C when you are done.

> Do not worry if the server occasionally prints `Cannot write to a closed socket` while you browse. That is not a bug in your code: a client — typically a browser — opened a connection and dropped it before reading the reply, as browsers routinely do with speculative or cancelled requests. Cro notes the vanished client, and the server keeps serving.

A route can take URL segments as parameters, return JSON, and much more, but the shape is always this: declare what each path does, hand the routes to a server, and start it. Compared with the raw socket server of the previous section, Cro removes all the protocol bookkeeping and lets you write only the part that is specific to your service.

This route always says the same thing, though. The next page lets a route read a **parameter** from the URL, so a single route can greet `/hello/Anna` and `/hello/Bob` differently.

{% include nav.html %}
