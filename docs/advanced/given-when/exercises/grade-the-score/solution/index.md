---
title: The solution of ’Life stage from age‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $age = 30;

given $age {
    when $_ < 0 { say 'invalid' }
    when 0..12  { say 'child' }
    when 13..19 { say 'teenager' }
    when 20..64 { say 'adult' }
    default     { say 'senior' }
}
```

🦋 You can find the source code in the file [grade-the-score.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/given-when/grade-the-score.raku).

## Output

```
adult
```

## Comments

1. This solution mixes two kinds of `when`. The first is a *condition*, `$_ < 0` (where `$_` is the topic set by `given`), which weeds out invalid ages; the rest are *ranges* that group the valid ages into stages.

1. Order matters. The negative-age guard comes first, so it runs before any range is tried. The value `30` falls into `20..64`, so the program prints `adult`.

1. The `default` block covers every age of 65 and above, which is not captured by any of the listed ranges.

You could turn this around and let `default` catch the *invalid* input instead. List every recognised stage — including `senior` as the condition `$_ >= 65` — and treat anything left over (such as a negative age) as invalid:

```raku
given $age {
    when 0..12    { say 'child' }
    when 13..19   { say 'teenager' }
    when 20..64   { say 'adult' }
    when $_ >= 65 { say 'senior' }
    default       { say 'invalid' }
}
```

Here `default` is a genuine “none of the above” branch. Which version reads better is a matter of taste: put the guard first when the invalid case is the exception, or make it the fallback when the valid stages are all clearly enumerated.

{% include nav.html %}
