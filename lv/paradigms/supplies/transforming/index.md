---
title: Supply pārveidošana
translations_gpt:
---

{% include menu.html %}

Supply var pārveidot, pirms tai pieslēdzas, gluži kā sarakstu. Metodes, piemēram, `map` un `grep`, rada **jaunu** supply, kuras vērtības ir pārveidotās:

```raku
my @out;
Supply.from-list(1, 2, 3).map(* * 10).tap(-> $v { @out.push($v) });
say @out; # [10 20 30]
```

`map(* * 10)` uzbūvē jaunu supply, kas izstaro katru sākotnējo vērtību desmitkārtīgi, un pieslēgums tās savāc `@out`.

`grep` supply filtrē, tālāk laižot tikai tās vērtības, kurām tā bloks ir patiess:

```raku
my @out;
Supply.from-list(1, 2, 3, 4, 5, 6).grep(* %% 2).tap(-> $v { @out.push($v) });
say @out; # [2 4 6]
```

Tā kā katra pārveidošana atgriež vēl vienu supply, tās var saķēdēt, uzbūvējot mazu konveijeru, kas reaģē uz straumi:

```raku
my @out;
Supply.from-list(1..6).grep(* %% 2).map(* ** 2).tap(-> $v { @out.push($v) });
say @out; # [4 16 36]
```

Šī ir tā pati map/grep vārdnīca, ko pazīstat no sarakstiem, piemērota vērtībām, kas pienāk laika gaitā. Supply stumj; jūsu konveijers veido to, kas iznāk ārā.

{% include nav.html %}
