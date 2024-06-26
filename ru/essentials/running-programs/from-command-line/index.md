---
title: Запуск из командной строки
---

{% include menu.html %}

Сохраните текст программы в текстовом файле, например, `hello.raku`, и передайте
путь к файлу программе командной строки `raku` (знак доллара означает начало
командной строки):

```console
$ raku hello.raku
```

Если программа не содержит ошибок, она будет немедленно выполнена, и если она
производит вывод, вы увидите результат в терминале:

```console
$ raku hello.raku
Hello, World!
```

Работая с Unix-подобными системами, вы можете добавить "shebang" и сделать
файл исполняемым:

```raku
#!/usr/bin/env raku

say 'Hello, World!';
```

Следующие шаги:

```console
$ chmod a+x hello.raku
$ ./hello.raku
Hello, World!
```

{% assign human=1 %}
{% include nav.html %}
