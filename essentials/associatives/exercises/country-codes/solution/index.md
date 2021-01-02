---
title: 'Solution: Country codes'
---

{% include menu.html %}

In this program, converting a code to a name is done as a hash lookup `%cc{$_}` in a loop over the `@codes` array.

## Code

Here is the possible solution (not all countries are shown):

```raku
my %cc =
    AD => 'Andorra',
    AE => 'United Arab Emirates',

    # . . .

    ZM => 'Zambia',
    ZW => 'Zimbabwe'
;

my @codes = < FR IT DE EE LV US CN IN BR>;

say %cc{$_} for @codes;
```

🦋 Find the program in the file [country-codes.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/country-codes.raku).

## Output

For the given input codes, the program prints the following list of country names:

```console
$ raku exercises/associatives/country-codes.raku
France
Italy
Germany
Estonia
Latvia
United States of America
China
India
Brazil
```

{% include nav.html %}
