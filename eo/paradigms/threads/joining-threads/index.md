---
title: Kunigi fadenojn
translations_gpt:
---

{% include menu.html %}

Por atendi, ke fadeno finiĝu, voku `.finish` sur ĝi (skribeblan ankaŭ kiel `.join`). La ĉefa programo paŭzas tie ĝis la fadeno estas preta:

```raku
my $t = Thread.start({ say 'in the thread' });
$t.finish;
say 'done';
```

Ĉi tio presas:

```
in the thread
done
```

Ĉar `.finish` atendas, la mesaĝo de la fadeno certe aperas antaŭ `done`. Sen la `.finish` la ordo estus neantaŭvidebla, kaj la programo eble eĉ finiĝus antaŭ ol la fadeno havus ŝancon presi.

Kiam vi startas plurajn fadenojn, vi kunigas ĉiun el ili por certiĝi, ke ili ĉiuj finiĝis:

```raku
my $a = Thread.start({ 1 + 1 });
my $b = Thread.start({ 2 + 2 });
$a.finish;
$b.finish;
say 'both finished';
```

La du fadenoj kuras samtempe, kaj kunigi ambaŭ antaŭ la fina `say` garantias, ke `both finished` estas presata nur kiam ili vere finiĝis. Kunigo estas la maniero rekunigi samtempan laboron en antaŭvideblan punkton de via programo.

Ĉar metodvoko sur [kunligo](/eo/paradigms/junctions) disvastiĝas al ĉiu valoro, kiun ĝi tenas, vi povas kunigi plurajn fadenojn per unu sola esprimo. Kombinu ilin per la `all`-operatoro `&` kaj voku `.finish` sur la kunligo:

```raku
my $a = Thread.start({ 1 + 1 });
my $b = Thread.start({ 2 + 2 });

($a & $b).finish;
say 'both finished';
```

Voki `.finish` sur `$a & $b` plenumas ĝin sur ambaŭ fadenoj, do la programo atendas ĝis neniu el ili plu kuras — la sama rezulto kiel kunigi ilin unu post la alia, sed ĝi legiĝas kiel «finu ambaŭ el ĉi tiuj» kaj funkcias por ajna nombro da fadenoj kunigitaj per `&`.

{% include nav.html %}
