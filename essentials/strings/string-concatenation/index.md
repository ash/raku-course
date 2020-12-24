---
title: String concatenation in Raku
---

{% include menu.html %}

If you have two strings, you can join them together and get the new longer string. This action is called string concatenation. In Raku, you concatenate strings using—guess what?—concatenation operator. This operator is a tilda: `~`. To concatenate two strings, put `~` between them:

    say 'Hello, ' ~ 'World!';

If our strings are kept in variable, we can ’concatenate variables‘, well, actually, concatenate the strings that those variables keep:

    my $greeting = 'Hello, ';
    my $who = 'World!';

    say $greeting ~ $who;

Or create a new variable using the concatenated value:

    my $greeting = 'Hello, ';
    my $who = 'World!';
    my $message = $greeting ~ $who;

    say $message;

{% include nav.html %}

💪 Or you can jump straight to the [exercises on strings](../exercises).
