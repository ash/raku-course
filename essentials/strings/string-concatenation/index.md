---
title: String concatenation in Raku
---

{% include menu.html %}

If you have two strings, you can join them together and get a new longer string. This action is called string concatenation. In Raku, you concatenate strings using—guess what?—concatenation operator. This operator is a tilda: `~`. To concatenate two strings, put `~` between them:

```raku
say 'Hello, ' ~ 'World!';
```

If our strings are kept in variables, we can ’concatenate variables‘, well, actually, concatenate the strings that those variables keep:

```raku
my $greeting = 'Hello, ';
my $who = 'World!';

say $greeting ~ $who;
```

Or you can create a new variable using the concatenated value:

```raku
my $greeting = 'Hello, ';
my $who = 'World!';
my $message = $greeting ~ $who;

say $message;
```

## Concatenation with assignment

When you need to update the variable and append the new string to it, use the following form:

```raku
# Instead of 
$str = $str ~ $another-str;

# use:
$str ~= $another-str;
```

{% include nav.html %}
