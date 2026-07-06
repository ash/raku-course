---
title: The solution of ’Pass a variable to a child‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
my $file = 'notes.txt';
spurt $file, "one\ntwo\nthree\n";

%*ENV<NOTES> = $file;

my $proc = shell 'wc -l < "$NOTES"', :out;
say $proc.out.slurp(:close).trim;

unlink $file;
```

🦋 You can find the source code in the file [read-env.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/read-env.raku).

## Output

```
3
```

## Comments

1. `spurt` creates `notes.txt` with three lines. Setting `%*ENV<NOTES>` to its name puts the file name into the environment that any child program will inherit.

1. The `shell` command inherits that environment, expands `$NOTES` to `notes.txt`, and feeds the file into `wc -l`, which counts its lines. The `< "$NOTES"` redirection keeps the output to just the number `3`, which we capture with `:out` and trim.

1. Finally the clean-up is done back in Raku with `unlink` — no shell needed. Deleting the file is a plain file-system operation, so there is no reason to launch another process for it.

{% include nav.html %}
