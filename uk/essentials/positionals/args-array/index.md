---
title: Масив @*ARGS
---

{% include menu.html %}

Оскільки ми вже познайомилися з масивами, настав час зустріти один з вбудованих масивів, `@*ARGS`. Символ `*` у його назві є другим сигілом, або _твигілом_, і ми побачимо більше їх у майбутньому. Але зараз давайте скористаємося перевагами використання цього спеціального масиву. Він містить аргументи, які програма отримує з командного рядка.

Розглянемо наступний запуск програми:

```console
$ raku run.raku alpha beta
```

Програма `run.raku` отримує два параметри: `alpha` та `beta`. Їх можна прочитати з `@*ARGS`.

```raku
say @*ARGS.elems;
say @*ARGS[0];
say @*ARGS[1];
```

Ця програма виводить кількість переданих їй аргументів та самі аргументи:

```console
$ raku run.raku alpha beta
2
alpha
beta
```

Зверніть увагу, що програму не потрібно змінювати, якщо ви викликаєте її як виконуваний файл:

```console
$ ./run.raku alpha beta
```

У цьому випадку програма [повинна мати shebang](/uk/essentials/running-programs/from-command-line), але найважливіше те, що індекси `@*ARGS` все ще починаються з `0`:

```raku
#!/usr/bin/env raku

say @*ARGS.elems;
say @*ARGS[0];
say @*ARGS[1];
```

{% include nav.html %}