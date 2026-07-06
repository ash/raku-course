---
title: The environment
---

{% include menu.html %}

Every program is started with a set of _environment variables_ — named values like `HOME`, `PATH`, or `USER` that the operating system provides. In Raku they are available in the dynamic hash `%*ENV`:

```raku
say %*ENV<HOME>; # the home directory, e.g. /home/anna
```

You read an environment variable by subscripting `%*ENV` with its name. Because it is an ordinary hash, you can also check whether a variable is set, or change it for programs you launch:

```raku
%*ENV<GREETING> = 'Hello';
say %*ENV<GREETING>; # Hello
```

Setting a key in `%*ENV` adds it to the environment that any program you then start with `run` or `shell` will inherit, which is how you pass configuration down to a child program:

```raku
%*ENV<GREETING> = 'Hello';

my $proc = run 'sh', '-c', 'echo $GREETING', :out;
say $proc.out.slurp(:close).chomp; # Hello
```

The variable is set in your program’s environment *before* the child is launched, so the shell that `run` starts already has `GREETING` in its own environment and can echo it back. Any variable you set this way reaches every program you start afterwards.

The `*` twigil tells you `%*ENV` is a dynamic variable, like `$*OUT` from the part on input and output. A few other starred variables describe the running program’s world — `@*ARGS` holds the command-line arguments, and `$*PROGRAM-NAME` is the script’s own name. Together they let a program understand the context it was launched in.

{% include nav.html %}
