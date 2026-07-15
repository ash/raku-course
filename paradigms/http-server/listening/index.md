---
title: Listening for connections
---

{% include menu.html %}

To act as a server, create a socket in **listening** mode with the `:listen` argument, giving the address and port to listen on:

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);
```

`:localhost('127.0.0.1')` listens on your own machine, and `:localport(8080)` is the port clients must connect to. The socket is now waiting, but no client has arrived yet.

To take the next incoming connection, call `.accept`. It **blocks** until a client connects, then returns a fresh socket representing that one conversation:

```raku
my $conn = $listener.accept;
say 'a client connected';
```

The `$listener` keeps listening for more clients, while `$conn` is your channel to talk to this particular one. A real server calls `.accept` in a loop, handling each client as it arrives.

> These examples run on your own machine; connect to them from a browser or another program at `127.0.0.1:8080`.

So a server is just a socket turned around: instead of `:host`/`:port` to dial out, you give `:listen` with `:localhost`/`:localport` to wait for calls in.

{% include nav.html %}
