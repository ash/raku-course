---
title: Positional captures
---

{% include menu.html %}

Put a part of the pattern in round brackets `( )` to _capture_ it. After a successful match, each captured piece is available as `$0`, `$1`, and so on, numbered from zero in the order the brackets open:

```raku
if '2025-06' ~~ / (\d+) '-' (\d+) / {
    say $0; # ｢2025｣
    say $1; # ｢06｣
}
```

The first pair of brackets captured the year into `$0`, the second captured the month into `$1`. The text between them — the literal `-` — is matched but not captured.

Each capture is itself a small match object, so you can ask it for its `.Str`, its position, and so on. In a double-quoted string a capture interpolates as its matched text:

```raku
if 'hello world' ~~ / (\w+) ' ' (\w+) / {
    say "$1 $0"; # world hello
}
```

Here, the two captured words are printed in the opposite order, which swaps them.

The captures are also stored in the match variable `$/`, and `$0` is really a short way of writing `$/[0]`. You can work through `$/` directly:

```raku
if '2025-06' ~~ / (\d+) '-' (\d+) / {
    say $/[0];    # ｢2025｣
    say $/[1];    # ｢06｣
    say $/.elems; # 2
}
```

`$/` is the whole match object, indexing it reaches the positional captures, and `.elems` tells you how many there are.

{% include nav.html %}
