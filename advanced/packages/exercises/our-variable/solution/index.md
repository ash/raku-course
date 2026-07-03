---
title: The solution of ’An our variable‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
package Config {
    our $port = 8080;
    my  $secret = 42;
}

say $Config::port;
say $Config::secret.defined;
```

🦋 You can find the source code in the file [our-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/packages/our-variable.raku).

## Output

```
8080
False
```

## Comments

1. `our $port` becomes part of the `Config` namespace, so it is reachable from outside as `$Config::port`, printing `8080`.

1. `my $secret` is lexical — private to the package block — so it is not in the namespace. The path `$Config::secret` finds nothing, an undefined value, so `.defined` is `False`. This is the difference `our` makes.

{% include nav.html %}
