---
title: Quiz — Dynamicae variabiles
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
my $*n = 1;
sub show { say $*n }

sub run {
    my $*n = 2;
    show();
}

run();
```

{:.quiz}
0 | 1
1 | 2
0 | Nihil
0 | Errorem

{% include quiz.html %}

<div class="extended-explanation">

`show` in gradu summo scriptum est, iuxta `my $*n = 1`, sed ille locus nihil refert — variabilis dynamica per *acervum vocationum* quaeritur, non per locum ubi codex sedet. Hic `show` ex `run` vocatur, quod `$*n` ut `2` iterum declaravit, itaque ille valor viget et programma `2` imprimit.

</div>

{% include nav.html %}
