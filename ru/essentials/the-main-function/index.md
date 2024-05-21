---
title: Функция MAIN
---

{% include menu.html %}

Программа на Raku не требует никакого шаблонного ритуала, поэтому вы можете сразу начинать писать полезные инструкции. Эта часть программы, которая находится на уровне выше любого [блока кода](/ru/essentials/code-blocks) (включая [функции](/ru/essentials/functions), например), называется _mainline_.

Если программа содержит функцию со специальным именем `MAIN`, Raku выполняет эту функцию после того, как скомпилирует всё и после выполнения кода mainline.

```raku
say '1. Mainline code';

sub MAIN {
    say '3. MAIN called';
}

say '2. Also mainline';
```

Эта программа сначала выполняет `say` на верхнем уровне, а затем вызывает `MAIN`:

```console
$ raku t.raku
1. Mainline code
2. Also mainline
3. MAIN called
```

Конечно, также возможно иметь программу с функцией `MAIN` и без другого кода mainline.

{% include nav.html %}