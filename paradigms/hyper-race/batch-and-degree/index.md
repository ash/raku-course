---
title: Tuning with :batch and :degree
---

{% include menu.html %}

Both `.hyper` and `.race` accept two adverbs that control *how* the work is split across threads: `:degree` and `:batch`. You rarely need them, but they are what you reach for when you are tuning for speed.

## `:degree` — how many workers

`:degree` sets how many worker threads run at the same time:

```raku
say (1..5).hyper(:degree(2)).map(*²); # (1 4 9 16 25)
```

By default the degree is close to the number of CPU cores the machine has — on an eight-core machine it is `7`, leaving a core for the main program. Raising it much above the core count rarely helps, since there are no more cores to run on, and the extra coordination can even slow things down.

## `:batch` — how many elements at a time

`:batch` sets how many elements each worker takes in one go before coming back for more:

```raku
say (1..6).hyper(:batch(2)).map(*²); # (1 4 9 16 25 36)
```

The default batch is `64`, and the size is a trade-off:

* A **large** batch means less back-and-forth between the workers and the scheduler — less overhead, which is good when every element costs about the same.
* A **small** batch spreads the work more evenly when some elements are far more expensive than others, so no single worker gets stuck with all the slow ones — at the cost of more coordination.

You can set both at once, on `.race` just as on `.hyper`:

```raku
say (1..6).race(:degree(2), :batch(3)).map(*²).sum; # 91
```

<div style="font-size: 85%; opacity: .8;">

If you are curious what the defaults actually are, you can peek at them through Rakudo’s internals. Note that this reads a *private* attribute — it is not a stable API, and the numbers depend on your machine:

```raku
my $h := (1..10).hyper;
say $h.^attributes.first(*.name.contains('config')).get_value($h).raku;
# HyperConfiguration.new(batch => 64, degree => 7)
```

Here `batch` is the fixed default `64`, while `degree` is `7` — one less than this machine’s eight cores.

</div>

## They are still only hints

As with `.hyper` and `.race` themselves, these adverbs **request** a particular split rather than guarantee it. A compiler is free to honour them, adjust them, or ignore them entirely — so treat `:batch` and `:degree` as knobs to try when tuning, not as promises about exactly how the work will run.

{% include nav.html %}
