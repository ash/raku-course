---
title: Supplies defined outside
---

{% include menu.html %}

Every `whenever` so far has created its supply right there in the header — `whenever Supply.from-list(...)`. That reads well for a quick example, but real programs rarely have their event source on hand at exactly that spot. More often a supply is built somewhere else — returned by a function, produced by a `Supplier`, or handed to you by a socket or a timer — and arrives as a plain variable. A `whenever` is just as happy to watch a named supply:

```raku
my $sensors  = Supply.from-list(18, 21, 19);
my $messages = Supply.from-list('hi', 'bye');

react {
    whenever $sensors {
        say "temperature: $_";
    }
    whenever $messages {
        say "message: $_";
    }
}
```

This prints:

```
temperature: 18
temperature: 21
temperature: 19
message: hi
message: bye
```

So read `whenever $sensors { … }` as “whenever the `$sensors` supply — wherever it came from — emits a value, run this body”. The inline `whenever Supply.from-list(...)` you saw earlier is just the special case where the source happens to be created on the spot.

If this outer-block-with-inner-blocks shape reminds you of something, you are right — the [next page](/paradigms/react-whenever/whenever-vs-when) compares it with `given`/`when`.

{% include nav.html %}
