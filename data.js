// Markdown
import animatedStripesMarkdown from './workshop/challenges/animated-stripes/README.md'
import backgroundSplitMarkdown from './workshop/challenges/background-split/README.md'
import caretCutoffMarkdown from './workshop/challenges/caret-cutoff/README.md'
import ribbonMarkdown from './workshop/challenges/ribbon/README.md'
import scrollFadeoutListMarkdown from './workshop/challenges/scroll-fadeout-list/README.md'
import slideInConfirmationMarkdown from './workshop/challenges/slide-in-confirmation/README.md'

// Start HTML
import animatedStripesStart from './workshop/challenges/animated-stripes/index.html'
import backgroundSplitStart from './workshop/challenges/background-split/index.html'
import caretCutoffStart from './workshop/challenges/caret-cutoff/index.html'
import ribbonStart from './workshop/challenges/ribbon/index.html'
import scrollFadeoutListStart from './workshop/challenges/scroll-fadeout-list/index.html'
import SlideInConfirmationStart from './workshop/challenges/slide-in-confirmation'

// Solution HTML
import animatedStripesSolution from './workshop/solutions/animated-stripes/index.html'
import backgroundSplitSolution from './workshop/solutions/background-split/index.html'
import caretCutoffSolution from './workshop/solutions/caret-cutoff/index.html'
import ribbonSolution from './workshop/solutions/ribbon/index.html'
import scrollFadeoutListSolution from './workshop/solutions/scroll-fadeout-list/index.html'
import SlideInConfirmationSolution from './workshop/solutions/slide-in-confirmation'

// Images
import animatedStripesImage from './public/images/thumbnails/animated-stripes.jpg'
import backgroundSplitImage from './public/images/thumbnails/background-split.jpg'
import caretCutoffImage from './public/images/thumbnails/caret-cutoff.jpg'
import ribbonImage from './public/images/thumbnails/ribbon.jpg'
import scrollFadeoutListImage from './public/images/thumbnails/scroll-fadeout-list.jpg'
import slideInConfirmationImage from './public/images/thumbnails/slide-in-confirmation.jpg'

export const lessons = [
  {
    name: 'Ribbon banner',
    slug: 'ribbon',
    language: 'HTML',
    image: ribbonImage,
    duration: '15 minutes',
    difficulty: 'mild',
    readmeMarkdown: ribbonMarkdown,
    startSnippet: ribbonStart,
    solutionSnippet: ribbonSolution,
  },
  {
    name: 'Background split',
    slug: 'background-split',
    language: 'HTML',
    image: backgroundSplitImage,
    duration: '15 minutes',
    difficulty: 'mild',
    readmeMarkdown: backgroundSplitMarkdown,
    startSnippet: backgroundSplitStart,
    solutionSnippet: backgroundSplitSolution,
  },
  {
    name: 'Caret cutoff',
    slug: 'caret-cutoff',
    language: 'HTML',
    image: caretCutoffImage,
    duration: '20 minutes',
    difficulty: 'spicy',
    readmeMarkdown: caretCutoffMarkdown,
    startSnippet: caretCutoffStart,
    solutionSnippet: caretCutoffSolution,
  },
  {
    name: 'Scroll fade-out list',
    slug: 'scroll-fadeout-list',
    language: 'HTML',
    image: scrollFadeoutListImage,
    duration: '20 minutes',
    difficulty: 'mild',
    readmeMarkdown: scrollFadeoutListMarkdown,
    startSnippet: scrollFadeoutListStart,
    solutionSnippet: scrollFadeoutListSolution,
  },
  {
    name: 'Animated stripes',
    slug: 'animated-stripes',
    language: 'HTML',
    image: animatedStripesImage,
    duration: '25 minutes',
    difficulty: 'hot',
    readmeMarkdown: animatedStripesMarkdown,
    startSnippet: animatedStripesStart,
    solutionSnippet: animatedStripesSolution,
  },
  {
    name: 'Slide-in confirmation',
    slug: 'slide-in-confirmation',
    language: 'JSX',
    image: slideInConfirmationImage,
    duration: '20 minutes',
    difficulty: 'spicy',
    readmeMarkdown: slideInConfirmationMarkdown,
    startSnippet: SlideInConfirmationStart,
    solutionSnippet: SlideInConfirmationSolution,
  },
]

export const lessonsMeta = lessons.map((lesson) => {
  const { readmeMarkdown, startSnippet, solutionSnippet, ...meta } = lesson
  return meta
})
