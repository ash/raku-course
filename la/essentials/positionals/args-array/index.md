---
title: The @*ARGS array
---

{% include menu.html %}

Quatenus arrays introductae sunt, bonum tempus est ut unum ex inbuilt arrays, `@*ARGS`, cognoscamus. `*` in nomine suo est secundus sigil, vel _twigil_, et plura de eis in futuro videbimus. Sed nunc, commoda utendi illo speciali array capiamus. Continet argumenta quae programma ex linea mandati accipit.

Considera sequentem programmatum currere:

```console
$ raku run.raku alpha beta
```

Programma `run.raku` duo parametra accipit: `alpha` et `beta`. Legi possunt ex `@*ARGS`.

```raku
say @*ARGS.elems;
say @*ARGS[0];
say @*ARGS[1];
```

Hoc programma numerum argumentorum ei praeteritorum et argumenta ipsa imprimit:

```console
$ raku run.raku alpha beta
2
alpha
beta
```

Nota quod programma nullam mutationem requirit si vocas illud ut executable file:

```console
$ ./run.raku alpha beta
```

Programma, in hoc casu, [shebang habere debet](/la/essentials/running-programs/from-command-line), sed res maximi momenti est quod indices `@*ARGS` adhuc incipiunt cum `0`:

```raku
#!/usr/bin/env raku

say @*ARGS.elems;
say @*ARGS[0];
say @*ARGS[1];
```

{% include nav.html %}