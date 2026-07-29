---
title: 'Тест — Мітки експорту'
translations_gpt:
---

{% include menu.html %}

Модуль оголошує `sub hello is export` та `sub goodbye is export(:partings)`. Після `use Greeting :partings;` які підпрограми програма може викликати напряму?

{:.quiz}
1 | Лише `goodbye`
0 | Лише `hello`
0 | І `hello`, і `goodbye`
0 | Жодну з них

{% include quiz.html %}

<div class="extended-explanation">

Називання мітки імпортує цю групу *замість* типової, тож `:partings` приносить `goodbye`, а `hello` лишає позаду. Щоб отримати обидві, ви запитали б вбудовану мітку `:ALL` через `use Greeting :ALL;`.

</div>

{% include nav.html %}
