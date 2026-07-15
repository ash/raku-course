---
title: Sending and receiving
---

{% include menu.html %}

Once a socket is open, you exchange data through it. Send text with `.print`, and read what comes back with `.recv`:

```raku
my $conn = IO::Socket::INET.new(:host('raku.org'), :port(80));

$conn.print("GET / HTTP/1.0\r\nHost: raku.org\r\n\r\n");
my $response = $conn.recv;

$conn.close;
say $response.lines.first;
```

This sends a minimal HTTP request and reads the server’s reply into `$response`. The first line of a reply from a web server is its status line.

> This example needs a working network connection. When run, it prints the reply’s status line. Because `raku.org` redirects plain HTTP to the secure HTTPS site, that line is a redirect, such as `HTTP/1.1 308 Permanent Redirect`, rather than `200 OK`. The special domain `example.com` does not redirect, so aiming the same request there prints a plain `HTTP/1.1 200 OK` instead.

Two details matter when talking to servers. First, network protocols usually separate lines with `\r\n` (carriage return plus newline), not a plain `\n`, which is why the request is written with `\r\n`. Second, `.recv` returns whatever data has arrived so far; for larger replies you read in a loop until the connection closes.

Sending bytes and receiving bytes is all a socket really does. Everything else — HTTP, and the higher-level tools in the coming sections — is built on top of this simple send-and-receive.

{% include nav.html %}
