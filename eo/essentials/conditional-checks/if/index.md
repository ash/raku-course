---
title: Kondiĉaj kontroloj kun if
---

{% include menu.html %}

La `if` kondiĉa kontrolo testas kondiĉon kaj se ĝi estas `True`, rulas blokon de kodo.

```raku
if 10 > 4 {
    say 'Matematiko funkcias!';
}
```

Rimarku, ke vi ne bezonas meti la kondiĉon en parentezojn (sed vi povas se vi volas).

Kompreneble, variabloj estas pli ol bonvenaj en la testoj:

```raku
my $flag = False;
if $flag {
    # . . . fari ion
}
```

En la kazo kiam pli ol unu kontrolo uzas la saman variablon, eblas uzi ĉenitajn komparojn:

```raku
my $x = 42;
if 40 < $x < 45 {
    say "Ĝusta respondo $x estas donita.";
}
```

Se la kondiĉo ne estas plenumita, la asociita bloko de kodo ne estas ekzekutita, kaj la programfluo daŭras.

```raku
say 'Komenco';
if False {
    say 'Ĉi tio neniam estas presita.';
}
say 'Fino';
```

Ĉi tiu programo nur presas `Komenco` kaj `Fino`.

{% include nav.html %}