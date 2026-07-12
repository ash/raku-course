---
title: The solution of ’Mask the digits‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $orig = 'PIN 1234';
say S:g/\d/#/ given $orig;
say $orig;
```

🦋 You can find the source code in the file [mask-digits.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/substitution/mask-digits.raku).

## Output

```
PIN ####
PIN 1234
```

## Comments

1. The uppercase `S///` does the same job as `s///` but **returns a new string** instead of changing the variable in place. With `:g` it replaces every digit `\d` with a `#` in the returned copy. It is applied to `$orig` with `given`, which sets the string as the topic.

1. Printing `$orig` afterwards shows it still holds `PIN 1234` — unlike `s///`, the original was left untouched.

{% include nav.html %}
