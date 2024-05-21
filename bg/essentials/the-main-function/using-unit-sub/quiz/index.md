---
title: Тест — Използване на дефиниция с обхват на единица
---

{% include menu.html %}

## 1

Изберете един от деклараторите, за да направите програмата правилна.

{:.quiz-select}
unit | (: my, multi, unit :) `sub MAIN(Str $name);`
. | `say "Здравей, $name!";`

## 2

Кажете дали програмата е правилна.

```raku
unit sub MAIN(Str $name) {
    say "Здравей, $name!";
}
```

{:.quiz-select}
valid | Тази програма е&nbsp; (: валидна, невалидна :) | Въпреки наличието на `unit`, все още можете да добавите скоби, но това е излишно.

## 3

Правилна ли е тази програма?

```raku
unit multi sub MAIN() {
    say 'Здравейте, всички!';
}

unit multi sub MAIN($name) {
    say "Здравей, $name!";
}
```

{:.quiz-select}
invalid | Тази програма е&nbsp; (: валидна, невалидна :) | Грешка: `Не може да се използва 'unit' с индивидуални multi кандидати.`

{% include quiz.html %}

{% include nav.html %}