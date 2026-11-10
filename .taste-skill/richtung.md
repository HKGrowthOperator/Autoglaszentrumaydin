# DIRECTION SHEET — The sentence is the layout
seed 304284749 · drawn 2026-11-10 · redraws: 5 · sector other
Brief: Autoglas-Werkstatt in Duisburg-Obermarxloh: Steinschlag reparieren, Scheiben tauschen, direkt mit der Versicherung abrechnen, Foto per WhatsApp

| | |
| --- | --- |
| Direction | The sentence is the layout |
| Hero | Photograph for a letter |
| Type | Barlow Condensed / Barlow |
| Colour | kept from the brand |
| Sections | showcase (Object on a disc) → pricing (One plan as a sentence) → list (Statement, table pushed right) → how-it-works (Lines that step across) → testimonial (Quotation spread edge to edge) → contact (The email as display type) → gallery (Photographs gathered round a heading) → faq (Large questions, answers beside) → cta (Question at both edges) → footer (Invitation over a cropped name) |
| Motion | Shutter image |
| Photographs | the "Coast" set, as atmosphere |

This is the direction for this build. Adopt it. Do not blend it with the layout you would have made anyway,
and do not redraw because it is unfamiliar: unfamiliar is the point. Redraw a slot only when it conflicts
with a stated brand constraint or needs an asset that does not exist, and say why in your report.

The parts of this sheet were written separately and will disagree in small ways. Settle every disagreement in this order:
**house rules** (including type no smaller than 13px and body text of 16px or more) → **the direction** (the idea, the composition habits, where the
one accent goes) → **the type system and the palette** (which face does which job, the five size steps, which colour is the ground and where the
accent goes) → **the hero blueprint** → **the section blueprints**. Under each blueprint below, "Adjusted for this page" lists where it disagrees.
In practice: take geometry from blueprints (columns, proportions, what sits where) and take everything else from above them. Map every size a
blueprint names onto one of your five type steps instead of adding a sixth. Use one button shape, one corner radius and one pair of page margins on
the whole page, whatever individual blueprints say. If a blueprint names a kind of typeface (a light serif, a heavy grotesk), use the dealt face.

## 1. The idea
One short sentence, set at poster scale, is the composition. The trick that makes it an idea rather than a big headline: something from the subject sits inside the sentence where a word would be. A strip of photograph fills the gap between two words; a small live fragment of the product replaces the noun; the object the sentence names is pictured at the size of a letter. Write the sentence first, find the word that can be shown instead of said, and put the showing in its place. The reader completes the sentence with their eyes.

Before anything else, write one sentence in your notes: "On this page, <the subject's own material> becomes <the device>."
Fill the first blank from your inventory of what only this client has (its name and what it means, its street, its numbers, its
constraint), then put the nearest competitor in the sentence: if it still works, the idea is the category's, not the client's.
Then name the one live thing the visitor can do on the page (SKILL.md step 4).

## 2. Composition
The sentence is four to seven words and runs as one or two full-width lines at 9–13vw. Inline with the type, on the baseline, sits one media slot: a rounded-rectangle or square frame exactly one line-height tall and two to three ems wide, holding a photograph or a looping crop. Above and below the sentence the screen is empty except for a small navigation line and one supporting sentence set small, both on the same left margin. Later sections repeat the grammar at smaller scale: each is a short statement on the left six columns with its proof (image, figure, list) on the right, so the page reads as a series of sentences with evidence. Generous vertical space (160px or more) between sections.

