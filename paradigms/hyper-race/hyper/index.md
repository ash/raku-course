---
title: Parallel maps with hyper
---

{% include menu.html %}

Call `.hyper` on a list before a `map` or `grep`, and the work is spread across multiple worker threads — while the results still come back in the **original order**:

```raku
say (1..5).hyper.map(* * 2); # (2 4 6 8 10)
```

This looks exactly like an ordinary `map`, and the result is identical; the only difference is that the doublings may have been computed on different cores at the same time.

`.hyper` works with `grep` in just the same way — each element is tested in parallel, and the ones that pass still come back in their original order:

```raku
say (1..10).hyper.grep(* %% 2); # (2 4 6 8 10)
```

Because `.hyper` preserves order, it is a drop-in replacement for a slow `map` or `grep`: nothing that depends on the order of the results has to change. The benefit only appears when each element’s work is large enough to outweigh the cost of coordinating threads — squaring a number is far too cheap to be worth parallelising in reality. For genuinely expensive per-element work over a big list, `.hyper` can turn a long wait into a short one for the price of a single method call.

One thing to keep in mind: whether the work is *really* spread across cores is up to the compiler. The language fixes the results — and, for `.hyper`, their original order — but it does not demand actual parallel execution. `.hyper` and `.race` **request** parallelism rather than require it, so a given compiler may run them on a pool of threads or may quietly process the elements in sequence. Treat them as an opportunity for a speed-up, not a guarantee of one.

Because the order is kept, operations that *depend* on it still come out right. Here each word is upper-cased in parallel, yet the pieces join back into the phrase in their original sequence:

```raku
say <raku is fun>.hyper.map(*.uc).join(' '); # RAKU IS FUN
```

{% include nav.html %}
