---
title: On-demand supplies
---

{% include menu.html %}

An _on-demand_ supply produces its values anew for every tap. `Supply.from-list` is on-demand: each tap gets the **whole** sequence from the start, independently of any other tap.

```raku
my $s = Supply.from-list(1, 2, 3);

my @a;
my @b;
$s.tap(-> $v { @a.push($v) });
$s.tap(-> $v { @b.push($v) });

say @a; # [1 2 3]
say @b; # [1 2 3]
```

Both taps received all three values. The supply did not “use up” its values on the first tap; it simply ran again for the second. This is the behaviour you want when a supply represents a fixed source — a list, a file, a query — that every subscriber should see in full.

On-demand is the default for supplies built from existing data, because each consumer naturally expects the complete sequence. The other kind, a _live_ supply, behaves quite differently, as the next topic shows.

{% include nav.html %}
