---
title: Opening a socket
---

{% include menu.html %}

A _socket_ is a connection between two programs over a network. Raku’s core class for TCP sockets is `IO::Socket::INET`, and you need nothing extra installed to use it.

To connect to a remote server, create a socket with the host and port you want to reach:

```raku
my $conn = IO::Socket::INET.new(:host('raku.org'), :port(80));
say 'connected';
$conn.close;
```

`IO::Socket::INET.new` opens the connection straight away. Port `80` is the standard port for HTTP, so this connects to the web server at `raku.org`. When you are finished, `.close` releases the connection.

> This example needs a working network connection to run. When it connects successfully it prints `connected`.

The same class is used in two modes: as a **client**, connecting out to a server as shown here, and as a **server**, listening for connections coming in (which you will see later). For now, the idea to take away is that `IO::Socket::INET.new(:host, :port)` gives you a live two-way channel to another machine.

{% include nav.html %}
