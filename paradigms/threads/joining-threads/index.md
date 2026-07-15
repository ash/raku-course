---
title: Joining threads
---

{% include menu.html %}

To wait for a thread to complete, call `.finish` on it (also spelled `.join`). The main program pauses there until the thread is done:

```raku
my $t = Thread.start({ say 'in the thread' });
$t.finish;
say 'done';
```

This prints:

```
in the thread
done
```

Because `.finish` waits, the thread’s message is guaranteed to appear before `done`. Without the `.finish`, the order would be unpredictable, and the program might even end before the thread had a chance to print.

When you start several threads, you join each one to be sure they have all completed:

```raku
my $a = Thread.start({ 1 + 1 });
my $b = Thread.start({ 2 + 2 });
$a.finish;
$b.finish;
say 'both finished';
```

The two threads run concurrently, and joining both before the final `say` guarantees that `both finished` is printed only once they are truly done. Joining is how you bring concurrent work back together into a predictable point in your program.

Since a method call on a [junction](/paradigms/junctions) spreads to every value it holds, you can join several threads in a single expression. Combine them with the `all` operator `&` and call `.finish` on the junction:

```raku
my $a = Thread.start({ 1 + 1 });
my $b = Thread.start({ 2 + 2 });

($a & $b).finish;
say 'both finished';
```

Calling `.finish` on `$a & $b` runs it on both threads, so the program waits until neither is still running — the same result as joining them one by one, but it reads as “finish both of these” and works for any number of threads joined with `&`.

{% include nav.html %}