## 3. Type — Barlow Condensed / Barlow
Road-sign condensed type with squared curves, bold but not compressed into a wall, with its normal-width sibling for text. Suits logistics, motorsport, hardware and directories with many short titles.
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700&family=Barlow:wght@400;500&display=swap" rel="stylesheet">
```
- Display: **Barlow Condensed** — weight 700 · tracking -0.02em · leading 0.9 · uppercase for statements, mixed case for item titles
- Text: **Barlow** — 400 for body, 500 for emphasis · leading 1.5 · tracking 0
```css
:root {
  --step-small: clamp(0.8125rem, 0.79rem + 0.1vw, 0.875rem);
  --step-body: clamp(1.0625rem, 1rem + 0.25vw, 1.1875rem);
  --step-lead: clamp(1.25rem, 1.1rem + 0.7vw, 1.625rem);
  --step-head: clamp(2.5rem, 1.2rem + 5vw, 5.5rem);
}
```
Display weight with real presence (medium to bold), tracking -0.03 to -0.05em, leading 0.95–1.0 so two lines sit close. The inline frame aligns to cap height and baseline exactly; set it with em units so it scales with the type.
The direction decides sizes and how many of them; the type system decides how this face is set. Where the two give different tracking or leading, use the values of the type system: they are tuned to this face.
The display size itself comes from the hero blueprint below.

## 4. Colour
Kept from the brand. A calm ground with ink at full contrast. The only colour comes from the photograph inside the sentence; if the palette has an accent, use it once, on the action.

## 5. Imagery
**The project has no photographs of its own yet.** First choice: **real pictures of the subject's world from the open collections**: its city and street in old postcards and photographs, an old map of the neighbourhood, its materials up close, its trade in engravings, museum objects of its kind (references/imagery.md §3). Start with `node /home/user/autoglaszentrumaydin/.claude/skills/design-taste-frontend/scripts/assets.mjs "duisburg-obermarxloh postcard"`, then "duisburg-obermarxloh old map", then queries from your inventory (its street, its materials, its trade's tools and history). Download what you use into the project with `--get` and credit every one on the page (`--credits` prints the footer line). They show the world around the client, never the client's own room, dish, product, person or team. Second, for what no honest picture exists of: draw the subject's own things in code, large, in one flat graphic language and the palette's real colours (its tiles, its windows, its objects; references/imagery.md §8). Third: the dealt photographs, only where an honestly generic picture fits (the sea, the weather, a material), never one a visitor could take for the thing itself and never an unrelated scene. One treatment for all of them. If this direction is built on photographs, plan the set before building (four to six pictures of one family) and reuse them at different crops and scales instead of finding or drawing a new picture for every slot; keep drawings as `<symbol>` + `<use>` or generate them with a small script so the page stays light. List every found picture (with its source and licence), every dealt photograph and every drawing that stands in for photography in your report.

One strong, simple photograph that reads at small size (a face, an object, a texture, a horizon), cropped to a wide strip inside the sentence. The same image may open to full width in the next section, so the small slot feels like a window onto something larger.

**Floor (the inspector checks it):** at least four real pictures on the page, usually six to twelve; SVG drawings do not count. One moving picture where an honest clip exists: `node <skill>/scripts/assets.mjs --video "<query>"`, used as a muted loop with a poster frame. Whatever this direction says about pictures, it is carried out with real ones.

Photographs dealt for this build, from the "Coast" set (sea, shoreline, cliffs, piers and beaches)
Order of preference for imagery: (1) the project's own photographs and product shots; (2) images you generate, if an image tool is
available; (3) real pictures of the subject's world found in the open collections (assets.mjs, downloaded and credited on the page);
(4) drawings of the subject in code; (5) these. They are real photographs (Unsplash licence, served by picsum.photos) of places, light and
texture. They are atmosphere, never a stand-in for a specific product, dish, person or interface. List the ones you use in your report so
they can be replaced.
- `https://picsum.photos/id/1049/1600/1000` — Rock island reflected on a wet beach under a pale sky · light tone · pale grey, soft white, dark green · calm area: top · native landscape · photo: Rosan Harmens
- `https://picsum.photos/id/641/1600/1000` — Empty lifeguard chair on a beach at pastel dusk · mid tone · peach, slate blue, dusty teal · calm area: right · native landscape · photo: Fré Sonneveld
- `https://picsum.photos/id/626/1600/1000` — Red and white lighthouse in turquoise sea below a chalk cliff · light tone · turquoise, white, grass green · calm area: left · native landscape · photo: Nick Diamantidis
- `https://picsum.photos/id/77/1600/1000` — Wooden jetty leading to a small pavilion over calm sea · mid tone · warm tan, pale teal, soft grey · calm area: top · native landscape · photo: May Pamintuan
- `https://picsum.photos/id/853/1600/1000` — Lone rock in a calm blue sea beneath a pastel sky · mid tone · sea blue, peach, pale pink · calm area: top · native landscape · photo: Stephen Radford
- `https://picsum.photos/id/640/1600/1000` — Aerial view of turquoise surf breaking onto golden sand · mid tone · sand, turquoise, white · calm area: bottom · native landscape · photo: Sarah Bürvenich
- `https://picsum.photos/id/1052/1600/1000` — Black sea stacks off a dark beach with white surf under a pale sky · light tone · black, white, pale grey · calm area: top · native landscape · photo: Annie Spratt
- `https://picsum.photos/id/374/1600/1000` — Coastline with green headlands, a curving beach and turquoise sea · mid tone · turquoise, deep green, sky blue · calm area: top · native landscape · photo: Ma. Alejandra
The last two path numbers are width and height: request the exact crop you render (`/1200/1500` for a 4:5 portrait, `/2400/1350` for a hero) and
add `?grayscale` to desaturate. Use three to six of them, not all eight. Always set `width`, `height`, `alt` and `loading="lazy"` (not on the hero image).
Other sets that fit this brief: fog-and-quiet, mountain, forest, water — `node draw.mjs --photos <set>` prints one in full; `--photos list` shows all sets. Taking photographs from another set is your call and is not a redraw; keep them to one light and one treatment.

