---
title: Quiz — Ternary operator
---

{% include menu.html %}

Fill in the gaps in the program:

{:.quiz-code}
. | my $color = prompt &apos;What colour is it? &apos;;
?? | say $color eq &apos;blue&apos; ␣␣
!! | &nbsp;&nbsp;&nbsp;&nbsp;&apos;This is a sky!&apos; ␣␣ 
. | &nbsp;&nbsp;&nbsp;&nbsp;&apos;I need more information.&apos;;

{% include quiz.html %}

## Comment

The Rakudo compiler has a special error message for the most common error you can make when using the ternary operator in Raku.

    ===SORRY!=== Error while compiling /Users/ash/raku-course/t.raku
    Unsupported use of ?  and : for the ternary conditional operator.  In
    Raku please use: ??  and !!.
    at /Users/ash/raku-course/t.raku:2
    ------> say $color eq 'blue' ?⏏ 'This is a sky!' : 'I need more informa

{% include nav.html %}
