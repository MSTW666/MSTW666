<!--
  This page is generated, not hand-maintained.

  TO CHANGE ANY OF THE WORDS ON IT, edit scripts/config.json — in the browser is
  fine — and commit. The workflow redraws and pushes the images within a minute.
  Nothing here should ever be edited by hand. Step by step: docs/EDITING.md

  Every image under assets/generated/ comes out of `node scripts/build.mjs`.
  Each one exists in two versions — desktop and phone — and <picture> picks
  between them with ONE condition:

      <source media="(max-width: 500px)">   phone
      <img src>                             desktop

  Light and dark are NOT separate files. Both palettes live inside every SVG as
  custom properties behind a prefers-color-scheme block, which does work through
  <img> — verified by rendering a probe to a canvas and reading the pixels back.
  That removes the compound "(max-width) and (prefers-color-scheme)" query,
  which was the only construct here capable of handing a desktop the phone
  layout, and it means switching theme repaints rather than re-downloading.

  Phone versions are real narrow layouts, not the desktop file scaled: an 824px
  panel squeezed into a 288px column renders 11px type at 3.8px.

  Each <a> has to stay on ONE line. Broken across lines, the markdown parser
  closes the inline context and side-by-side cards stop flowing together.

  The design system these are built against — type ladder, spacing scale,
  colour budget, motion rules, and the measured values they came from — is
  written down in DESIGN.md. To change wording, edit scripts/config.json and
  rebuild; editing an SVG by hand will be overwritten by the next scheduled run.
-->

<div align="center">

<picture>
  <source media="(max-width: 500px)" srcset="assets/generated/hero-m.svg">
  <img alt="Building tools for thinking, creating, and working with AI. Turning messy ideas into systems that actually run. Always building something I wish already existed." title="Three sentences, typed" src="assets/generated/hero.svg">
</picture>

</div>

<!-- ═══ 01 // ABOUT ME ═══════════════════════════════════════════════════ -->

<picture>
  <source media="(max-width: 500px)" srcset="assets/generated/sec-01-m.svg">
  <img alt="01 // About me" title="01 // About me" src="assets/generated/sec-01.svg">
</picture>

<picture>
  <source media="(max-width: 500px)" srcset="assets/generated/about-m.svg">
  <img title="Kaiyu Wen — software newcomer" alt="Kaiyu Wen. I am a software beginner.I am intensely curious about all software features.I love exploring the world and constantly pushing my personal boundaries. Besides that, I'm also really into photography, film, and basketball.I love finding the meaning of life in the subtle interplay of light and shadow.If you are open to it, I would love to stay in touch and hopefully become friends." src="assets/generated/about.svg">
</picture>

<!-- 02 // THROUGH MY LENS — HIDDEN 2026-08-31 · test placeholder, not rendered. To restore: `git show d93f515:README.md` or revert this hunk.
<picture>
  <source media="(max-width: 500px)" srcset="assets/generated/sec-02-m.svg">
  <img alt="02 // Through my lens — frames, light, places, and things that made me stop for a second." title="02 // Through my lens" src="assets/generated/sec-02.svg">
</picture>
<picture>
  <source media="(max-width: 500px)" srcset="assets/generated/photoband-m.svg">
  <img alt="Through my lens — a band of frames, each at its own ratio, never cropped." title="Through my lens" src="assets/generated/photoband.svg">
</picture>
-->

<!-- ═══ 03 // SELECTED WORK ══════════════════════════════════════════════ -->

<picture>
  <source media="(max-width: 500px)" srcset="assets/generated/sec-03-m.svg">
  <img alt="03 // Selected work — tools I wanted to exist, so I built them." title="03 // Selected work" src="assets/generated/sec-03.svg">
</picture>

<!-- SELECTED_WORK_START — rewritten by scripts/build.mjs on every run. Do not
     edit these links by hand: which projects appear here, and in what order, is
     decided by scripts/lib/projects.mjs from the GitHub profile pins.
     Editing them will be overwritten, and check.mjs fails if they disagree with
     what was actually generated. One line per card, never wrapped — see the
     note at the top of this file. -->

<!-- SELECTED_WORK_END -->

<!-- ═══ 04 // HOW I WORK ═════════════════════════════════════════════════ -->

<picture>
  <source media="(max-width: 500px)" srcset="assets/generated/sec-04-m.svg">
  <img alt="04 // How I work — where the hours go, and what the code is actually made of." title="04 // How I work" src="assets/generated/sec-04.svg">
</picture>

<picture>
  <source media="(max-width: 500px)" srcset="assets/generated/rhythm-m.svg">
  <img alt="Coding rhythm — activity by hour and by weekday over the observed window of the public events feed." title="When I work — from the public events feed, aggregate only" src="assets/generated/rhythm.svg">
</picture>

<picture>
  <source media="(max-width: 500px)" srcset="assets/generated/languages-m.svg">
  <img alt="Language signal — lines I added in commits I authored, across my owned public repositories." title="Lines I wrote, from a real clone and git log --numstat" src="assets/generated/languages.svg">
</picture>

<a href="https://github.com/MSTW666?tab=stars"><picture><source media="(max-width: 500px)" srcset="assets/generated/stars-m.svg"><img alt="Recently starred repositories — opens my stars tab" title="Open my stars tab" src="assets/generated/stars.svg"></picture></a>
<picture><source media="(max-width: 500px)" srcset="assets/generated/activity-m.svg"><img alt="Recent activity — releases, repositories opened to the public, pull requests" title="Releases, repos opened to the public, pull requests" src="assets/generated/activity.svg"></picture>

<!-- ═══ 05 // CONTRIBUTIONS ══════════════════════════════════════════════ -->

<picture>
  <source media="(max-width: 500px)" srcset="assets/generated/sec-05-m.svg">
  <img alt="05 // Contributions" title="05 // Contributions" src="assets/generated/sec-05.svg">
</picture>

<picture>
  <source media="(max-width: 500px)" srcset="assets/generated/contributions-m.svg">
  <img alt="A year of contributions drawn as a filled field" title="A year of contributions" src="assets/generated/contributions.svg">
</picture>

<!-- ═══ 06 // AESTHETIC INPUTS ═══════════════════════════════════════════ -->
<!-- AESTHETIC_INPUTS_SLOT -->

<!-- ═══ 07 // CONTACT ════════════════════════════════════════════════════ -->

<picture>
  <source media="(max-width: 500px)" srcset="assets/generated/sec-07-m.svg">
  <img alt="07 // Contact" title="07 // Contact" src="assets/generated/sec-07.svg">
</picture>

<!-- CONTACT_START -->
<a href="mailto:2578836765@qq.com"><picture><img alt="EMAIL" title="EMAIL" src="assets/generated/btn-email.svg"></picture></a>
<!-- CONTACT_END -->

<!-- ═══ 08 // FORTUNE ════════════════════════════════════════════════════ -->

<picture>
  <source media="(max-width: 500px)" srcset="assets/generated/sec-08-m.svg">
  <img alt="08 // Fortune" title="08 // Fortune" src="assets/generated/sec-08.svg">
</picture>

<picture>
  <source media="(max-width: 500px)" srcset="assets/generated/fortune-m.svg">
  <img alt="A line that changes daily" title="Changes daily" src="assets/generated/fortune.svg">
</picture>


