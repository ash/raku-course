---
title: The solution of ’Upper-case the path‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $listener = IO::Socket::INET.new(
    :listen,
    :localhost('127.0.0.1'),
    :localport(8080),
);

loop {
    my $conn = $listener.accept;
    my $request = $conn.recv;

    # "GET /hello HTTP/1.0" — the path is the second word; drop the leading '/'
    my $reply = $request.lines.first.words[1].substr(1).uc;

    $conn.print("HTTP/1.0 200 OK\r\nContent-Type: text/plain\r\n\r\n$reply\n");
    $conn.close;
}
```

🦋 You can find the source code in the file [text-response.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/http-server/text-response.raku).

## Output

```
HELLO
```

## Comments

1. `.recv` reads the request. Its first line is `GET /hello HTTP/1.0`; `.words[1]` picks out `/hello`, and `.substr(1)` drops the leading slash to leave `hello`.

1. `.uc` upper-cases it, and that becomes the response body. The reply now depends on what the client asked for — the server is **processing** the request, not returning a fixed string.

1. The whole accept-read-respond block sits inside a `loop`, so the server answers one request after another instead of stopping after the first. Stop it with Ctrl-C.

{% include nav.html %}
