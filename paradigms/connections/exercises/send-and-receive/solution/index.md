---
title: The solution of ’Send and receive‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $conn = IO::Socket::INET.new(:host('example.com'), :port(80));

$conn.print("HEAD / HTTP/1.0\r\nHost: example.com\r\n\r\n");
my $response = $conn.recv;

$conn.close;
say $response.lines.first;
```

🦋 You can find the source code in the file [send-and-receive.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/connections/send-and-receive.raku).

## Output

```
HTTP/1.1 200 OK
```

## Comments

1. `.print` sends the request; the protocol lines end in `\r\n`. A `HEAD` request asks the server for just the status line and headers, so the reply is small.

1. `.recv` reads the reply, and `.lines.first` takes its first line — the HTTP status line.

{% include nav.html %}
