---
title: 'Risinājums: Redzēts agrāk?'
---

{% include menu.html %}

Šis uzdevums ir klasisks piemērs, kā izmantot hešu, lai izsekotu vienumus. Pirms cikla tiek izveidots hešs `%seen`. Cikla iekšpusē ievadītais `$word` kalpo kā heša atslēga.

## Kods

Šeit ir risinājums:

```raku
my %seen;
loop {
    my $word = prompt 'Word: ';
    if %seen{$word} {
        say %seen{$word} == 1 ?? 'Seen!' !! say "Seen %seen{$word} times!";
    }
    %seen{$word}++;
}
```

🦋 Atrodiet programmu failā [seen-before.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/associatives/seen-before.raku).

## Izvade

```console
$ raku exercises/associatives/seen-before.raku
Word: I
Word: never
Word: saw
Word: a
Word: saw
Seen!
Word: that
Word: saw
Seen 2 times!
True
Word: as
Word: that
Seen!
Word: saw
Seen 3 times!
True
Word: sawed
Word: ^C
```

## Komentārs

Konstrukcija `%seen{$word}++` ne tikai palielina vērtību, bet arī izveido to, ja tā vēl nepastāv. Šo procesu sauc par _autovivifikāciju_. Ņemiet vērā, ka tas nenotiek, ja jūs tikai _lasāt_ vērtību, kā nosacījumā: `if %seen{$word}`.

{% include nav.html %}