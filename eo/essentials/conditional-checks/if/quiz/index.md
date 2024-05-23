---
title: Kvizo — se
---

{% include menu.html %}

Kompletigu la jenajn programojn.

## 1

Ĉi tiu programo devas kontroli ĉu la aĝo estas 21 jaroj aŭ pli.

{:.quiz-code}
. | my $age = 24;
>= { | if $age ␣␣ 21 ␣ | Ambaŭ `>=` kaj `≥` povas esti uzataj ĉi tie.
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;Ni povas vendi ĝin al vi.&apos;;
} | ␣

## 2

En ĉi tiu programo, vi devas kontroli ĉu `$x` estas inter 10 kaj 15 (ekskluzive).

{:.quiz-code}
. | my $x = 12.3;
&lt; &lt; | if 10 ␣ $x ␣ 15 {
. | &nbsp;&nbsp;&nbsp;&nbsp;say &apos;La valoro de $x estas akceptebla.&apos;;
. | }


{% include quiz.html %}
<script>
    replacements = [['≥', '>=']];
</script>

{% include nav.html %}