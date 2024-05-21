---
title: Skalārie mainīgie
---

{% include menu.html %}

Mainīgie ir jādeklarē pirms to lietošanas. Raku valodā tam ir īpaši _deklaratori_. Lai deklarētu mainīgo, izmantojiet `my`, kā parādīts zemāk:

```raku
my $name;
```

Līdz ar to jūs esat ieviesis jaunu mainīgo, kuram pagaidām nav nekādas vērtības. Bet tas jau ir zināms kompilatoram, lai to identificētu, kad tas redz to pašu nosaukumu vēlāk programmā.

## Vairāk nekā viens mainīgais

Jūs varat deklarēt divus vai vairākus mainīgos, izmantojot to pašu `my` deklaratoru:

```raku
my ($x, $y);
```

{% include nav.html %}