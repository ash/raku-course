---
title: Using a client module
---

{% include menu.html %}

Cro is not only for building services — it also ships an HTTP **client** for making requests. The clearest way to meet it is to point it at the very server you built on the previous page. Here both halves run in one program: we start the service, then call it ourselves.

```raku
use Cro::HTTP::Router;
use Cro::HTTP::Server;
use Cro::HTTP::Client;

# the tiny service from the previous page
my $application = route {
    get -> 'hello' { content 'text/plain', 'Hello from Cro!'; }
}
my $server = Cro::HTTP::Server.new(
    :host('127.0.0.1'), :port(8080), :application($application),
);
$server.start;

# now be the client and call it
my $response = await Cro::HTTP::Client.get('http://127.0.0.1:8080/hello');
say await $response.body-text; # Hello from Cro!

$server.stop;
```

`Cro::HTTP::Client.get` returns a promise — fitting, since a network request finishes later — so you `await` it. The response object knows its status, headers, and body; `await $response.body-text` hands back the text the server sent, `Hello from Cro!`. Compare this with the raw socket of the [connections section](/paradigms/connections/sending-receiving): there is no `\r\n`, no status line to parse, no reading in a loop — the client and the server speak to each other in a few plain lines.

> This example needs Cro installed (`zef install cro`).

## When the page is not there

What if you ask for a path the service does not have? The server side is easy: a request that matches no route gets a `404 Not Found` from Cro automatically. On the client side, a failed request **throws** — the error travels with the promise and pops out at `await`, just as you saw with [broken promises](/paradigms/await/awaiting-promises) — so you handle it with the usual exception tools:

```raku
my $response = try await Cro::HTTP::Client.get('http://127.0.0.1:8080/goodbye');
if $! {
    say 'Request failed with status ', $!.response.status; # 404
}
else {
    say await $response.body-text;
}
```

Our service has a `hello` route but no `goodbye`, so this prints `Request failed with status 404`. The exception carries the full response in its `.response`, with the status code and headers there to inspect.

Your own service is just the nearest server there is, though. The next page points the same client at the wider web — **public APIs** that answer with JSON or terminal-ready text.

{% include nav.html %}
