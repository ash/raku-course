---
title: The solution of ’Number the lines‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
spurt 'words.txt', "apple\nbanana\ncherry\n";

my $n = 0;
for 'words.txt'.IO.lines -> $line {
    $n++;
    say "$n: $line";
}
```

🦋 You can find the source code in the file [shout-the-lines.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/file-handles/shout-the-lines.raku).

## Output

```
1: apple
2: banana
3: cherry
```

## Comments

1. `spurt` writes the three words to the file, separated by newlines.

1. `.IO.lines` yields the lines one by one, without their trailing newlines. We keep a counter `$n` that we bump on each pass, so every line is printed together with its position in the file.

{% include nav.html %}
