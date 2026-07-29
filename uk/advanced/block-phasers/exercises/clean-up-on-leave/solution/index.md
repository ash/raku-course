---
title: 'Solution: Прибирання при виході'
translations_gpt: true
---

{% include menu.html %}

Ось можливий розв'язок завдання.

## Код

```raku
sub work {
    LEAVE say 'Cleanup';

    say 'Working';
    return;
    say 'never reached';
}

work();
```

🦋 Вихідний код можна знайти у файлі [clean-up-on-leave.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/block-phasers/clean-up-on-leave.raku).

## Вивід

```
Working
Cleanup
```

## Коментарі

1. Після того як `Working` надруковано, `return` негайно виходить з підпрограми, тому `never reached` ніколи не друкується.

1. Незважаючи на те, що тіло було залишено достроково, фазер `LEAVE` все одно спрацьовує при виході, друкуючи `Cleanup`. Саме ця гарантія робить `LEAVE` правильним місцем для звільнення ресурсів — він запускається незалежно від того, як завершується блок.

{% include nav.html %}
