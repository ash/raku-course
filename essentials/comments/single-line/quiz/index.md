---
title: 'Quiz: Single-line comments'
---

{% include menu.html %}

Select the lines with correct comments. Don’t worry if you do not understand the Raku code yet.

{:.quiz}
1 | `my $name = 'John'; # Setting the name`
1 | `my $age = 23; ## Change it next year` | Everything after the first `#` is a comment.
0 | `say $name; Printing name` | Comment must start with a `#`.
0 | `my $city #Not yet known# = 'TBA';` | `= 'TBA';` is part of code here, but it is commented out.
1 | `# say $age;` | The whole line is commented out.
1 | `#say $age;`

{% include quiz.html %}

{% include nav.html %}
