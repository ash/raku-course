---
title: Variable names
---

[Start](../..) / [Part 1](../../part1) / [Scalar variables](..)

# Variable names

Before we move further, let us spend some time on an interesting topic of the allowed names of variables. So far we’ve seen simple names such as `$name` or `$age`, which fully consisted of lowercase letters of the English alphabet. But there are more possibilities.

## Case sensitivity

Names of the variables (or _identifiers_) are case censitive. That means that all of the below names refer to different scalar containers:

    $myname

    $MyName

    $myName

    $MYNAME

It is up to you to stick to a naming scheme, but at least the all-capital names are usually used for constants.

## Other characters

Among the ASCII characters, you are allowed to use digits, underscore character `_`, a hyphen `-`, and single quote (that stands for apostrophe) `'`. Note that the first character of the identifier must be either a letter or an underscore. Both `-` and `'`' must have other non-dash and non-apostrophe characters on each side of them. Here are a few more valid identifiers:

    $___

    $a'b'c

    $my-name

    $address2

Again, it is up to you to choose the names, but it is probably not a good practice to deliberately choose names that look cryptic.

## Unicode characters

The definition of letters and digits is actually extended to include all those characters that are considered letters and decimal digits accourding to their Unicode properties. For example, the next variables are valid in Raku:

    $привет

    $駱駝道

    $αβγ

    $Δ۲ # where ۲ is a digit

## Course navigation

← [Scalar variables](../) / [Declaration with initialization](../declaration-with-initialization) | 🤔 [Quiz](quiz) →
