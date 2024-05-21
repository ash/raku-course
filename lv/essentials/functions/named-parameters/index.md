---
title: Nosauktie parametri
---

{% include menu.html %}

Atšķirībā no [pozicionālajiem parametriem](../positional-parameters), _nosauktie_ parametri tiek norādīti pēc to nosaukumiem.

Šī funkcija pieņem divus parametrus, kas saucas `$from` un `$to`.

```raku
sub distance(:$from, :$to) { $from - $to }
```

Tagad, lai izsauktu funkciju, jums ir jānorāda argumentu nosaukumi:

```raku
say distance(from => 30, to => 10); # 20
```

Ir kļūda nodot argumentus tā, it kā tie būtu pozicionāli. Piemēram, izsaukums `distance(30, 10)` radīs kļūdu:

    Pārāk daudz pozicionālo argumentu; tika gaidīti 0 argumenti, bet tika saņemti 2
        sub distance pie t.raku 1. rindas
        blokā <unit> pie t.raku 2. rindas

Labā ziņa ir tā, ka nosauktos argumentus var uzskaitīt jebkurā secībā. Šie divi izsaukumi ir pilnīgi ekvivalenti:

```raku
say distance(from => 30, to => 10); # 20

say distance(to => 10, from => 30); # 20
```

## Mainīgo nodošana

Kad vērtība, kuru vēlaties nodot funkcijai, ir saglabāta mainīgajā, kura nosaukums sakrīt ar parametra nosaukumu, jūs varat izmantot īpašu sintaksi, kas samazina rakstīšanu:

```raku
my $from = 30;
my $to = 10;
say distance(:$from, :$to); # 20
```

Tas ir līdzīgi kā izsaukums ar vairāk vārdiem:

```raku
say distance(from => $from, to => $to); # 20
```

Atkal, secība šeit nav stingra:

```raku
say distance(:$to, :$from); # 20
```

Ja mainīgā nosaukums atšķiras no parametra nosaukuma, izmantojiet vienu no veidiem, kā nodot pāri:

```raku
my $a = 20;
my $b = 10;

say distance(from => $a, to => $b);

# vai:

say distance(:from($a), :to($b));
```

{% include nav.html %}