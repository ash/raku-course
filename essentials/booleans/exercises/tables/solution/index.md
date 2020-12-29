---
title: Solution to 'Boolean tables’
---

{% include menu.html %}

Here is a possible program that prints all the results of Boolean operations.

## Code

```raku
say 'True && True is ', True && True; 
say 'True && False is ', True && False;
say 'False && True is ', False && True;
say 'False && False is ', False && False;

say 'True || True is ', True || True; 
say 'True || False is ', True || False;
say 'False || True is ', False || True;
say 'False || False is ', False || False;

say 'True ^^ True is ', True ^^ True; 
say 'True ^^ False is ', True ^^ False;
say 'False ^^ True is ', False ^^ True;
say 'False ^^ False is ', False ^^ False;
```

🦋 You can find the full code in the file [tables.raku](https://github.com/ash/raku-course/blob/master/exercises/booleans/tables.raku).

## Output

Run the program, and it prints the following table.

```console
$ raku tables.raku
True && True is True
True && False is False
False && True is False
False && False is False
True || True is True
True || False is True
False || True is True
False || False is False
True ^^ True is Nil
True ^^ False is True
False ^^ True is True
False ^^ False is False
```

## Comments

Notice that due to higher precedence of the Boolean operations, you do not need to put them in parentheses. This, though, is not the case if you choose to use string concatenation:

```raku
say 'True && True is ' ~ (True && True);
```

You can return to this exercise after we review interpolating code blocks in strings.

{% include nav.html %}
