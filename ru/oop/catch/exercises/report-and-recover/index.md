---
title: Сообщите и восстановитесь
translations_gpt:
---

{% include menu.html %}

## Задача

Покажите, как `CATCH` позволяет программе восстановиться и продолжить работу с разумным
значением по умолчанию.

Объявите перед блоком переменную `$timeout` со значением по умолчанию `30`. Внутри блока
выполните `die 'config missing'`, а затем (на строке, до которой дело никогда не дойдёт)
попытайтесь присвоить `$timeout` значение `60`. Возьмите фазер `CATCH`, чей блок `default`
печатает `warning: <сообщение>; keeping default`. После блока напечатайте
`timeout is <timeout> seconds`.

## Пример

Программа печатает:

```
warning: config missing; keeping default
timeout is 30 seconds
```

## Решение

✅ [Посмотреть решение](solution)

{% include nav.html %}
