---
title: The solution of ’Sort into two arrays‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @small;
my @big;

react {
    whenever Supply.from-list(4, 42, 7, 100, 15) {
        if $_ > 10 { @big.push($_) }
        else       { @small.push($_) }
    }
}

say @small;
say @big;
```

🦋 You can find the source code in the file [react-collect.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/react-whenever/react-collect.raku).

## Output

```
[4 7]
[42 100 15]
```

## Comments

1. The `whenever` body is ordinary code, so it can do more than collect — here it **decides**, routing each value to `@big` or `@small` as it arrives. Within each array the values keep their stream order.

1. The react block waits until the stream is done, so both arrays are complete before they are printed.

{% include nav.html %}
