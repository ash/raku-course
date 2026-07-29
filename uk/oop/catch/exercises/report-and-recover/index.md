---
title: Вправа «Повідомити й відновитися»
translations_gpt:
---

{% include menu.html %}

## Завдання

Покажіть, як `CATCH` дозволяє програмі відновитися й рушити далі з розумним типовим значенням.

Оголосіть змінну `$timeout` із типовим значенням `30` перед блоком. Усередині блоку зробіть `die 'config missing'`, а потім (у рядку, до якого виконання ніколи не дійде) спробуйте встановити `$timeout` у `60`. Скористайтеся фазером `CATCH`, чий блок `default` виводить `warning: <message>; keeping default`. Після блоку виведіть `timeout is <timeout> seconds`.

## Приклад

Програма виводить:

```
warning: config missing; keeping default
timeout is 30 seconds
```

## Рішення

✅ [Дивіться рішення](solution)

{% include nav.html %}
