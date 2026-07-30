---
title: Quiz — Traits
translations_gpt:
---

{% include menu.html %}

Welches Trait ermöglicht es einer Subroutine, **die Variable des Aufrufers** über einen Parameter zu ändern?

{:.quiz}
1 | `is rw`
0 | `is copy`
0 | `is default`
0 | keines — Parameter sind standardmäßig beschreibbar

{% include quiz.html %}

<div class="extended-explanation">

Ein Parameter ist standardmäßig schreibgeschützt, sodass einem einfachen Parameter nichts zugewiesen werden kann. `is rw` bindet den Parameter an die eigene Variable des Aufrufers, sodass eine Änderung innerhalb der Routine auch außerhalb sichtbar ist. `is copy` würde stattdessen eine veränderbare *Kopie* liefern und den Aufrufer unberührt lassen.

</div>

{% include nav.html %}
