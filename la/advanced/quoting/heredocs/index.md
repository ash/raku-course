---
title: Heredocs
---

{% include menu.html %}

_Heredoc_ est forma citandi pro textu plurium linearum. Loco delimitatorum circa textum, verbum terminans cum `:to` das, et series a proxima linea usque ad lineam quae solum illud verbum continet currit:

```raku
my $text = q:to/END/;
Hello,
World!
END

print $text;
```

Hoc imprimit:

```
Hello,
World!
```

Terminator (`END` hic — quodlibet verbum convenit) indicat ubi textus desinat. Nota `print`: textus lineae finem qui ante terminatorem sedet retinet, itaque iam in lineae fractura desinit — si `say` adhibeas, alterum adderet et lineam vacuam post relinqueret. Quia heredoc cum `q:to` incipit, textus non interpolatur; `qq:to` adhibe ut variabiles interpoles:

```raku
my $name = 'Anna';

my $greeting = qq:to/EOF/;
Dear $name,
Welcome!
EOF

print $greeting;
```

Res utilis: **indentatio terminatoris claudentis** ab omni linea textus detrahitur. Hoc tibi permittit heredoc indentare ut cum codice circumdante congruat sine illa indentatione in seriem perveniente:

```raku
sub greeting {
    return q:to/END/;
        Hello,
        World!
        END
}

print greeting;
```

Hoc idem `Hello,` et `World!` ac primum exemplum imprimit. Hic terminans `END` octo spatiis indentatus est, itaque octo spatia ab omni linea removentur, et series reddita solum `Hello,\nWorld!` est sine spatiis praecedentibus.

Terminator claudens statuit quantum detrahatur, itaque omnis linea textus saltem tantundem indentata esse debet. Si linea pauciora spatia praecedentia habet, Raku plenam quantitatem removere non potest et monet — *Asked to remove 8 spaces, but the shortest indent is 4 spaces*. Terminatorem non profundius quam lineam minime indentam serva ad hoc vitandum. Heredocs sunt naturalis electio pro exemplaribus, nuntiis, et quolibet textu qui plures lineas occupat.

{% include nav.html %}
