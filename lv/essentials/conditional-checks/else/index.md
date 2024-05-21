---
title: The else block
---

{% include menu.html %}

`if` bloku var papildināt ar `else` bloku, kas tiek izpildīts, ja nosacījums nav izpildīts.

```raku
my $t = 36.6;
if 35.5 < $t < 37.5 {
    say 'You are fine.';
}
else {
    say 'Call a doctor, maybe?';
}
```

`else` bloku nevar izmantot atsevišķi (ir labāka alternatīva, ko sauc par [`unless`](../unless), kas tiks ieviesta pavisam drīz).

{% include nav.html %}