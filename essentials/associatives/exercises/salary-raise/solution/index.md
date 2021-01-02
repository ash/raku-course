---
title: 'Solution: Salary raise'
---

{% include menu.html %}

The program needs to update one of the values of the given hash. Assigning a new value does not differ much from setting a new value of a scalar variable.

## Code

Here is the solution:

```raku
my %employee =
    name => 'Eliza Vents',
    department => 'Sales',
    salary => 3000;

my $raise = 5; # in percents

%employee<salary> *= (1 + $raise / 100);
say "New salary of %employee<name>: %employee<salary>";
```

🦋 Find the program in the file [salary-raise.raku](https://github.com/ash/raku-course/blob/master/exercises/associatives/salary-raise.raku).

## Output

When running the program, make sure you made valid calculations and converted the number of percents correctly.

```console
$ raku exercises/associatives/salary-raise.raku
New salary of Eliza Vents: 3150
```

{% include nav.html %}
