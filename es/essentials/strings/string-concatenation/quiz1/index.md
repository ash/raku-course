---
title: 'Quiz 1: Concatenando cadenas'
---

{% include menu.html %}

En las siguientes operaciones, ocurren diferentes concatenaciones. Completa las partes faltantes.

{:.quiz-code}
. | my $primer-nombre = &apos;Edgar&apos;;
. | my $segundo-nombre = &apos;Allan&apos;;
= | my $apellido ␣ &apos;Poe&apos;;
~ ~ | my $nombre = $primer-nombre ␣ &apos; &apos; ␣ $apellido;
- ~ ~ - ~ ~ - | my $nombre-completo = $primer␣nombre ␣ &apos; &apos; ␣ $segundo␣nombre ␣ &apos; &apos; ␣ $apellido;
. | say $nombre-completo;
~ ~ | say $primer-nombre ␣ &apos; &apos; ␣ $apellido;
~ | say &apos;E. &apos; ␣ $apellido;

{% include quiz.html %}

{% include nav.html %}