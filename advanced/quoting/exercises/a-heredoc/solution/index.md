---
title: The solution of ’A heredoc‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $name  = 'Anna';
my $item  = 'Raku Book';
my $price = 25;
my $count = 3;

print qq:to/END/;
    Dear $name,
    You ordered $count copies of "$item".
    That comes to {$count * $price} dollars.
    Thank you!
    END
```

🦋 You can find the source code in the file [a-heredoc.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/quoting/a-heredoc.raku).

## Output

```
Dear Anna,
You ordered 3 copies of "Raku Book".
That comes to 75 dollars.
Thank you!
```

## Comments

1. The heredoc starts with `qq:to` rather than `q:to`, so it interpolates. Like a `qq` string, it fills in scalars — `$name`, `$count`, `$item` — *and* runs embedded code: the block `{$count * $price}` computes `3 * 25`, so the total `75` appears inline.

1. The double quotes around `"$item"` are just literal characters here; inside a heredoc there is no delimiter to escape, so they print as written while `$item` still interpolates.

1. The body and the closing `END` are indented by the same four spaces. The indentation of the terminator is stripped from every line, so those four spaces never reach the string — the output starts at the left margin.

1. The heredoc already ends with a newline, so `print` is used rather than `say` to avoid adding a second blank line.

{% include nav.html %}
