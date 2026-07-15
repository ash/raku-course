---
title: whenever vs when
---

{% include menu.html %}

The shape of a `react` block may look familiar. An outer block holding several inner blocks, each acting on the topic `$_`, is exactly how [`given`/`when`](/advanced/given-when) is written. If you had a single temperature reading instead of a whole stream of them, you would branch on it like this:

```raku
given $temperature {
    when 18 { say 'cool' }
    when 21 { say 'warm' }
}
```

The resemblance to `react`/`whenever` is real, but the two do very different jobs:

* **`given`/`when` handles one value, right now.** `given` sets `$_` to a single value; each `when` tests it (`$_ ~~ 18`), the **first** match runs, and the block is finished. It is an ordinary, synchronous conditional.
* **`react`/`whenever` handles many values, over time.** A `whenever` does not test `$_` against a pattern — it *subscribes* to a supply, and its body runs for **every** value that supply emits, whenever that value arrives. All the `whenever`s are live at once, and `react` keeps blocking until each of their supplies is finished.

So `when` asks “does this one value match?”, while `whenever` says “for each value this stream ever produces, do this”. Same skeleton, very different lives: a branch taken a single time, versus a reaction that runs again and again as events arrive.

{% include nav.html %}
