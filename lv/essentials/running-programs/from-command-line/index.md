---
title: Palaist no komandrindas
---

{% include menu.html %}

Saglabājiet programmas tekstu teksta failā, piemēram, `hello.raku`, un nododiet faila ceļu komandrindas rīkam `raku` (dolāra simbols norāda uz čaulas uzvedni):

```console
$ raku hello.raku
```

Ja programmā nav kļūdu, tā tiks nekavējoties izpildīta, un, ja tā ģenerē jebkādu izvadi, jūs redzēsiet rezultātu terminālī:

```console
$ raku hello.raku 
Hello, World!
```

Strādājot ar Unix bāzētām sistēmām, varat pievienot shebang un padarīt failu izpildāmu:

```raku
#!/usr/bin/env raku

say 'Hello, World!';
```

Nākamie soļi ir šādi:

```console
$ chmod a+x hello.raku
$ ./hello.raku
Hello, World!
```

{% include nav.html %}