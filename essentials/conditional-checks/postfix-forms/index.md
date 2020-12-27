---
title: Postfix forms of if and unless
---

{% include menu.html %}

Raku offers a very handy solution when you want to conditionally execute a simple statement. In thise case, there’s no need to create a separate block of code. Just put `if` or `unless` immediately after the statement:
 
    say 'Good afternoon' if $hours > 12;

    say 'All systems work' unless $broken;

{% include nav.html %}
