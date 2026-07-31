---
title: Canalem claudere
translations_gpt:
---

{% include menu.html %}

Cum productor nullos valores amplius mittendos habet, `.close` in canali vocat. Claudere consumptori significat fluxum finitum esse.

Modus commodissimus canalem clausum consumendi est `.list`, quod tibi omnem valorem reliquum dat et finit simul atque canalis clausus est:

```raku
my $c = Channel.new;
$c.send(1);
$c.send(2);
$c.send(3);
$c.close;

say $c.list; # (1 2 3)
```

Quia `.list` canalem claudi exspectat, perfectum est ad «collige omnia quae productor mittit». Effectum ut quemlibet alium indicem tractare potes — eum summare, numerare, et cetera:

```raku
my $c = Channel.new;
$c.send($_) for 1..5;
$c.close;

say [+] $c.list; # 15
```

Claudere est quomodo consumptor sciat quando desistat. Sine eo, `.list` (vel anulus vocationum `.receive`) in aeternum valorem exspectaret qui numquam venit. Semper canalem claude cum mittere finitum est.

{% include nav.html %}
