---
title: Responding to a request
---

{% include menu.html %}

Once a client has connected, you read its request and send a response. For a web browser, the response must be valid HTTP: a status line, optional headers, a blank line, and then the body.

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);

my $conn = $listener.accept;
my $request = $conn.recv;

$conn.print("HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\nHello, web!\n");
$conn.close;
$listener.close;
```

The response mirrors the request format you saw on the client side. `HTTP/1.0 200 OK` is the status line, `Content-Type: text/plain` is a header, the blank line (`\r\n\r\n`) ends the headers, and `Hello, web!` is the body the browser displays.

Run this program, then hit it from another terminal with `curl` (or open `http://127.0.0.1:8080/` in a browser), and it prints the body straight to the screen:

```console
$ curl http://127.0.0.1:8080/
Hello, web!
```

This handles a single request and then stops. To serve many requests, you would wrap the `.accept`-read-respond steps in a loop, and typically handle each connection on its own thread or promise so that slow clients do not block the others. But the essence of a web server is exactly this: accept a connection, read the request, write an HTTP response.

The [next page](/paradigms/http-server/serving-requests) does exactly that — a server that stays alive, looping to answer one request after another instead of stopping after the first.

{% include nav.html %}
