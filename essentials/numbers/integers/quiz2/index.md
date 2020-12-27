---
title: Quiz — Unicode digits and numbers
---

{% include menu.html %}

Try to find out, which of the following digits form integers that Raku accepts as values of the `Int` type.

{:.quiz}
1 | 3
1 | 12345
1 | ⓷ | This is considered a number, not a single digit.
0 | ⓵⓶⓷⓸⓹ | So you cannot combine them in such a way to get `12345`.
1 | ❷
0 | ❸❹❺
1 | ㊷ | A single Unicode character named `CIRCLED NUMBER FOURTY TWO`.
0 | ⓸⓶ | But this is not two numbers already.
1 | ㊄ | Circled Chinese 5 and it is a number `CIRCLED IDEOGRAPH FIVE`.
0 | 五 | While this means 5, the character is neither a digit nor a number.
0 | 一二三四五

{% include quiz.html %}

## Comments

You can take the following program as a starting point to play with and explore the properties of such digits. Uncomment the lines to see if that compiles.

    my $x;
    $x =  3;
    say $x; say $x.WHAT;

    $x =  12345;
    $x =  ⓷;
    # $x =  ⓵⓶⓷⓸⓹;

    $x =  ❷;
    # $x =  ❸❹❺;

    $x =  ⒌;
    # $x =  ⒊⒋⒌;

    # $x =  ㊀㊁㊂㊃㊄;
    $x =  ㊄;
    say $x; say $x.WHAT;

    # $x =  五;
    # $x =  一二三四五;

    $x = ㊷;
    say $x;

🦋 Take the code from GitHub: [unicode-digits.raku](https://github.com/ash/raku-course/blob/master/essentials/numbers/integers/quiz2/unicode-digits.raku).

{% include nav.html %}