## 6. Hero — Photograph for a letter
A flat white or pale ground, about 85% empty. The name sits on one line at the exact vertical centre, bold, at clamp(96px, 10.5vw, 168px), tracking -0.04em, spanning 78–88% of the width with equal side margins. One photograph is set into the line as if it were a glyph. Either it fills the word space between first and last name (a landscape frame one x-height tall and about 1.6em wide, resting on the baseline), or it replaces one round letter of a short name (a square frame exactly one cap-height tall). Build the line as an inline-flex row with `align-items: baseline` and size the frame in em so it scales with the type; square corners, `object-fit: cover`. Navigation is small and pushed to the edges: a 15px wordmark or monogram top-left at a 24px margin and up to five text links at 14px spread evenly across the right half of the top edge. Along the bottom edge, on the same margin: one supporting sentence at 16px starting at column 6, and the single action as an underlined text link flush right.

On a phone: The name stacks on two centred lines at 19vw with line-height 0.9. The photograph leaves the line and becomes a 3:2 frame at full width minus 16px margins between the two lines, so the screen reads word, picture, word. A single short name keeps the square frame inline at cap height instead. The supporting sentence and action sit under the block at 16px; the links collapse to one word top-right.
Headline: The name on one line with a photograph in its word space or in place of one letter, up to about 16 characters at 10.5vw, splitting into two lines on a phone.

Adjusted for this page:
- It names colours (white): map them onto this palette's roles (ground `--bg`, panels `--surface` and the fields, text `--ink`/`--muted`, the accent `--accent` on the primary action only).
- Its action is a text link: the primary action on the first screen is a real button (filled or solid-bordered, 44px or taller), placed where the blueprint puts the link. A second action may stay a link.
- Its vw sizes assume a face of normal width: with this condensed display face, size the words to fill the measure the blueprint gives them instead of copying the vw value.

## 7. Sections, in order
Each is a composition to rebuild with this project's content. Keep the geometry; change the subject. Re-order or drop a
section when the argument of the page needs it (see references/copy.md), never to fall back to a card grid.

### 1. showcase — Object on a disc (index)
One section about a viewport tall on a plain ground. A flat filled disc 64vh across, in one palette colour, sits with its centre at 58% of the width; swap the disc for the subject's own shape if it has one. A cut-out object photograph stands in front of it, centred on it, about 78% of the disc's height and breaking the disc's outline at the top. Bottom-left, starting on the margin and ending level with the disc's lower edge: a vertical list of four to six item names at clamp(28px, 2.9vw, 44px), leading 1.15. The selected name is in full ink and the rest at 25%; choosing a name swaps the object (300ms crossfade) and the disc's colour. The heading, two to four words at the same size as the names but in the soft ink, is the first line of that list. One fact about the selected item sits at the disc's right edge at 17px.
On a phone: The disc comes first, 86vw across and centred, with the object in front. The names follow as a single sideways-scrolling line at 26px with 24px gaps, the selected one in full ink. The fact sits under the names at 16px.

Adjusted for this page:
- It fades text: anything a visitor reads, inactive items of a list included, is `--ink` or `--muted` at full strength (contrast 4.5:1 or more). The active item is told apart by `--ink` against `--muted`, weight or the accent, not by fading the rest.
- Its vw sizes assume a face of normal width: with this condensed display face, size the words to fill the measure the blueprint gives them instead of copying the vw value.

