---
title: Introspectio cum `WHAT`
---

{% include menu.html %}

Possibile est videre genus datae in variabili vocando methodum `WHAT` in ea:

```raku
my $n = 42;
my $s = '42';
say $n.WHAT; # (Int)
say $s.WHAT; # (Str)
```

Genus in parenthesibus imprimitur, ut in commentariis monstratur. Exempli gratia, `(Int)` vel `(Str)`.

Nullum est problema vocare methodum in litterali ipso. Exempli gratia:

```raku
say 42.WHAT;      # (Int)
say (-1).WHAT;    # (Int)
say 'Hello'.WHAT; # (Str)
say True.WHAT;    # (Bool)
```

Nota quod in casu `-1`, numerum in parenthesibus ponimus, quia `say -1.WHAT` conaretur negare eventum `1.WHAT`, quod ad exceptionem ducit.

{% include nav.html %}