---
title: Heredocs
---

{% include menu.html %}

A _heredoc_ is a quoting form for multi-line text. Instead of delimiters around the text, you give a terminator word with `:to`, and the string runs from the next line until a line containing just that word:

```raku
my $text = q:to/END/;
Hello,
World!
END

print $text;
```

This prints:

```
Hello,
World!
```

The terminator (`END` here — any word will do) marks where the text ends. Note the `print`: the text keeps the newline that sits before the terminator, so it already ends in a line break — using `say` would add a second one and leave a trailing blank line. Because the heredoc starts with `q:to`, the text is not interpolated; use `qq:to` to interpolate variables:

```raku
my $name = 'Anna';

my $greeting = qq:to/EOF/;
Dear $name,
Welcome!
EOF

print $greeting;
```

A useful detail: the **indentation of the closing terminator** is stripped from every line of the text. This lets you indent a heredoc to match the surrounding code without that indentation ending up in the string:

```raku
sub greeting {
    return q:to/END/;
        Hello,
        World!
        END
}

print greeting;
```

This prints the same `Hello,` and `World!` as the first example. Here the closing `END` is indented by eight spaces, so eight spaces are removed from each line, and the returned string is just `Hello,\nWorld!` with no leading spaces.

The closing terminator sets how much is stripped, so every line of the text must be indented at least that much. If a line has fewer leading spaces, Raku cannot remove the full amount and warns — *Asked to remove 8 spaces, but the shortest indent is 4 spaces*. Keep the terminator no deeper than the shallowest line to avoid it. Heredocs are the natural choice for templates, messages, and any block of text that spans several lines.

{% include nav.html %}
