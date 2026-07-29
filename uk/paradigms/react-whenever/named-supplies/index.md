---
title: Потоки, означені зовні
translations_gpt:
---

{% include menu.html %}

Кожен `whenever` досі створював свій потік просто там, у заголовку — `whenever Supply.from-list(...)`. Для швидкого прикладу це читається добре, але справжні програми рідко мають джерело подій під рукою рівно в цьому місці. Частіше потік будують десь інде — його повертає функція, виробляє `Supplier` або вручає вам сокет чи таймер — і надходить він як звичайна змінна. `whenever` так само радо стежить за іменованим потоком:

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

Це друкує:

```
temperature: 18
temperature: 21
temperature: 19
message: hi
message: bye
```

Тож читайте `whenever $sensors { … }` як «щоразу, коли потік `$sensors` — звідки б він не взявся — видає значення, виконай це тіло». Вбудований `whenever Supply.from-list(...)`, який ви бачили раніше, є лише окремим випадком, коли джерело випадково створено просто на місці.

Якщо ця форма «зовнішній блок із внутрішніми блоками» вам щось нагадує, то ви маєте рацію — [наступна сторінка](/uk/paradigms/react-whenever/whenever-vs-when) порівнює її з `given`/`when`.

{% include nav.html %}
