---
title: Тест — Удаление файлов
translations_gpt:
---

{% include menu.html %}

Что выведет следующая программа?

```raku
mkdir 'data';
spurt 'data/x.txt', 'hi';
rmdir 'data';
say 'data'.IO.e;
```

{:.quiz}
1 | True
0 | False
0 | ошибка
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`rmdir` удаляет только **пустой** каталог. Здесь `data` всё ещё содержит `x.txt`, поэтому
`rmdir` ничего не удаляет и оставляет каталог на месте. Значит, `.e` по-прежнему сообщает `True`.
Чтобы удалить каталог, надо сначала убрать его содержимое (например, с помощью
`.unlink for 'data'.IO.dir`), а затем вызвать `rmdir`.

</div>

{% include nav.html %}
