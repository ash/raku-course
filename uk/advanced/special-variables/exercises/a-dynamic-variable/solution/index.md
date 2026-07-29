---
title: 'Розв''язання: Динамічна змінна'
translations_gpt:
---

{% include menu.html %}

Ось один із можливих варіантів розв'язання задачі.

## Код

```raku
my $*user = 'guest';

sub whoami {
    say "running as $*user";
}

whoami();

{
    my $*user = 'admin';
    whoami();
}
```

🦋 Вихідний код можна знайти у файлі [a-dynamic-variable.raku](https://github.com/ash/raku-course/blob/master/exercises/advanced/special-variables/a-dynamic-variable.raku).

## Вивід

```
running as guest
running as admin
```

## Коментарі

1. Твіґіл `*` робить `$*user` динамічною. `whoami` ніколи не приймає її параметром — вона знаходить значення, дивлячись назовні по стеку викликів, тож перший виклик повідомляє типове `guest`.

1. Внутрішній блок перевизначає `$*user` як `admin` на час цього блоку. *Та сама* `whoami` тепер бачить `admin`, бо динамічний пошук іде за тим, хто зараз перебуває у стеку. Перекриття динамічної змінної в області видимості — це спосіб надати підвищений контекст усьому, що з неї викликається, зовсім не змінюючи `whoami`.

{% include nav.html %}
