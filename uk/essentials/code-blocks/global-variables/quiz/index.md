---
title: Вікторина — Глобальні змінні
---

{% include menu.html %}

## 1

Що виведе ця програма?

```raku
my $value = 100;

{
    $value *= 2;
}

say $value;

{
    $value = 300;
}
```

{:.quiz-select}
200 | Відповідь: (: 200 :)

## 2

Що виведе ця програма?

```raku
my $visible = 'Sun';

{
    $visible = 'Moon';

    {
        $visible = 'None';
    }

    say $visible;
}
```

{:.quiz-select}
None | Відповідь: (: Sun, Moon, None :) | Та сама глобальна змінна використовується у всіх блоках.

{% include quiz.html %}

{% include nav.html %}