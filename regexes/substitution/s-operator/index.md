---
title: The substitution operator
---

{% include menu.html %}

The substitution operator is `s///`. It looks like a match with a second slot: the pattern goes between the first two slashes and the replacement text between the last two:

```raku
my $s = 'hello world';
$s ~~ s/world/Raku/;
say $s; # hello Raku
```

Substitution changes the variable **in place**, so `$s` itself is updated. The text in the replacement part is literal — you do not put it in quotes.

Like matching, substitution touches only the **first** occurrence by default. Add the `:g` adverb to replace every occurrence:

```raku
my $s = 'a-b-c';
$s ~~ s:g/'-'/_/;
say $s; # a_b_c
```

If you want to keep the original and produce a changed **copy** instead of modifying in place, use the **uppercase** `S///` operator: it performs the substitution and returns the changed string, leaving the original untouched. Because it does not update a variable in place, point it at one with `given` rather than `~~`:

```raku
my $orig = 'color';
say S:g/o/0/ given $orig; # c0l0r
say $orig;                # color
```

(Writing `$orig ~~ S///` warns you to use `given` instead — with `S///` there is nothing to modify in place.)

The same non-destructive behaviour is also available as a method, `.subst`, which returns a new string:

```raku
my $orig = 'color';
say $orig.subst('o', '0', :g); # c0l0r
say $orig;                     # color
```

{% include nav.html %}
