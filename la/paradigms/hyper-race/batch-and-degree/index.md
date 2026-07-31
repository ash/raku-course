---
title: 'Temperare per :batch et :degree'
translations_gpt:
---

{% include menu.html %}

Et `.hyper` et `.race` duo adverbia accipiunt quae regunt *quomodo* opus per fila dividatur: `:degree` et `:batch`. Raro eis eges, sed ad ea manum porrigis cum ad celeritatem temperas.

## `:degree` — quot operarii

`:degree` statuit quot fila operaria eodem tempore currant:

```raku
say (1..5).hyper(:degree(2)).map(*²); # (1 4 9 16 25)
```

Ex more gradus prope numerum nucleorum CPU est quos machina habet — in machina octo nucleorum `7` est, unum nucleum programmati principali relinquens. Illum multo supra numerum nucleorum tollere raro iuvat, quia nulla nuclea plura sunt in quibus currat, et coordinatio superflua res etiam tardare potest.

## `:batch` — quot elementa simul

`:batch` statuit quot elementa unusquisque operarius uno impetu capiat antequam plura petitum redeat:

```raku
say (1..6).hyper(:batch(2)).map(*²); # (1 4 9 16 25 36)
```

Fasciculus ex more `64` est, et magnitudo permutatio est:

* Fasciculus **magnus** minus ultro citroque inter operarios et dispositorem significat — minus oneris, quod bonum est cum unumquodque elementum fere idem constat.
* Fasciculus **parvus** opus aequalius diffundit cum quaedam elementa multo sumptuosiora quam alia sunt, ita ut nullus operarius solus omnibus tardis haereat — pretio maioris coordinationis.

Utrumque simul statuere potes, in `.race` sicut in `.hyper`:

```raku
say (1..6).race(:degree(2), :batch(3)).map(*²).sum; # 91
```

<div style="font-size: 85%; opacity: .8;">

Si curiosus es quae valores ex more revera sint, in eos per interna Rakudo prospicere potes. Nota hoc attributum *privatum* legere — non est API stabilis, et numeri ex machina tua pendent:

```raku
my $h := (1..10).hyper;
say $h.^attributes.first(*.name.contains('config')).get_value($h).raku;
# HyperConfiguration.new(batch => 64, degree => 7)
```

Hic `batch` valor fixus ex more `64` est, dum `degree` `7` est — uno minus quam octo nuclea huius machinae.

</div>

## Adhuc tantum indicia sunt

Sicut `.hyper` et `.race` ipsae, haec adverbia divisionem quandam **rogant** potius quam garantiunt. Compilator liber est ea honorare, ea aptare, vel ea prorsus neglegere — itaque `:batch` et `:degree` ut cochleas habe quas temperans temptes, non ut promissa de eo quomodo opus exacte curret.

{% include nav.html %}
