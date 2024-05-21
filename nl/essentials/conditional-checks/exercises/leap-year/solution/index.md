---
title: 'Oplossing: Schrikkeljaar'
---

{% include menu.html %}

## Disclaimer

De onderstaande oplossing is bedoeld om je te trainen in het gebruik van conditionele controles. In het echte leven kun je de methoden van de ingebouwde `Date`-klasse leren. We zullen dit in het tweede deel van de cursus leren.

## Oplossing

Het algoritme voor de detectie of een jaar een schrikkeljaar is:

1. als het jaar niet deelbaar is door 4 => gewoon jaar
1. als het jaar niet deelbaar is door 100 => schrikkeljaar
1. als het jaar niet deelbaar is door 400 => gewoon jaar
1. anders => schrikkeljaar

Let op dat je de ingebouwde types kunt gebruiken voor het werken met datum en tijd, dus we zullen in het tweede deel van de cursus terugkomen op deze taak.

## Code 1

De eerste oplossing reproduceert de bovenstaande stappen letterlijk:

```raku
my $year = prompt 'Year: ';

if $year % 4 {
    say 'Common year';
}
elsif $year % 100 {
    say 'Leap year';
}
elsif $year % 400 {
    say 'Common year';
}
else {
    say 'Leap year';
}
```

🦋 Vind het programma in het bestand [leap-year.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/leap-year.raku).

## Code 2

In de tweede oplossing is de logica verpakt in één enkele expressie. Haakjes zijn niet altijd nodig, maar zijn hier toegevoegd voor de duidelijkheid.

```raku
my $year = prompt 'Year: ';

say (($year %% 400) || (($year %% 4) && ($year % 100))) ?? 'Leap year' !! 'Common year';
```

🦋 Vind het programma in het bestand [leap-year-formula.raku](https://github.com/ash/raku-course/blob/master/exercises/conditional-checks/leap-year-formula.raku).

## Output

Probeer beide programma's met de meest kritieke gevallen, bijvoorbeeld 1900, 2000, 2020, 2021.

```console
$ raku exercises/conditional-checks/leap-year.raku
Year: 1900
Common year

$ raku exercises/conditional-checks/leap-year.raku
Year: 2000
Leap year
```

```console
$ raku exercises/conditional-checks/leap-year-formula.raku
Year: 2020
Leap year

$ raku exercises/conditional-checks/leap-year-formula.raku
Year: 2021
Common year
```

%%tipblock
## `%%` vs `%`

Let op dat in Booleaanse contexten de `%%` en `%` operatoren complementair zijn. Je kunt dit feit gebruiken om een van de operatoren te kiezen om expliciete vergelijking met nul te vermijden.

```raku
say ?(100 % 3);    # True
say 100 % 3 != 0;  # True

say ?(100 %% 3);   # False
say 100 %% 3 != 0; # False
```
%%/tipblock

{% include nav.html %}