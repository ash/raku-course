---
title: 'Exercise: Salary raise'
---

{% include menu.html %}

## Problem

Given a hash with the data of an employee:

```raku
my %employee =
    full-name => 'Eliza Vents',
    department => 'Sales',
    salary => 3000;
```

Increase the salary by 5&thinsp;% and print it together with the employee’s name. Make sure the `%employee` hash keeps correct values after the raise.

## Example

Here is the expected output of the program:

```console
$ raku salary-raise.raku
New salary of Eliza Vents: 3150
```

## Solution

✅ [See the solution](solution)

{% include nav.html %}
