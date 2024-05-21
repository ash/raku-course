---
title: Leksemas darbības joma
---

{% include menu.html %}

Koda bloks izveido tā saukto leksisko darbības jomu. Mainīgie, kas deklarēti pašreizējā blokā, ir redzami tā iekšienē, bet nav pieejami pēc tam, kad programma iziet no bloka. Apsveriet piemēru:

```raku
{
    my $x = 42;
    say $x;
}

say $x;
```

Mainīgais `$x` tiek izveidots koda blokā. Pirmais `say $x` izsaukums izdrukā mainīgā vērtību, jo tas ir redzams bloka iekšienē. Otrais `say $x` neizdodas, jo mainīgā `$x` nosaukums nepastāv ārpus bloka un nav zināms pēc tā beigām. Programma netiek kompilēta un jūs saņemat kļūdas paziņojumu:

    ===SORRY!=== Error while compiling /Users/ash/raku-course/t.raku
    Variable '$x' is not declared
    at /Users/ash/raku-course/t.raku:6
    ------> say ⏏$x;

{% include nav.html %}