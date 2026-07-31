---
title: 'Risinājums: Nododiet mainīgo bērnprocesam'
translations_gpt:
---

{% include menu.html %}

Šeit ir iespējams risinājums uzdevumam.

## Kods

```raku
my $file = 'notes.txt';
spurt $file, "one\ntwo\nthree\n";

%*ENV<NOTES> = $file;

my $proc = shell 'wc -l < "$NOTES"', :out;
say $proc.out.slurp(:close).trim;

unlink $file;
```

🦋 Atrodiet programmu failā [read-env.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/external-programs/read-env.raku).

## Izvade

```
3
```

## Komentāri

1. `spurt` izveido `notes.txt` ar trim rindām. Uzstādot `%*ENV<NOTES>` uz tā nosaukumu, faila nosaukums nonāk vidē, ko mantos jebkura bērnprogramma.

1. Komanda `shell` šo vidi manto, izvērš `$NOTES` par `notes.txt` un padod failu `wc -l`, kas saskaita tā rindas. Novirzīšana `< "$NOTES"` patur izvadē tikai skaitli `3`, ko noķeram ar `:out` un apgriežam ar `trim`.

1. Visbeidzot sakopšana tiek izdarīta atpakaļ Raku pusē ar `unlink` — čaula nav vajadzīga. Faila dzēšana ir parasta failu sistēmas darbība, tāpēc nav iemesla tās dēļ palaist vēl vienu procesu.

{% include nav.html %}
