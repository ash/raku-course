---
title: Mainīgo interpolācija Raku virknes
---

{% include menu.html %}

Vai jūs jau pamanījāt iepriekšējās sadaļās, ka dažreiz virknes tika citētas ar vienkāršiem, bet dažreiz ar dubultiem pēdiņām? Atšķirība ir būtiska.

Protams, jūs varat izmantot dubultās pēdiņas, ja vēlaties ievietot vienkāršu pēdiņu virknes iekšpusē ar minimālu piepūli:

```raku
say "O'Henry";
```

Starp citu, joprojām ir labāk izmantot pareizu apostrofu, nevis vienkāršu pēdiņu, jo [Raku ir labs ar Unicode](../../on-unicode).

```raku
say 'O’Henry';
```

Bet īstā dubulto pēdiņu spēks ir to spēja _interpolēt_ mainīgos un—kā mēs drīz redzēsim—izpildīt kodu! Apskatiet sekojošo programmu:

```raku
my $name = 'Karl';
say "Hello, $name!";
```

Kā jūs varētu gaidīt, programma izdrukā `Hello, Karl!`. Mainīgā `$name` nosaukums (kopā ar tā sigilu `$`) tika aizstāts ar mainīgā vērtību.

Mainīgais tika interpolēts ar vērtību, kuru mainīgais saturēja interpolācijas brīdī, tāpēc, ja jūs maināt `$name` saturu un interpolējat to vēlreiz, tiks aizstāta jaunā vērtība. Pārbaudīsim to:

```raku
my $name = 'Karl';
say "Hello, $name!";

$name = 'Anna';
say "Hello, $name!";
```

Šoreiz tā pati virkne ģenerē dažādus ziņojumus:

    Hello, Karl!
    Hello, Anna!

{% include nav.html %}