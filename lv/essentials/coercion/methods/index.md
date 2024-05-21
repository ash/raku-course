---
title: Datu tipu konvertēšana, izmantojot tipu piespiedu metodes
---

{% include menu.html %}

Lai konvertētu vai _piespiestu_ tipu, izsauciet metodi ar datu tipa nosaukumu. Piemēram, konvertējiet virkni par veselu skaitli:

```raku
my $howmany = '42';
my $n = $howmany.Int;
say $n;
```

Daudzos gadījumos jums nav nepieciešams vērtības konvertēt tieši, jo Raku to dara jūsu vietā. Šis kods darbojas pareizi un paredzami:

```raku
my $a = '10';
my $b = '20';
my $c = $a + $b;
say "Rezultāts ir $c."; # Rezultāts ir 30.
```

Divi mainīgie, `$a` un `$b`, satur virknes, bet tie tiek izmantoti aritmētiskā izteiksmē ar `+`. Šajā brīdī abas virknes tiek konvertētas par veseliem skaitļiem, un tādējādi `$c` arī iegūst veselu skaitli. Mainīgais, kas satur veselu skaitli, tiek interpolēts virknē pēdējā rindā, kur Raku veic nepieciešamās operācijas, lai attēlotu skaitli kā ciparu rakstzīmju secību.

{% include nav.html %}