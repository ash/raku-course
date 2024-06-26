---
title: Привіт, Світ! у Raku
---

{% include menu.html %}

Чудово, ми вивчили основні речі, необхідні для спілкування з Raku та отримання відповіді, тож давайте перейдемо прямо до першої справжньої програми, «Привіт, Світ!».

```raku
say 'Hello, World!';
```

Перш ніж ми вивчимо основи функцій, давайте розглянемо кілька різних варіантів, які ви можете використовувати в цій програмі.

По-перше, ви можете поставити дужки навколо аргументу функції:

```raku
say('Hello, World!');
```

По-друге, ви можете використовувати інші функції, а саме `put` та `print`. Знову ж таки, з дужками або без них:

```raku
put 'Hello, World!';

print("Hello, World!\n");
```

Зверніть увагу, що в разі використання `print` вам потрібно вручну додати символ нового рядка в кінці повідомлення. Але не хвилюйтеся, ми розглянемо всі ці деталі пізніше.

Перш ніж ми продовжимо, дозвольте показати ще один цікавий варіант. Ви можете викликати функцію як метод безпосередньо на рядку:

```raku
'Hello, World!'.say;
```

{% include nav.html %}