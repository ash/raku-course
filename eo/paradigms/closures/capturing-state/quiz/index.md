---
title: Kvizo — Fermaĵoj
translations_gpt:
---

{% include menu.html %}

Kion presas la jena programo?

```raku
sub make-acc {
    my $total = 0;
    return sub ($x) { $total += $x };
}

my &add = make-acc;
add(10);
add(20);
say add(5);
```

{:.quiz}
0 | 5
0 | 30
1 | 35
0 | 0

{% include quiz.html %}

<div class="extended-explanation">

La redonita subprogramo fermiĝas super `$total`, do ĉiuj tri vokoj kunhavas la saman variablon. La unuaj du vokoj alportas ĝin al `30`; la tria aldonas `5` kaj presas la kurantan sumon, `35`.

</div>

{% include nav.html %}
