---
title: The solution of ’Status with a client‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
use Cro::HTTP::Client;

my $response = await Cro::HTTP::Client.get('http://example.com/');
say $response.status;
```

🦋 You can find the source code in the file [status-line.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/cro/status-line.raku).

## Output

```
200
```

## Comments

1. `Cro::HTTP::Client.get` returns a promise — a network request finishes later — so we `await` it.

1. The response object already knows its `.status`, so we get `200` directly, without sending the request text or parsing the reply by hand. Compare this with the raw-socket version: the module does all the protocol work for you.

{% include nav.html %}
