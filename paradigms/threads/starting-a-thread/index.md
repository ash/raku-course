---
title: Starting a thread
---

{% include menu.html %}

`Thread.start` takes a block and runs it on a new thread, returning a `Thread` object that represents the running work:

```raku
my $t = Thread.start({ say 'hello from the thread' });
```

The block runs concurrently with the code that follows. The main program does **not** wait for it automatically — it continues immediately, and the thread does its work in the background.

One small but important detail: the argument must be a block of code. An empty pair of braces `{ }` is an empty **hash**, not an empty block, so a thread always needs a body that actually does something:

```raku
my $t = Thread.start({ 2 + 2 }); # fine: a block with a body
```

Because the main program and the thread now run at the same time, you cannot rely on the order in which their output appears — unless you explicitly wait for the thread to finish, which is the subject of the next topic.

{% include nav.html %}
