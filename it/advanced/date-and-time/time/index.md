---
title: Lavorare con l'ora
---

{% include menu.html %}

Quando oltre alla data si ha bisogno anche dell'orario, si usa il tipo `DateTime`. Si crea in modo simile a `Date`, ma specificando anche ora, minuti e secondi:

```raku
my $dt = DateTime.new(2026, 6, 27, 14, 30, 0);
say $dt; # 2026-06-27T14:30:00Z
```

La rappresentazione testuale predefinita segue lo standard ISO 8601: la data, la lettera `T`, l'orario e una `Z` finale per il fuso orario UTC.

Un `DateTime` permette di accedere alle componenti orarie, oltre alle parti della data già note:

```raku
my $dt = DateTime.new(2026, 6, 27, 14, 30, 0);
say $dt.hour;   # 14
say $dt.minute; # 30
```

Per ottenere l'istante corrente, si chiama `DateTime.now`. Come per `Date.today`, non ne mostriamo l'output, perché cambia ogni volta che il programma viene eseguito.

{% include nav.html %}
