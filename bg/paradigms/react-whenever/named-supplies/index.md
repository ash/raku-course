---
title: Потоци, дефинирани отвън
translations_gpt:
---

{% include menu.html %}

Всеки `whenever` досега създаваше потока си точно там, в заглавието — `whenever Supply.from-list(...)`. Това се чете добре за бърз пример, но истинските програми рядко имат източника си на събития под ръка точно на това място. По-често потокът се изгражда другаде — връща го функция, произвежда го `Supplier` или ви го подава сокет или таймер — и пристига като обикновена променлива. `whenever` следи именуван поток също толкова охотно:

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

Това отпечатва:

```
temperature: 18
temperature: 21
temperature: 19
message: hi
message: bye
```

Затова четете `whenever $sensors { … }` като „щом потокът `$sensors` — откъдето и да е дошъл — подаде стойност, изпълни това тяло“. Вграденият `whenever Supply.from-list(...)`, който видяхте по-рано, е просто частният случай, в който източникът се създава на място.

Ако тази форма „външен блок с вътрешни блокове“ ви напомня нещо, вие сте прави — [следващата страница](/bg/paradigms/react-whenever/whenever-vs-when) я сравнява с `given`/`when`.

{% include nav.html %}
