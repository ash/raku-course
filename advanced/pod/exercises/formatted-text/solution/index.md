---
title: The solution of ’Formatted text‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
=begin pod

=head1 Greeting

Hello, B<world>!

=end pod
```

🦋 You can find the source code in the file [formatted-text.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/pod/formatted-text.raku).

## Output

Run with `raku --doc`:

```
Greeting

Hello, world!
```

## Comments

1. `B<world>` marks the word bold; in plain-text rendering it appears as ordinary text, but richer formats show it in bold.

1. `raku --doc` renders the Pod without running any program code.

1. To actually *see* the bold, render to a format that carries styling. Install a formatter such as `Pod::To::HTML` with `zef install Pod::To::HTML`, then run `raku --doc=HTML formatted-text.raku`; the word now comes out wrapped in an HTML `<b>` element. Plain `--doc` text output, by contrast, has no way to show bold once it is written to a file or a pipe.

{% include nav.html %}
