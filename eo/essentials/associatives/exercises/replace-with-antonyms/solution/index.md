---
title: 'Solvo: Anstataŭigi per antonimoj'
---

{% include menu.html %}

Por solvi la taskon, la enhavo de la dosiero [dictionary.raku](https://github.com/ash/raku-course/blob/master/essentials/associatives/exercises/replace-with-antonyms/dictionary.raku) estas kopiita al la solva dosiero [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/replace-with-antonyms.raku). Post tio, buklo super la eniraj argumentoj provas trovi la vorton en la vortaro, kaj se ĝi povas, ĝi prenas la antonimon. Se ne ekzistas tia vorto en la vortaro, la originala vorto estas uzata.

## Kodo

La solvo estas prezentita sube. La vortaro estas montrita nur parte ĉi tie.

```raku
my %dictionary =
    'above' => 'below',
    'absent' => 'present',
    'achieve' => 'fail',
    # . . .
    'wrong' => 'right',
    'young' => 'old'    
;

for @*ARGS -> $word {
    say %dictionary{$word} // $word;
}
```

🦋 Trovu la programon en la dosiero [replace-with-antonyms.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/replace-with-antonyms.raku).

## Eligo

```console
$ raku exercises/associatives/replace-with-antonyms.raku early morning
late
evening

$ raku exercises/associatives/replace-with-antonyms.raku big soft drive
small
hard
drive
```

## Komentoj

1. La `//` operatoro estas la [difinita-aŭ operatoro](/eo/essentials/scalar-variables/defined-or-operator), kiu redonas la unuan difinitan operandon.
1. En la hakilo, ĉiuj ŝlosiloj estas vortoj (t.e., ili aspektas kiel identigiloj), do vi ne bezonas citi ilin en la hakilo. Estas do eble krei hakilon, kiel montrite sube:

```raku
my %dictionary =
    above => 'below',
    absent => 'present',
    achieve => 'fail',
    # . . .
    wrong => 'right',
    young => 'old'    
;
```

{% include nav.html %}