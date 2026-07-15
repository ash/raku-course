---
title: Writing an iterator
---

{% include menu.html %}

An iterator is simply an object that does the built-in `Iterator` role and provides a `pull-one` method. That method returns the next value, or `IterationEnd` when there is nothing left. Here is a countdown iterator that yields a number and steps towards zero:

```raku
class Countdown does Iterator {
    has Int $.n is rw;

    method pull-one {
        return IterationEnd if $!n <= 0;
        return $!n--;
    }
}
```

Each call to `pull-one` first checks whether the count has run out; if not, it returns the current number and decrements it. The post-decrement `$!n--` returns the value *before* subtracting, so the numbers come out `3, 2, 1`. Driving it by hand looks just like any other iterator:

```raku
my $c = Countdown.new(n => 3);
say $c.pull-one; # 3
say $c.pull-one; # 2
say $c.pull-one; # 1
say $c.pull-one =:= IterationEnd; # True
```

An iterator on its own is not something a `for` loop can take directly — a loop expects an *iterable*. Wrap the iterator in a `Seq` and it becomes loopable:

```raku
for Seq.new(Countdown.new(n => 3)) -> $x {
    say $x;
}
```

That prints `3`, `2`, `1`. In everyday code you would reach for `gather` / `take` instead — the [generator](/paradigms/generators) form is far shorter for the same result. Writing the `Iterator` role directly is worth seeing once, though, because it lays bare what `gather`, `map`, and every `for` loop are built on: an object that answers a single question — “what is the next value?”

{% include nav.html %}
