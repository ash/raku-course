---
title: 'Тест — Видалення файлів'
translations_gpt:
---

{% include menu.html %}

Що виведе наведена програма?

```raku
mkdir 'data';
spurt 'data/x.txt', 'hi';
rmdir 'data';
say 'data'.IO.e;
```

{:.quiz}
1 | True
0 | False
0 | помилку
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`rmdir` вилучає лише **порожній** каталог. Тут `data` усе ще містить `x.txt`, тож `rmdir` нічого не вилучає й лишає каталог на місці. Тому `.e` й далі повідомляє `True`. Щоб видалити каталог, ви спершу прибрали б його вміст (наприклад, через `.unlink for 'data'.IO.dir`), а потім викликали `rmdir`.

</div>

{% include nav.html %}
