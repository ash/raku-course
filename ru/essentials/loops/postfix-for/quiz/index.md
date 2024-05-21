---
title: Quiz — Postfix for
---

{% include menu.html %}

Try to complete the program so that it uses the posftix form of `for` and prints the following text:

    A
    A
    B
    B
    C
    C

Here is the draft of the code:

{:.quiz-code}
. |
{ | ␣ 
. | &nbsp;&nbsp;&nbsp;&nbsp;.say;
. | &nbsp;&nbsp;&nbsp;&nbsp;.say;
} | ␣ for &apos;A&apos;..&apos;C&apos;;

<div class="extended-explanation">This code is an example of using a code block with the postfix <code>for</code>. Note that <code>for</code> must appear on the same line as the closing curly brace. If you put it on a new line, the block will be separated from the loop, and you get a compilation error: <code>Missing block</code>. It’s probably better to avoid such practice of using a code block with postfix constructs.</div>

{% include quiz.html %}

{% include nav.html %}