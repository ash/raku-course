---
title: run and shell
---

{% include menu.html %}

There are two ways to launch an external program. The `run` function takes the command and its arguments as **separate** values and runs the program directly, without involving a shell:

```raku
run 'echo', 'hello';
```

This runs the `echo` program with the single argument `hello`, which prints `hello`. Because the arguments are passed separately, there is no risk of the shell mis-interpreting spaces or special characters — `run` is the safe default.

The `shell` function instead passes a **single string** to the system shell, which interprets it. This lets you use shell features like pipes and redirection:

```raku
shell 'echo hello | tr a-z A-Z';
```

Here, the shell runs `echo`, pipes its output through `tr`, and prints `HELLO`. The convenience comes with a caution: because the shell parses the string, building a `shell` command from untrusted input is dangerous. Prefer `run` unless you specifically need shell features.

Both return a `Proc` object describing how the program finished. By default, the launched program shares your program’s output, so what it prints appears on screen. To capture that output instead, you ask for it — the subject of the next topic.

{% include nav.html %}
