---
title: The solution of ’Await a supply‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $sensor = Supply.from-list(18, 21, 19, 23);

my $last = await $sensor;
say "final reading: $last";
```

🦋 You can find the source code in the file [await-a-supply.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-a-supply.raku).

## Output

```
final reading: 23
```

## Comments

1. Awaiting a supply blocks until the stream has emitted everything it has — the same “wait until complete” that `await` gives for a promise — and its value is the **last** thing the supply emitted, `23`.

1. This suits a stream where only the end state matters, like the latest sensor reading. If you need *every* value, that is a job for `.tap` or a `react` block, as in the previous sections.

{% include nav.html %}
