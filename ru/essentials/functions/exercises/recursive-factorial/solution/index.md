---
title: 'Решение: Рекурсивный факториал'
---

{% include menu.html %}

Факториал — это очень продуктивное упражнение, так как его можно решить множеством различных способов. На этот раз мы используем рекурсию, что означает, что функция вызывает саму себя.

## Код 1

Вот код решения. Обратите внимание, что необходимо проверить условие для остановки рекурсии, иначе она будет продолжаться бесконечно.

```raku
sub factorial($n) {
    if $n < 2 {
        return 1;
    }
    else {
        return $n * factorial($n - 1);
    }
}

say factorial(10);
```

🦋 Найдите программу в файле [recursive-factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/recursive-factorial.raku).

## Код 2

В таких случаях, как показано в этом коде, часто лучше использовать постфиксные формы `if` для немедленного возврата из функции. Этот подход упрощает код и убирает много отступов и пунктуации.

```raku
sub factorial($n) {
    return 1 if $n < 2;
    return $n * factorial($n - 1);
}

say factorial(10);
```

🦋 Найдите обновленную программу в файле [recursive-factorial-2.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/recursive-factorial-2.raku).

## Пример

Запустите программу и проверьте результат. Кстати, вы знали, что _10!_ — это точное количество секунд в шести неделях?

```console
$ raku exercises/functions/recursive-factorial.raku
3628800
```

{% include nav.html %}