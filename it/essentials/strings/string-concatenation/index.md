---
title: Concatenazione di stringhe in Raku
---

{% include menu.html %}

Se hai due stringhe, puoi unirle insieme e ottenere una nuova stringa più lunga. Questa azione si chiama concatenazione di stringhe. In Raku, concatenare le stringhe si fa usando—indovina un po'?—l'operatore di concatenazione. Questo operatore è una tilde: `~`. Per concatenare due stringhe, metti `~` tra di esse:

```raku
say 'Hello, ' ~ 'World!';
```

Se le nostre stringhe sono conservate in variabili, possiamo 'concatenare variabili', beh, in realtà, concatenare le stringhe che quelle variabili contengono:

```raku
my $greeting = 'Hello, ';
my $who = 'World!';

say $greeting ~ $who;
```

Oppure puoi creare una nuova variabile usando il valore concatenato:

```raku
my $greeting = 'Hello, ';
my $who = 'World!';
my $message = $greeting ~ $who;

say $message;
```

## Concatenazione con assegnazione

Quando hai bisogno di aggiornare la variabile e aggiungere una nuova stringa ad essa, usa la seguente forma:

```raku
# Invece di 
$str = $str ~ $another-str;

# usa:
$str ~= $another-str;
```

{% include nav.html %}