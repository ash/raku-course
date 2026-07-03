---
title: The solution of ’Build a URL‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @parts = <http :// example .com>;

my $url = [~] @parts;
say $url;
say $url.chars;
```

🦋 You can find the source code in the file [concatenate-a-list.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/metaoperators/concatenate-a-list.raku).

## Output

```
http://example.com
18
```

## Comments

1. The array is written with the angle-bracket quoting form `<...>`, which is the same as `'http', '://', 'example', '.com'`.

1. The reduction meta-operator `[~]` places the string-concatenation operator `~` between all the elements, so `[~] @parts` glues the four pieces into the single string `http://example.com`.

1. Storing the result in `$url` lets us reuse it: `$url.chars` then reports that the assembled URL is `18` characters long.

{% include nav.html %}
