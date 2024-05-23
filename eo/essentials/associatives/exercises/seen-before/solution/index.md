---
title: 'Solvo: Vidi antaŭe?'
---

{% include menu.html %}

Ĉi tiu tasko estas klasika ekzemplo de uzado de haketo por spuri erojn. Antaŭ buklo, haketo `%seen` estas kreita. Ene de la buklo, la enirita `$word` servas kiel ŝlosilo de la haketo.

## Kodo

Jen la solvo:

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

🦋 Trovu la programon en la dosiero [seen-before.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/seen-before.raku).

## Eligo

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

## Komento

La konstruo `%seen{$word}++` ne nur pliigas la valoron sed ankaŭ kreas ĝin se ĝi ankoraŭ ne ekzistis. La procezo de kreo estas nomata _aŭtovivigo_. Rimarku, ke ĝi ne okazas kiam vi nur _legas_ la valoron kiel en la kondiĉo: `if %seen{$word}`.

{% include nav.html %}