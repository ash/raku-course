---
title: Vows
---

{% include menu.html %}

When you call `$p.keep(...)` yourself, anyone who holds `$p` could settle it.
Sometimes you want the opposite: the code that *produces* the result should be the
only thing allowed to settle the promise, while everyone else may only wait on it.
That separation is a **vow**.

`Promise.new` gives you a promise; calling `.vow` on it hands back a `Vow` — the sole
right to keep or break that promise. From then on the promise is meant to be
read-only: it is settled through the vow. The usual shape is a producer that keeps
the vow private and returns just the promise:

```raku
sub after($seconds) {
    my $p = Promise.new;
    my $v = $p.vow;                       # take the settle-right
    start {
        sleep $seconds;
        $v.keep("done after $seconds s"); # settle it through the vow
    }
    return $p;                            # callers get only the read side
}

my $job = after(0.2);
say $job.status;   # Planned
say await $job;    # done after 0.2 s
```

Taking the vow makes the promise genuinely read-only: from that moment `$p.keep` and
`$p.break` are refused, because the vow now owns the sole right to settle it.

```raku
my $p = Promise.new;
my $v = $p.vow;

$p.keep(1); # dies: Access denied to keep/break this Promise; already vowed
```

So the caller can `await` the promise, chain `.then` onto it, or check its `.status`,
but it cannot settle it — only the holder of the vow can. This is how libraries turn
callback- and event-based APIs into ordinary promises: create a promise, hold its
vow, and fulfil it from inside the callback when the event finally arrives.

This is also exactly what `start` does for you behind the scenes — it makes a
promise, keeps the vow to itself, and settles the promise with the block’s value (or
breaks it if the block dies). Making the promise and its vow by hand simply lets you
do the same thing when the result does not come from a single block of code.

{% include nav.html %}
