---
title: 'Тест — Изтриване на файлове'
translations_gpt:
---

{% include menu.html %}

Какво отпечатва следната програма?

```raku
mkdir 'data';
spurt 'data/x.txt', 'hi';
rmdir 'data';
say 'data'.IO.e;
```

{:.quiz}
1 | True
0 | False
0 | грешка
0 | Nil

{% include quiz.html %}

<div class="extended-explanation">

`rmdir` премахва само **празна** директория. Тук `data` все още съдържа `x.txt`, така че `rmdir` не премахва нищо и оставя директорията на място. Затова `.e` продължава да съобщава `True`. За да изтриете директорията, първо бихте премахнали съдържанието ѝ (например с `.unlink for 'data'.IO.dir`) и после бихте извикали `rmdir`.

</div>

{% include nav.html %}
