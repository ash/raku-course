---
title: The solution of ’Await many‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my @words = <apple pear plum>;
my @jobs = @words.map(-> $w { start { $w.uc } });
say await @jobs;
```

🦋 You can find the source code in the file [await-many.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/promises/await-many.raku).

## Output

```
(APPLE PEAR PLUM)
```

## Comments

1. `@words.map(-> $w { start { $w.uc } })` turns each word into its own promise, so all three upper-case concurrently. The pointy block names the word `$w`, so every promise captures the right one.

1. `await @jobs` waits for the whole list and hands back the results in their original order, giving `(APPLE PEAR PLUM)`.

{% include nav.html %}
