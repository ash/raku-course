---
title: Serving many requests
---

{% include menu.html %}

The server on the previous page handled a single request and then stopped. A real server keeps running, answering client after client. Wrap the accept-read-respond steps in a `loop` — and because the loop shares the variables declared around it, you can keep state between requests. Here the server counts its customers and tells each one their number:

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);

my $customer = 0;

loop {
    my $conn = $listener.accept;
    $conn.recv;
    $customer++;

    # a qq:to heredoc makes a tidy template — the variable interpolates straight in
    my $body = qq:to/END/;
        Hello!
        You are customer number $customer.
        Thanks for visiting.
        END

    # send the header first, then the body, as two separate writes
    $conn.print("HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\n");
    $conn.print($body);

    $conn.close;
}
```

`.accept` **blocks** until a client connects, then returns a fresh socket for that one conversation. Because `$customer` lives outside the loop, it survives from one request to the next: the first visitor is customer `1`, the second `2`, and so on. The loop never ends on its own, so the server stays up until you stop it with Ctrl-C.

Two details are worth noticing:

* **The response is written in two parts.** The first `.print` sends the HTTP header — the status line, the content type, and the blank line that ends the headers. The second sends the body. HTTP does not care whether these arrive in one write or several, so splitting them keeps the fixed protocol boilerplate apart from the part that actually changes.

* **The body comes from a template.** `qq:to/END/` is a *heredoc* — a `qq` string that runs to the line `END`. It spans several lines and interpolates `$customer` just like any double-quoted string, which makes it a neat little templating tool for building a reply. (It is one of the [quoting constructs](/advanced/quoting-constructs) from earlier in the course.)

Connect a few times to watch the counter climb:

```console
$ curl http://127.0.0.1:8080/
Hello!
You are customer number 1.
Thanks for visiting.
$ curl http://127.0.0.1:8080/
Hello!
You are customer number 2.
Thanks for visiting.
```

Handling requests one after another like this is the simplest kind of server. A production server would also serve each connection on its own thread or promise, so a slow client cannot hold up the others — but the heart of it is exactly this loop: accept, read, respond, repeat.

{% include nav.html %}
