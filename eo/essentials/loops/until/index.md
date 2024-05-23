---
title: ĝis
---

{% include menu.html %}

La konstruo `ĝis` estas la malo de `dum`. Ĝi ekzekutas la blokon de kodo ĝis la kondiĉo fariĝas `Vera` (aŭ, alie dirite, dum ĝi estas `Falsa`).

Jen modifita [programo de la antaŭa paĝo](../while) kiu uzas `ĝis` kaj novan kondiĉon:

```raku
my $x = 0;
until $x > 10 {
    $x = prompt 'Enigu numeron, kiu ne estas pli granda ol 10: ';
    say "Vi enigis $x.";
}
say "$x estas pli granda ol 10.";
```

Rulu la programon kaj kontrolu la rezulton:

```console
$ raku t.raku 
Enigu numeron, kiu ne estas pli granda ol 10: 10
Vi enigis 10.
Enigu numeron, kiu ne estas pli granda ol 10: 4
Vi enigis 4.
Enigu numeron, kiu ne estas pli granda ol 10: 1
Vi enigis 1.
Enigu numeron, kiu ne estas pli granda ol 10: 20
Vi enigis 20.
20 estas pli granda ol 10.
```

## `ĝis` vs. `dum`

Komparu la ekvivalentajn programojn kun `dum` kaj `ĝis`:

```raku
dum $x <= 10 { . . . }

ĝis $x > 10 { . . . }
```

Kiel vi vidas, la kondiĉoj estas negitaj versioj unu de la alia. En ĉi tiu senco, `dum` kaj `ĝis` estas en la samaj rilatoj kiel `se` kaj `krom se`.

{% include nav.html %}