---
title: 'Solution: Рекурсивний факторіал'
---

{% include menu.html %}

Факторіал є дуже продуктивною вправою, оскільки його можна вирішити багатьма різними способами. Цього разу ми використовуємо рекурсію, що означає, що функція викликається сама з себе.

## Код 1

Ось код рішення. Зверніть увагу, що потрібно перевірити умову для зупинки рекурсії, інакше вона буде продовжуватися нескінченно.

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

🦋 Знайдіть програму у файлі [recursive-factorial.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/recursive-factorial.raku).

## Код 2

У випадках, як показано в цьому коді, часто краще використовувати постфіксні форми `if`, щоб негайно повернутися з функції. Такий підхід очищає код і зменшує кількість відступів та пунктуації.

```raku
sub factorial($n) {
    return 1 if $n < 2;
    return $n * factorial($n - 1);
}

say factorial(10);
```

🦋 Знайдіть оновлену програму у файлі [recursive-factorial-2.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/functions/recursive-factorial-2.raku).

## Приклад

Запустіть програму та перевірте результат. До речі, чи знали ви, що _10!_ — це точна кількість секунд у шести тижнях?

```console
$ raku exercises/functions/recursive-factorial.raku
3628800
```

{% include nav.html %}