### 2. pricing — One plan as a sentence (statement)
The whole offer is one sentence of five to seven short words that contains the price, set at 8–9vw across the full width on two lines, leading 0.95, flush left; it replaces any heading. The price is not styled as a different word. Instead it sits on a filled block of the accent colour exactly one line-height tall with 0.15em of padding at each side, so the figure reads as an object in the line. Below, on one shared baseline 64px under the sentence: a supporting sentence at 20px in columns 1–6 saying what the price includes, and one rectangular button right-aligned in columns 10–12. If a second option exists (annual, team), it is a plain text link under the button, not a second panel. The section is one flat colour field at least 80svh tall.
On a phone: The sentence is set at 11vw on two lines, with the price block on a line of its own between them, as wide as its figure. The supporting sentence follows at 17px, then a full-width button, then the text link for the second option.

Adjusted for this page:
- It sets a sentence large over several lines: jurors read that as a long headline. Either cut it to a two-line headline at display size, or keep it a statement at 36px or less on three lines (24px, four lines on a phone).
- Its vw sizes assume a face of normal width: with this condensed display face, size the words to fill the measure the blueprint gives them instead of copying the vw value.

### 3. list — Statement, table pushed right (table)
A heading of four to six words spans the full width on two lines at clamp(40px, 4.5vw, 68px), left-aligned with its first line indented 3vw and leading 0.98. 96px below, the table is pushed into the right-hand five columns (8–12) and the left stays open. One plain word naming the table (offices, hours, rates) hangs at 14px in column 7, top-aligned with the first row. Each row is a three-part line at 15–16px with 26px between rows: the kind or day in the soft ink at the left of the measure, the place or service at 30%, and the address, time or price right-aligned, with a small arrow where the row links. Rows are separated by space only; every fourth row has 44px above it to form groups. In columns 1–4, bottom-aligned with the last row, one 4:5 photograph 22vw wide may sit alone. Holds 5–14 rows.
On a phone: Heading at 9.5vw without the indent. The table takes the full width at 16px; each row stacks the kind above the place, with the value right-aligned on the first line. The naming word is dropped because the heading already says it. The photograph follows at 60% width on the right margin.

Adjusted for this page:
- Its vw sizes assume a face of normal width: with this condensed display face, size the words to fill the measure the blueprint gives them instead of copying the vw value.

### 4. how-it-works — Lines that step across (statement)
The sequence is written, not counted. Four lines of display type, one stage per line, each a complete short clause that begins with its order word: 'First you send it.' 'Then we take it apart.' 'You choose one.' 'It ships on Friday.' Set at clamp(36px, 4.6vw, 76px), leading 1.0, one line each. The first line starts on column 1 and each following line starts two columns further right (grid-column-start 1, 3, 5, 7), so the block descends as a staircase and the eye follows the diagonal. Under each line, on that line's own left edge and 12px below, a sentence of up to 34ch at 17px in the soft ink. 56px between stages. The last line may take the accent colour as the single emphasis. The first line serves as the heading; there is no title above. Leave the columns to the left of the final stage empty.
On a phone: Lines drop to 8.4vw and may wrap onto a second line. The staircase becomes a smaller indent of 6vw per stage, so the fourth line starts 18vw in. Each sentence sits under its line at 16px on the same indent. 40px between stages.

Adjusted for this page:
- Its vw sizes assume a face of normal width: with this condensed display face, size the words to fill the measure the blueprint gives them instead of copying the vw value.

### 5. testimonial — Quotation spread edge to edge (band)
A full-width field with no image. One short quotation, six to ten words, is set at about 9vw in the display face and broken by hand into two or three lines. Each line is a flex row with `justify-content: space-between`, so its first word sits hard against the left margin, its last word hard against the right, and any middle word floats between them. Lines are 0.6em apart, far looser than a headline, which lets the gaps read as pauses. The attribution is spaced the same way on a final row at 18px: name at the left margin, role centred, organisation at the right. Opening and closing quotation marks belong to the first and last words. There is no separate heading. Leave at least 140px of empty field above and below, and give the field its own flat colour when the palette allows.
On a phone: Lines break after every two words and keep the spread: one word at each margin, at 13vw. A single-word line alternates between the left and right margins. The attribution stacks as three short lines at 15px, aligned left, centre and right in turn.

