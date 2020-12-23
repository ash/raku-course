---
title: Quiz — Variable names
---

[Start](/raku-course/) / [Part 1](/raku-course/part1) / [Scalar variables](/raku-course/scalar-variables) / [Variable names](/raku-course/scalar-variables/identifiers)

# Quiz — Variable names

Check the variables which are named correctly.

{:.quiz}
1 | `$alpha`
1 | `$ALPHA`
1 | `$A-L-P-H-A`
0 | `$ a name` | You cannot have spaces in the name.
0 | `$-a-name-` | The name cannot start or end with a hyphen.
1 | `$FirstName`
1 | `$first_name`
1 | `first_name`
1 | `$last'name` | A single quote can be a part of a name.
1 | `$Βητα`
1 | `$Βήτα` | Accented Greek letters are also fine!
0 | `$33` | A name cannot start with a digit.
1 | `$AddressLine1`
0 | `$2LineOfAddress` | A name cannot start with a digit.
0 | `$)%^@!#` | Total rubbish :-)
0 | `$"scalar"` | A quote character is neither letter nor digit nor underscore.
1 | `$number-of-items`
1 | `$numberofitems`
1 | `$numberOfItems`
0 | `$number--of--items` | Two hyphes one after another are not OK.
1 | `$number__of__items`

{% include quiz.html %}

## Course navigation

← [Scalar variables](../) / [Declaration with initialization](../declaration-with-initialization) | 💪 [Exercises](../exercises) →
