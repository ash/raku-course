---
title: The solution of ’The domain part‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $email = 'user@example.com';

my $at = $email.index('@');
say $email.substr($at + 1);
```

🦋 You can find the source code in the file [find-domain.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/strings/find-domain.raku).

## Output

```
example.com
```

## Comments

1. `index('@')` returns `4` — the zero-based position of the `@` sign.

1. `substr($at + 1)` starts one character past the `@` and, with no length given, runs to the end of the string, yielding `example.com`.

{% include nav.html %}
