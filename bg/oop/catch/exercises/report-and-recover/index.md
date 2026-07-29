---
title: Упражнение „Докладвайте и се възстановете“
translations_gpt:
---

{% include menu.html %}

## Задача

Покажете как `CATCH` позволява на програмата да се възстанови и да продължи с разумна стойност по подразбиране.

Декларирайте променлива `$timeout` със стойност по подразбиране `30` преди блок. Вътре в блока направете `die 'config missing'`, а после (на ред, до който никога няма да се стигне) опитайте да зададете `$timeout` на `60`. Използвайте фазер `CATCH`, чийто блок `default` отпечатва `warning: <съобщение>; keeping default`. След блока отпечатайте `timeout is <timeout> seconds`.

## Пример

Програмата отпечатва:

```
warning: config missing; keeping default
timeout is 30 seconds
```

## Решение

✅ [Вижте решението](solution)

{% include nav.html %}
