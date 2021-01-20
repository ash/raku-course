---
title: Quiz — Using the unit-scoped definition
---

{% include menu.html %}

## 1

Choose one of the declarators to make the program correct.

{:.quiz-select}
unit | (: my, multi, unit :) `sub MAIN(Str $name);`
. | `say "Hello, $name!";`

## 2

Tell if the program is correct.

```raku
unit sub MAIN(Str $name) {
    say "Hello, $name!";
}
```

{:.quiz-select}
valid | This program is&nbsp; (: valid, invalid :) | Despite the presence of `unit`, you can still add braces, but that is way redundant.

## 3

Is this program correct?

```raku
unit multi sub MAIN() {
    say 'Hello, everyone!';
}

unit multi sub MAIN($name) {
    say "Hello, $name!";
}
```

{:.quiz-select}
invalid | This program is&nbsp; (: valid, invalid :) | Error: `Cannot use 'unit' with individual multi candidates.`

{% include quiz.html %}

{% include nav.html %}
