---
title: 'Тест — Ignorecase'
translations_gpt:
---

{% include menu.html %}

Що надрукує наступна програма? Шаблон записано великими літерами, а текст — мішаним регістром.

```raku
say 'Hello' ~~ /:i HELLO/;
```

{:.quiz}
1 | ｢Hello｣
0 | ｢HELLO｣
0 | True
0 | False

{% include quiz.html %}

<div class="extended-explanation">

Прислівник `:i` вимикає відмінність між великими та малими літерами, і працює це в обох напрямках — тут шаблон із великих літер `HELLO` збігається з текстом мішаного регістру. Результатом є знайдений текст у тому вигляді, у якому він стоїть у рядку: `｢Hello｣`.

</div>

{% include nav.html %}
