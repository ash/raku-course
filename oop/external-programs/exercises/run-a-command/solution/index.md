---
title: The solution of ’Run a command‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
run 'echo', 'home:', '$HOME';
```

🦋 You can find the source code in the file [run-a-command.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/run-a-command.raku).

## Output

```
home: $HOME
```

## Comments

1. `run` launches `echo` directly, passing each string as a separate argument. With no `:out`, the program’s output goes straight to the screen.

1. The argument reaches `echo` exactly as written: `$HOME` is printed literally, not replaced with your home directory, because no shell is involved to expand it. This is why `run` is the safe default — the same command given to `shell` could behave very differently.

1. To actually print the home directory, let a shell do the expansion: `shell 'echo home: $HOME'` prints something like `home: /home/anna`. (Keep the single quotes on the Raku side, too — a double-quoted `"$HOME"` would make Raku itself try to interpolate a variable named `$HOME` before `echo` ever runs.)

{% include nav.html %}
