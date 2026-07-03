---
title: The solution of ’Use the converter‘
---

{% include menu.html %}

Here is a possible solution to the task.

## Code

The program, `temperature.raku`:

```raku
use Temperature;

sub MAIN($celsius) {
    say c-to-f($celsius);
}
```

🦋 You can find both source files in the [exercises/advanced/modules-basics/use-temperature](https://github.com/ash/raku-course/tree/master/exercises/advanced/modules-basics/use-temperature) directory.

## Output

```console
$ raku -I. temperature.raku 100
212
```

## Comments

1. `use Temperature` loads the module and imports its exported `c-to-f` subroutine, so the program can call it directly.

1. `sub MAIN($celsius)` receives the command-line argument, so the temperature to convert is chosen when the program is run rather than hard-coded. Run without an argument, Raku prints a usage message automatically.

1. The module must be reachable, which is why the program is run with `-I.` so that Raku looks for `Temperature.rakumod` in the current directory. The conversion of `100` °C gives `212` °F.

{% include nav.html %}
