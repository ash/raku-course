---
title: 'Solution: Друк ряду чисел'
---

{% include menu.html %}

Існує більше одного способу розв'язати дану задачу.

## Код 1

Перший розв'язок більш Raku-орієнтований та компактний.

```raku
my $begin = prompt 'Початок: ';
my $end = prompt 'Кінець: ';

.say for $begin .. $end;
```

🦋 Знайдіть програму у файлі [series-of-numbers.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/series-of-numbers.raku).

## Код 2

Другий можливий розв'язок може використовувати оператор `loop`.

```raku
my $begin = prompt 'Початок: ';
my $end = prompt 'Кінець: ';

loop (my $n = $begin; $n <= $end; $n++) {
    say $n;
}
```

🦋 Знайдіть програму у файлі [series-of-numbers-loop.raku](https://github.com/ash/raku-course/blob/master/exercises/essentials/positionals/series-of-numbers-loop.raku).

Як ви можете бачити, перший варіант значно коротший та більш виразний.

## Обговорення

У першому варіанті програми використовується [постфіксна форма циклу `for`](/uk/essentials/loops/postfix-for). У другій програмі обрано цикл `loop`.

## Вивід

Введіть два числа в консолі та запустіть програму. Обидва варіанти дають однаковий результат.

```console
$ raku exercises/positionals/series-of-numbers.raku
Початок: 15
Кінець: 19
15
16
17
18
19
```

{% include nav.html %}