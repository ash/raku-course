---
title: Nomitaj parametroj
---

{% include menu.html %}

Kontraste al [poziciaj parametroj](../positional-parameters), _nomitaj_ parametroj estas referencitaj per iliaj nomoj.

La sekva funkcio prenas du parametrojn nomitajn `$from` kaj `$to`.

```raku
sub distance(:$from, :$to) { $from - $to }
```

Nun, por voki la funkcion, vi devas nomi la argumentojn:

```raku
say distance(from => 30, to => 10); # 20
```

Estas eraro pasi la argumentojn kvazaŭ ili estus poziciaj. Ekzemple, voko `distance(30, 10)` generas eraron:

    Tro multaj poziciaj pasis; atendis 0 argumentojn sed ricevis 2
        en sub distance ĉe t.raku linio 1
        en bloko <unit> ĉe t.raku linio 2

La bona parto estas, ke nomitaj argumentoj povas esti listigitaj en ajna ordo. La sekvaj du vokoj estas tute ekvivalentaj:

```raku
say distance(from => 30, to => 10); # 20

say distance(to => 10, from => 30); # 20
```

## Pasante variablojn

Kiam la valoro, kiun vi volas pasi al funkcio, estas konservita en variablo, kies nomo koincidas kun la nomo de la parametro, vi povas ĝui specialan sintakson, kiu reduktas tajpadon:

```raku
my $from = 30;
my $to = 10;
say distance(:$from, :$to); # 20
```

Ĉi tio estas simila al vorteca voko:

```raku
say distance(from => $from, to => $to); # 20
```

Denove, la ordo ne estas strikta ĉi tie:

```raku
say distance(:$to, :$from); # 20
```

Se la nomo de la variablo diferencas de la nomo de la parametro, uzu unu el la manieroj pasi paron:

```raku
my $a = 20;
my $b = 10;

say distance(from => $a, to => $b);

# aŭ:

say distance(:from($a), :to($b));
```

{% include nav.html %}