---
title: 'Упражнение: Видел раньше?'
---

{% include menu.html %}

## Задача

Создайте программу, которая запускает цикл с следующими действиями:

1. Запросите ввод слова.
2. Если слово уже было введено один раз, выведите `Видел!`.
3. Если слово было введено более одного раза, выведите `Видел 2 раза!`, и так далее.
3. Повторите цикл.

## Пример

Пример взаимодействия с программой:

```console
$ raku seen-before.raku
Слово: Я
Слово: никогда
Слово: не
Слово: видел
Слово: видел
Видел!
Слово: это
Слово: видел
Видел 2 раза!
Правда
Слово: как
Слово: это
Видел!
Слово: видел
Видел 3 раза!
Правда
Слово: пилил
Слово: ^C
```

Чтобы остановить программу, нажмите `Ctrl+C`.

## Решение

✅ [См. решение](solution)

{% include nav.html %}