Adjusted for this page:
- Its vw sizes assume a face of normal width: with this condensed display face, size the words to fill the measure the blueprint gives them instead of copying the vw value.

### 6. contact — The email as display type (statement)
The section is 100svh in the inverse of the page's colours. A single email address is set as one line of display type spanning the content width: the font-size is fitted so the address runs from margin to margin (about 7–9vw for 20 characters; break after the @ onto two lines if it is longer than 26), light or regular weight, tight tracking, sitting on a baseline 12vh above the bottom edge. It is a `mailto:` link; on hover the whole line takes the accent ink. In the top-left corner, a sentence of up to 12 words at 20–22px says what to write about. In the two bottom corners at 14px: phone and city at the left, two or three social links at the right. No heading and no form. For a pinned ending, make the section `position: sticky; bottom: 0` beneath the page so the previous section lifts off it.
On a phone: The address breaks after the @ onto two lines at 11.5vw, left-aligned, sitting at 55% of an 86svh screen. The sentence sits at the top-left at 18px. Phone, city and social links stack at the bottom-left at 15px with 12px between them.

Adjusted for this page:
- Its vw sizes assume a face of normal width: with this condensed display face, size the words to fill the measure the blueprint gives them instead of copying the vw value.

### 7. gallery — Photographs gathered round a heading (mosaic)
A band about one screen tall on the plain page ground, used as the page's one deliberate rest. At its visual centre sits the heading, two lines at clamp(32px, 2.6vw, 40px) in a light weight, centred, with one sentence at 17px under it and a text link beneath that. Around it six to eight small photographs are scattered irregularly across the middle columns (x 320–1120; the outer 320px on each side stay empty, equally), each 160–200px wide at about 9:10, square corners, at different heights with 60–200px of air between them. Two of them come within 40px of the heading's block, which their drift never reaches, so the cluster reads as gathered round it rather than laid on a grid. No captions and no frames. Each photograph drifts at its own rate as the band passes (4–12% of its own height on a scroll-linked timeline), so the cluster loosens and tightens; under reduced motion it stays put. The pictures come from one place or one day and share one treatment.
On a phone: Five photographs at 30% of the width sit offset left and right around the centred heading, two above it and three below, none cut by an edge. The heading drops to 7vw on two lines.

Adjusted for this page:
- Its vw sizes assume a face of normal width: with this condensed display face, size the words to fill the measure the blueprint gives them instead of copying the vw value.

### 8. faq — Large questions, answers beside (table)
Every answer is open; nothing collapses. Each question-and-answer pair is a row on the 12-column grid: the question in columns 1–6 at clamp(26px, 2.6vw, 40px), medium weight, leading 1.1, no more than two lines; its answer in columns 8–12 at 17–18px with leading 1.55 and a measure near 40ch, its first baseline level with the question's first baseline. Rows are separated by 72–88px of empty space and nothing else. Five to seven rows. The section heading, two or three words, is set at the same size as the questions but in the softer ink and sits as the first row's left cell with an empty right cell, so it reads as the top of the same table rather than a title above it. Because questions are large and answers small, the left column works as a scannable index.
On a phone: Each pair stacks: question at 24px, answer 12px beneath at 17px, then 56px of space before the next. The heading leads at the same 24px in the softer ink. Answers stay open; there is no accordion on the phone either.

Adjusted for this page:
- Its vw sizes assume a face of normal width: with this condensed display face, size the words to fill the measure the blueprint gives them instead of copying the vw value.

### 9. cta — Question at both edges (statement)
For a closing choice between two answers: book or ask, this date or that, the tasting or the tour. A flat field exactly 100svh tall in the darkest tone. The question is a two-line heading at clamp(110px, 11vw, 168px), leading 1.0, centred, about 54% of the width: line one with its cap line 32px under the field's top edge, line two with its baseline 24px above the bottom edge. The band of about 560px between them is empty except for one row at its optical centre: two solid rectangular buttons, each about 200×56px with its label at 18px in medium weight, their inner edges 120px either side of the centre axis, and between them, exactly on the axis, the word 'or' at 18px in the soft ink. 16px under the row, centred, one line at 16px in the soft ink says what happens after either choice. The type above and below closes the empty band, so it reads as held breath rather than a gap.
On a phone: The question drops to 18vw, still two centred lines, line one 32px from the top and line two 24px above the bottom. The buttons stack at the centre at 72% of the width, 12px apart, with 'or' between them and the line of explanation under the second.

