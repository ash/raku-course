---
title: whenever
translations_gpt:
---

{% include menu.html %}

Unus blocus `react` **plures** blocos `whenever` tenere potest, unumquemque aliud supply spectantem. Blocus ei supply respondet quod proximum emittit, corpus conveniens currens:

```raku
my $sum = 0;

react {
    whenever Supply.from-list(1, 2, 3) {
        $sum += $_;
    }
    whenever Supply.from-list(10, 20) {
        $sum += $_;
    }
}

say $sum; # 36
```

Utrumque supply simul spectatur. Valores eorum — `1, 2, 3` et `10, 20` — omnes in `$sum` fluunt, qui in `36` finit. Blocus `react` solum tunc finit cum **utrumque** supply perfectum est.

Unumquodque `whenever` independenter respondet, itaque hoc est quomodo fluxus componas: unum `whenever` pro fonte, omnia intra eundem `react`. Programma verum coniunctionem retialem in uno `whenever` et horologium in alio spectare posset, unicuique dum eventus eius adveniunt respondens.

Intra corpus `whenever` valorem emissum habes (ut `$_` vel ut parametrum nominatum) et quidlibet cum eo agere potes — statum renovare, ad aliud supply emittere, vel etiam blocum react mature per `done` claudere.

{% include nav.html %}
