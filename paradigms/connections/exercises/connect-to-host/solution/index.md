---
title: The solution of ’Connect to a host‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $host = 'example.com';

if try IO::Socket::INET.new(:host($host), :port(80)) -> $conn {
    say "connected to $host";
    $conn.close;
}
else {
    say "could not connect to $host";
}
```

🦋 You can find the source code in the file [connect-to-host.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/connections/connect-to-host.raku).

## Output

```
connected to example.com
```

## Comments

1. `IO::Socket::INET.new(:host, :port)` opens the connection immediately, and throws if the host is unreachable.

1. Wrapping it in `try` turns that exception into a `Nil` instead of a crash. The `if … -> $conn` binds the socket when the connection succeeds and runs the `else` branch when it does not — the robust way to attempt a connection.

1. To see the `else` branch in action, change `$host` to a name that does not exist, such as `'example.comp'`. The DNS lookup then fails — without the `try` you would get an error like `Failed to resolve host name 'example.comp'` — but here the `try` turns it into `Nil`, so the program calmly prints `could not connect to example.comp`.

{% include nav.html %}
