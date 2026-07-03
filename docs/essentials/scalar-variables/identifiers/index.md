---
title: Variable names
---

{% include menu.html %}

Before we move further, let us spend some time on an interesting topic of the allowed names of variables. So far we’ve seen simple names such as `$name` or `$age`, which fully consisted of lowercase letters of the English alphabet. But there are more possibilities.

## Case sensitivity

Names of the variables (or _identifiers_) are case sensitive. That means that all of the below names refer to different scalar containers:

```raku
$myname

$MyName

$myName

$MYNAME
```

It is up to you to stick to a naming scheme, but you can probably reserve the all-capital names for constants.

## Other characters

Among the ASCII characters, you can use digits, underscore character `_`, a hyphen `-`, and single quote (that stands for apostrophe) `'`. Note that the first character of the identifier must be either a letter or an underscore. Both `-` and `'` must be followed by an alphabetic character. Here are a few more valid identifiers:

```raku
$___

$a'b'c

$my-name

$address2
```

Again, it is up to you to choose the names, but it is probably not a good practice to deliberately choose names that look cryptic.

## Unicode characters

The definition of letters and digits is actually extended to include all those characters that are considered letters and decimal digits according to their Unicode properties. For example, the next variables are valid in Raku:

```raku
$привет

$駱駝道

$αβγ

$Δ۲ # where ۲ is a digit
```

{% include nav.html %}
