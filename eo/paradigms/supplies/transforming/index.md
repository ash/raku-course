---
title: Transformi supply
translations_gpt:
---

{% include menu.html %}

Supply povas esti transformita antaŭ ol vi konektiĝas al ĝi, tre kiel listo. Metodoj kiel `map` kaj `grep` produktas **novan** supply, kies valoroj estas la transformitaj:

```raku
my @out;
Supply.from-list(1, 2, 3).map(* * 10).tap(-> $v { @out.push($v) });
say @out; # [10 20 30]
```

La `map(* * 10)` konstruas novan supply, kiu eligas dekoblon de ĉiu originala valoro, kaj la konekto kolektas tiujn en `@out`.

`grep` filtras supply, transdonante nur la valorojn, por kiuj ĝia bloko estas vera:

```raku
my @out;
Supply.from-list(1, 2, 3, 4, 5, 6).grep(* %% 2).tap(-> $v { @out.push($v) });
say @out; # [2 4 6]
```

Ĉar ĉiu transformo redonas alian supply, vi povas ĉenigi ilin, konstruante malgrandan ĉenstacion, kiu reagas al la fluo:

```raku
my @out;
Supply.from-list(1..6).grep(* %% 2).map(* ** 2).tap(-> $v { @out.push($v) });
say @out; # [4 16 36]
```

Jen la sama vortprovizo de map/grep, kiun vi konas el listoj, aplikita al valoroj alvenantaj en la tempo. La supply faras la puŝadon; via ĉenstacio formas tion, kio eliras.

{% include nav.html %}
