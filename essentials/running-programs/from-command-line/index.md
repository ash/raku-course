---
title: Running from command line
---

{% include menu.html %}

Save the text of the program in a text file, for example, `hello.raku` and pass the path to the file to the command-line tool `raku` (the dollar character indicates shell’s prompt):

```console
$ raku hello.raku
```

If the program does not contain errors, it will be immediately executed, and if it generates any output, you will see the result in the terminal:

```console
$ raku hello.raku 
Hello, World!
```

When working with Unix-based systems, you can add a shebang and make the file executable:

```raku
#!/usr/bin/env raku

say 'Hello, World!';
```

The next steps are the following:

```console
$ chmod a+x hello.raku
$ ./hello.raku
Hello, World!
```

{% include nav.html %}
