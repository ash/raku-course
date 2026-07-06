---
title: The solution of ’A book‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

```raku
class Book {
    has Str $.title;
    has Str $.author;
}

my $b = Book.new(title => 'Raku', author => 'Larry');
say "{$b.title} by {$b.author}";
```

🦋 You can find the source code in the file [book.raku](https://github.com/ash/raku-course/blob/master/exercises/oop/attributes/book.raku).

## Output

```
Raku by Larry
```

## Comments

1. Each `has $.title` and `has $.author` declares an attribute together with a read accessor.

1. Both accessors are used inside one double-quoted string. Each is wrapped in curly braces — `{$b.title}` and `{$b.author}` — which is the code-interpolation form: whatever is in the braces is run and its result is inserted, so the accessors are called and their values placed into the string.

1. Both attributes are strings, so it would be wise to declare them so.

{% include nav.html %}
