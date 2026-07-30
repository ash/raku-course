---
title: Der Ersetzungsoperator
translations_gpt:
---

{% include menu.html %}

Der Ersetzungsoperator ist `s///`. Er sieht aus wie ein Treffer mit einem zweiten Fach: Das Muster steht zwischen den ersten beiden Schrägstrichen und der Ersatztext zwischen den letzten beiden:

```raku
my $s = 'hello world';
$s ~~ s/world/Raku/;
say $s; # hello Raku
```

Die Ersetzung verändert die Variable **an Ort und Stelle**, `$s` selbst wird also aktualisiert. Der Text im Ersatzteil ist wörtlich — Sie setzen ihn nicht in Anführungszeichen.

Wie das Treffen berührt die Ersetzung standardmäßig nur das **erste** Vorkommen. Fügen Sie das Adverb `:g` hinzu, um jedes Vorkommen zu ersetzen:

```raku
my $s = 'a-b-c';
$s ~~ s:g/'-'/_/;
say $s; # a_b_c
```

Wenn Sie das Original behalten und statt einer Änderung an Ort und Stelle eine veränderte **Kopie** erzeugen möchten, nehmen Sie den Operator `S///` mit **großem** S: Er führt die Ersetzung aus und liefert die veränderte Zeichenkette, während das Original unberührt bleibt. Da er keine Variable an Ort und Stelle aktualisiert, richten Sie ihn mit `given` statt mit `~~` auf eine:

```raku
my $orig = 'color';
say S:g/o/0/ given $orig; # c0l0r
say $orig;                # color
```

(`$orig ~~ S///` zu schreiben warnt Sie, stattdessen `given` zu verwenden — bei `S///` gibt es nichts, was an Ort und Stelle zu ändern wäre.)

Dasselbe zerstörungsfreie Verhalten gibt es auch als Methode, `.subst`, die eine neue Zeichenkette liefert:

```raku
my $orig = 'color';
say $orig.subst('o', '0', :g); # c0l0r
say $orig;                     # color
```

{% include nav.html %}
