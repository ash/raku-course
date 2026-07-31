---
title: Ĉenigi kaj kombini
translations_gpt:
---

{% include menu.html %}

Promesoj fariĝas eĉ pli potencaj, kiam vi kombinas ilin. La plej ofta bezono estas atendi **plurajn** samtempe. `await` akceptas liston de promesoj kaj redonas iliajn rezultojn laŭvice:

```raku
my @jobs = (start { 1 }), (start { 2 }), (start { 3 });
say await @jobs;     # (1 2 3)
say [+] await @jobs; # 6
```

La tri taskoj kuras samtempe; `await @jobs` atendas ilin ĉiujn kaj redonas `(1, 2, 3)`. Ĉar la rezultoj revenas en la sama ordo kiel la promesoj, vi povas redukti ilin kiel kutime.

Vi povas ankaŭ ĉenigi laboron al promeso per `.then`, kiu plenumas postsekvan blokon tuj kiam la promeso estas preta. Ene de ĝi, `.result` estas la valoro de la originala promeso:

```raku
my $p = start { 10 };
my $q = $p.then({ .result * 2 });
say await $q; # 20
```

`$q` estas nova promeso, kiu duobligas la rezulton de `$p`. Atendi ĝin donas `20`.

La bloko ne havas eksplicitan parametron, do ĝi ricevas la finitan promeson kiel la tem-variablon `$_` — kaj tial nuda `.result` funkcias: ĝi vere estas `$_.result`. Se vi preferas doni al tiu promeso nomon, uzu pintan blokon:

```raku
my $q = $p.then(-> $prev { $prev.result * 2 });
```

Ĉi tio kondutas precize same; `$prev` estas la originala promeso `$p`, kaj `$prev.result` estas ĝia valoro.

Per `start`, `await` kaj `.then` vi povas priskribi tutajn ĉenstaciojn de samtempa laboro: lanĉi multajn taskojn, kombini iliajn rezultojn kaj konstrui novajn taskojn el malnovaj — ĉio sen tuŝi fadenon rekte.

{% include nav.html %}
