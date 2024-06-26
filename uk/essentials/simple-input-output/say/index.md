---
title: Вивід з `say`
---

{% include menu.html %}

Функція `say` (або підпрограма, або просто рутина) виводить значення на стандартний потік виводу, `STDOUT`. Якщо ви запускаєте програму з терміналу, вивід з'являється там. Якщо ви використовуєте онлайн-сервіси, вивід надсилається в спеціальну область веб-сторінки.

Ось приклад використання `say`:

```raku
say 42;
```

Цей рядок може бути частиною більшої програми або бути всією програмою сам по собі. Очевидно, що він виводить `42` на екран.

Працюємо зі рядками:

```raku
say 'Hello, World!';
```

Voilà, ми отримали `Hello, World!` на екрані.

Рутина `say` може приймати більше одного аргументу, тому ми можемо виводити більше значень за один раз:

```raku
say 42, 'Hello, World!';
```

Зверніть увагу, що частини цього виводу об'єднуються в один рядок: `42Hello, World!`, тому краще додати пробіл між ними. І ви вже повинні вміти вирішити цю проблему, наприклад, ось так:

```raku
say 42, ' ', 'Hello, World!';
```

Після виведення всіх аргументів, рутина `say` додає символ нового рядка до виводу.

{% include nav.html %}