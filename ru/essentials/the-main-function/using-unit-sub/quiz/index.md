---
title: Викторина — Использование определения в области единицы
---

{% include menu.html %}

## 1

Выберите один из декларативов, чтобы сделать программу правильной.

{:.quiz-select}
unit | (: my, multi, unit :) `sub MAIN(Str $name);`
. | `say "Hello, $name!";`

## 2

Скажите, правильна ли программа.

```raku
unit sub MAIN(Str $name) {
    say "Hello, $name!";
}
```

{:.quiz-select}
valid | Эта программа&nbsp; (: valid, invalid :) | Несмотря на наличие `unit`, вы все равно можете добавлять фигурные скобки, но это излишне.

## 3

Правильна ли эта программа?

```raku
unit multi sub MAIN() {
    say 'Hello, everyone!';
}

unit multi sub MAIN($name) {
    say "Hello, $name!";
}
```

{:.quiz-select}
invalid | Эта программа&nbsp; (: valid, invalid :) | Ошибка: `Нельзя использовать 'unit' с отдельными кандидатами multi.`

{% include quiz.html %}

{% include nav.html %}