Adjusted for this page:
- Its vw sizes assume a face of normal width: with this condensed display face, size the words to fill the measure the blueprint gives them instead of copying the vw value.

### 10. footer — Invitation over a cropped name (statement)
Close and footer in one full-viewport field of the inverse colour. Upper third, columns 1–7: a two-line invitation at about 5vw, three to five words, with one filled rectangular button beneath it. At columns 10–12, top-aligned with the invitation, three or four social or contact links stacked at 16px. The wordmark fills the bottom of the screen at 26–30vw on one line, `white-space: nowrap`, heavier and larger than the viewport can hold: it is pushed down with `transform: translateY(30%)` so the bottom edge cuts through the letters, and a long name also runs off the right edge. `overflow: hidden` on the footer does the cropping. One row of credits and legal links at 13px sits directly above the wordmark's cap line, spread left and right. The cropped name must be recognisable from its upper two-thirds alone; test that it is.
On a phone: Invitation at 11vw on two lines at the top with a full-width button. Links follow as one row of words at 15px. The wordmark sits at 34vw at the bottom, cropped by both the bottom and the right edge, with the legal row above it at 12px.

Adjusted for this page:
- It sets text at 12px: use your small step (13px or more) instead.
- Its vw sizes assume a face of normal width: with this condensed display face, size the words to fill the measure the blueprint gives them instead of copying the vw value.

## 8. Motion — Shutter image
The one hero or showcase image opens from an edge with a clip-path over about 1.1 seconds while the picture inside settles from 1.12 scale to rest. Use it once, on the image that matters most; later images simply are there. Recipe: 'Image shutter' in references/motion.md.
This is the signature move, the one loud moment. Around it the page still needs the rest of the motion layer (SKILL.md step 9): an entrance for the parts of every section, feedback on every control, and one moving picture. The inspector fails a page that barely moves. Recipes: references/motion.md.

## 10. Where the richness comes from
The collision of big type and one live image inside it. Because there is only one image on the first screen, choose it with care and give it perfect alignment to the letters.

## 11. How this direction goes wrong
The sentence must be short enough for two lines on a phone, where the inline frame drops to its own line between the two halves. Do not style one word differently to fake the device. Do not use more than one slot per sentence.

## 12. Real references
Studied sites that work this way. Take the principle, never the specifics: no names, copy, images or signature assets of theirs.
- **bleibtgleich’26** (Awwwards Site of the Day, studied score 7.5) `aww-bleibtgleich26`
  Idea: One thin vertical rule runs down the page and a tight bold grotesk sentence wraps around it, words stepping from one side of the line to the other.
  Hero: White page, black type. Content sits in a narrow band between 26% and 68% of the width. A 1px vertical rule drops from the top edge at 37% for two-thirds of the height. Left of it: a black blob avatar at the top, a tiny role caption at its foot. Right of it: a tiny location note at the top, the name in two lines of 90px medium grotesk at the bottom. The tagline continues below at the same size, flush to the band's left edge, running past the fold. The upper half is otherwise blank. The handle is split into two pale-grey words fixed in the bottom corners; a black menu pill sits top-right.
  Worth taking: Draw one 1px vertical rule and typeset a large sentence around it, alternating words to either side so the line becomes the text's spine.
- **Midnight** (One Page Love, studied score 7.1) `opl-midnight-2`
  Idea: The headline's circles are literally pictured: one blurred dark ring, sliced into horizontal bands, becomes the hero, the demo panel, the session cards and the footer.
  Hero: No navigation at all. A canvas fills the full width and the top 90% of the viewport: a huge out-of-focus dark navy ring on drifting taupe, sage and terracotta, cut into horizontal bands about 78px tall that are slightly offset like blinds. On the vertical centre line, starting 58px from the left, sit a small rounded-square line icon and a one-line headline at 48px in cream. On the same baseline, starting 59% across, a two-line 17px statement whose first sentence is white and bold while the rest drops to half opacity. The cream page background shows as a 90px strip at the bottom. No button.
  Worth taking: Slice a soft blurred gradient into horizontal bands with small offsets so a familiar glow becomes a recognisable, ownable texture.
