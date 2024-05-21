---
title: '@*ARGS masīvs'
---

{% include menu.html %}

Tā kā masīvi ir iepazīstināti, ir labs laiks iepazīties ar vienu no iebūvētajiem masīviem, `@*ARGS`. `*` tā nosaukumā ir otrais simbols, vai _twigil_, un mēs redzēsim vairāk no tiem nākotnē. Bet pagaidām, aplūkosim priekšrocības, ko sniedz šis īpašais masīvs. Tas satur argumentus, ko programma saņem no komandrindas.

Apsveriet šādu programmas izpildi:

```console
$ raku run.raku alpha beta
```

Programma `run.raku` saņem divus parametrus: `alpha` un `beta`. Tos var nolasīt no `@*ARGS`.

```raku
say @*ARGS.elems;
say @*ARGS[0];
say @*ARGS[1];
```

Šī programma izdrukā tai nodoto argumentu skaitu un pašus argumentus:

```console
$ raku run.raku alpha beta
2
alpha
beta
```

Ņemiet vērā, ka programmai nav nepieciešamas izmaiņas, ja to izsauc kā izpildāmu failu:

```console
$ ./run.raku alpha beta
```

Programmai šajā gadījumā [vajadzētu būt shebang](/lv/essentials/running-programs/from-command-line), bet vissvarīgākais ir tas, ka `@*ARGS` indeksi joprojām sākas ar `0`:

```raku
#!/usr/bin/env raku

say @*ARGS.elems;
say @*ARGS[0];
say @*ARGS[1];
```

{% include nav.html %}