---
title: The solution of ’City and country‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
if 'London-UK' ~~ / $<city>=(\w+) '-' $<country>=(\w+) / {
    say ~$<city>;
    say ~$<country>;
}
```

🦋 You can find the source code in the file [city-and-country.raku](https://github.com/ash/raku-course/blob/master/exercises/regexes/captures/city-and-country.raku).

## Output

```
London
UK
```

## Comments

1. `$<city>=( … )` and `$<country>=( … )` give the two captures names instead of numbers.

1. After the match they are read back as `$<city>` and `$<country>`, which reads more clearly than `$0` and `$1` would.

1. The `~` prefix puts each capture into string context so it prints as plain text; without it, `say $<city>` would show the match object as `｢London｣`.

{% include nav.html %}