- **United Carriers** (Awwwards Site of the Day, studied score 7.4) `aww-united-carriers`
  Idea: One operator covering every route, shown literally as a dot-matrix globe with route arcs and country tags beside a blunt three-line promise.
  Hero: Near-black starfield fills the viewport. A huge dot-matrix globe sits right of centre, about 90% of viewport height, bleeding off the right and bottom edges, rimmed orange on top and electric blue below, with small black country tags and orange pins. Wordmark top-left; the nav is a vertical stack of six mono links starting 29% from the left, the same x as the headline. A white pill button sits top-right under a hairline utility strip. The headline is three uppercase lines at 5.6vw in the lower half, overlapping the globe edge, with a small label above and a paragraph and two pill buttons below. The left quarter stays empty.
  Worth taking: Replace the horizontal nav bar with a vertical stack of links aligned to the headline's left edge, so nav and headline form one column.
Full notes on any of them: `node draw.mjs --site <id>`.

## Always
Headlines two lines or fewer at every width. No eyebrow labels, no monospace, no 01/02/03, no thin rules, no gradients, no shadows at rest,
no cream-and-terracotta, no violet. The frame: one h1 on the first screen that says what this is, equal outer margins, no
section huddled on one side with the other half empty, no blank stretch over half a screen, a heading on every section.
`inspect.mjs` measures all of it.

Saved to /home/user/autoglaszentrumaydin/.taste-skill/direction.json · reprint with `node draw.mjs --show`

---

## Nachtrag Art-Direktor (10.11.2026): Redraws und Abweichungen

Ausgabe oben unverändert aus `draw.mjs --show`. Gezogen mit
`--sector other --brief "Autoglas-Werkstatt in Duisburg-Obermarxloh: …" --sections showcase,pricing,list,how-it-works,testimonial,contact,gallery,faq,cta,footer --keep palette --direction sentence-as-layout`, Seed 304284749.

| Redraw | Vorher | Nachher | Grund |
| --- | --- | --- | --- |
| type | Erode (Fontshare) | Barlow Condensed / Barlow (Google Fonts, SIL OFL) | Auftrag verlangt eine lokal hostbare Google-Fonts-Familie; Erode („für Galerien, Kanzleien“) widerspricht zudem der Werkstatt und der Montserrat-Wortmarke. |
| section:how-it-works | One verb at a time | Lines that step across | Braucht 3 bis 5 bildschirmfüllende Fotos der Arbeitsschritte, die es noch nicht gibt (Shooting offen); gepinnte Wörter über Bildern wiederholen den covered-text-Fehler der Vorher-Messung. |
| section:gallery | Prints dropped on the headline | Photographs gathered round a heading | Legt Fotos über die Überschrift (Hausregel: nichts liegt auf einer Überschrift) und rahmt sie mit weißem Rand (imagery §5: keine Rahmen). |
| section:showcase | Object in front of type | Object on a disc (geliehen) | Der 2-Euro-Test braucht Platz für Auswahl, Regler und Ergebnis; die Scheibe der Blaupause ist hier die 2-Euro-Münze selbst, die Liste sind die Antworten des Tests. Die ausgeteilte Blaupause legt das Objekt über Buchstaben der Überschrift. |
| hero | Title in the sky, line on the horizon | Photograph for a letter | Braucht ein breites, bildschirmfüllendes Foto (≥ 2400 px) aus der Welt der Werkstatt mit Himmel darüber; es gibt keins (größtes eigenes oder freies Glasfoto: 1024 px, Suchen ohne passenden Treffer). |

Nicht übernommen, mit Grund (Details in `notizen.md`, Bauanweisung):
- Rolle `contact` (E-Mail als Displayzeile): Geometrie übernommen für den Abschnitt Standorte, aber mit Karte und Umkreisprüfer, weil beides bleiben muss. Displayzeile ist die Adresse „Duisburger Str. 150“.
- `cta` „im dunkelsten Ton“: als Feld in Logorot, weil der Fuß direkt danach Asphalt ist.
- `footer`: Wortmarke nicht beschnitten (Markenregel: Wortmarke unverändert), sondern ganz, als rotes Logofeld in voller Breite.
- Fotos aus dem Satz „Coast“: nicht verwendet (Meer, keine Verbindung zu Duisburg).
