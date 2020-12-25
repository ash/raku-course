---
title: 'Quiz 1: Concatenating strings again'
---

{% include menu.html %}

Which lines are correct Raku code to concatenate strings?

{:.quiz}
0 | &apos;alpha&apos; + &apos;beta&apos; | A `+` does not concatenate strings.
0 | &apos;alpha&apos; . &apos;beta&apos; | Neither does a `.`.
1 | &apos;alpha&apos; ~ &apos;beta&apos; | Only the `~` is a string concatenation operator.
0 | &apos;alpha&apos; ~~ &apos;beta&apos; | One tilda is enough. This line is syntactically correct, but it does not concatenate the strings.
0 | α ~ β | Strings need to be quoted.
1 | &apos;α&apos; ~ &apos;β&apos;

{% include quiz.html %}

{% include nav.html %}
