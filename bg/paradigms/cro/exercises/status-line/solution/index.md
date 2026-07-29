---
title: 'Решение: Състояние с клиент'
translations_gpt:
---

{% include menu.html %}

Ето едно възможно решение на задачата.

## Код

```raku
use Cro::HTTP::Client;

my $response = await Cro::HTTP::Client.get('http://example.com/');
say $response.status;
```

🦋 Намерете програмата във файла [status-line.raku](https://github.com/ash/raku-course/blob/master/exercises/paradigms/cro/status-line.raku).

## Изход

```
200
```

## Коментари

1. `Cro::HTTP::Client.get` връща обещание — мрежовата заявка приключва по-късно, — така че правим `await`.

1. Обектът на отговора вече знае своя `.status`, така че получаваме `200` направо, без да изпращаме текста на заявката и без да разбираме отговора на ръка. Сравнете това с версията върху сурови сокети: модулът върши цялата протоколна работа вместо вас.

{% include nav.html %}
