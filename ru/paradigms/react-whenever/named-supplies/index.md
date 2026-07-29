---
title: Supply, объявленные снаружи
translations_gpt:
---

{% include menu.html %}

Все `whenever` до сих пор создавали свой supply прямо в заголовке — `whenever
Supply.from-list(...)`. Для короткого примера это читается неплохо, но в настоящих программах
источник событий редко оказывается под рукой ровно в этом месте. Чаще supply создаётся где-то
ещё — его возвращает функция, производит `Supplier` или передаёт вам сокет или таймер, — и приходит
он как обычная переменная. `Whenever` с тем же успехом следит и за именованным supply:

```raku
my $sensors  = Supply.from-list(18, 21, 19);
my $messages = Supply.from-list('hi', 'bye');

react {
    whenever $sensors {
        say "temperature: $_";
    }
    whenever $messages {
        say "message: $_";
    }
}
```

Программа печатает:

```
temperature: 18
temperature: 21
temperature: 19
message: hi
message: bye
```

Так что читайте `whenever $sensors { … }` как «всякий раз, когда supply `$sensors` — откуда бы
он ни взялся — выдаёт значение, выполняй это тело». Виденный ранее вариант с `whenever
Supply.from-list(...)` внутри — лишь частный случай, когда источник создаётся тут же на месте.

Если эта форма — внешний блок со вложенными блоками — вам что-то напоминает, вы правы:
[следующая страница](/ru/paradigms/react-whenever/whenever-vs-when) сравнивает её с `given`/`when`.

{% include nav.html %}
