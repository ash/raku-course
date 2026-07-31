---
title: Quiz — Canalem claudere
translations_gpt:
---

{% include menu.html %}

Quid haec programma imprimit?

```raku
my $c = Channel.new;
$c.send(1);
$c.send(2);
$c.close;
say $c.list.elems;
```

{:.quiz}
0 | 0
0 | 1
1 | 2
0 | in aeternum exspectat

{% include quiz.html %}

<div class="extended-explanation">

`.list` omnem valorem adhuc in canali manentem colligit et finit quia canalis clausus est. Duo valores missi sunt, itaque `.elems` est `2`. Sine `.close`, `.list` in aeternum exspectaret.

</div>

{% include nav.html %}
