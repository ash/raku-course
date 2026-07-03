---
title: 'Quiz: Single-line comments'
---

{% include menu.html %}

Select the lines with correct comments. Don’t worry if you do not understand the Raku code yet.

{:.quiz}
1 | `my $name = 'John'; # Setting the name`
1 | `my $age = 23; ## Change it next year` | Everything after the first `#` is a comment.
0 | `say $name; Printing name` | A comment must start with a `#`.
0 | `my $city = 'TBA'; // Not yet known` | C++-style comments are not recognised in Raku.
1 | `# say $age;` | The whole line has been commented out.
1 | `#say $age;`

{% include quiz.html %}

{% include nav.html %}
