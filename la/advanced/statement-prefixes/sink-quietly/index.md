---
title: sink et quietly
---

{% include menu.html %}

Duo plura praefixa codicem propter effectus eius, non propter valorem, currunt.

Praefixum `sink` aliquid in _contextu sink_ evaluat — pure propter effectus laterales, resultatum abiciens. Utile est cum operatione pigra quam currere vis cogere:

```raku
sink (1..3).map({ print "$_ " });
print "\n"; # 1 2 3
```

`map` hic tantum propter impressionem quam facit curritur; `sink` certos efficit quod revera exsequitur et indicem resultantem abicit. Sine coactione, `map` pigra cuius resultatum numquam adhibetur fortasse omnino non currat.

Praefixum `quietly` copiam cum **admonitionibus suppressis** currit. Codex qui normaliter admonitionem ad fluxum errorum imprimeret silens manet:

```raku
my $value;
quietly {
    say $value + 1; # 1, with no "uninitialized value" warning
}
```

`1` ad indefinitum `$value` addere normaliter de usu valoris non initializati admonet, sed intra `quietly` illa admonitio celatur. Hoc utere cum scienter aliquid quod admonet facis et strepitum non vis — sed parce, quoniam admonitiones plerumque ad verum errorem indicant.

{% include nav.html %}
