---
title: 'Решение: Изчакайте обещание'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
my @jobs =
    (start { sleep 0.3; 'slow'   }),
    (start { sleep 0.1; 'quick'  }),
    (start { sleep 0.2; 'medium' });

say await @jobs;
```

🦋 Намерете програмата във файла [await-a-promise.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/await/await-a-promise.raku).

## Изход

```
(slow quick medium)
```

## Коментари

1. И трите задачи тръгват наведнъж и спят паралелно, така че цялата програма отнема около `0.3` секунди — продължителността на най-бавната задача, а не сумата от трите.

1. Макар `quick` да приключва първа, а `slow` последна, изходът е `(slow quick medium)`: `await` връща всеки резултат на същата позиция, на която е неговото обещание в `@jobs`. Редът на приключване влияе само върху това *кога* `await` се връща, а не върху подредбата на резултатите.

{% include nav.html %}
