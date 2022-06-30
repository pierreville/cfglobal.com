# Flavour CSS

Flavour is a utility, desktop-first SCSS library made and maintained by [@friendsthatcode](https://www.friendsthatcode.co.uk). It grew out of a natural movement towards using small classes to control simple styles, allowing us to iterate on feedback quickly without unwanted side effects.

## History
Our original approach involved separating our SCSS into folders of varying complexity and was a significant step over what we had before.

Slowly over time as a team we started to write smaller single use classes allowing us to have finer control over how things were displayed.

We finally decided to go all-in on this utility-first approach.

## This just inline CSS?
You're not wrong to think that. 

In a way it is, however with CSS you have the power of media queries. Written correctly you can control any utility easily at any given breakpoint and this is what we do here. Using prefixes you can easily see and control padding, margin, widths, display properties and more with ease at any time.

## I don't like adding lots of classes to my HTML/templates
That's fair enough. If you'd like to get around that, then you can make your own components and apply the styles but it's really up to you how you'd like to do it. If you do, we suggest using @extend to generate components comprising of other utility classes.

## Controlling file size
Since we're generating so many classes you can end up with quite a big CSS file. To get around this we recommend using a tool like [Purge CSS](https://github.com/FullHuman/purgecss) to examine your templates and clean your CSS of all unused classes. Be careful though. These tools won't have any concept of dynamic classes so you'll need to account for this!

Purge CSS works really well in webpack/gulp etc, especially with our own setup [Straw](https://github.com/friendsthatcode/straw) which allows you to whitelist classes and account for the special characters that we use in Flavour.

## Links

In building Flavour, we took heavy inspiration from [ITCSS](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/) and [tailwindcss](https://tailwindcss.com/).

**Tailwind has some [great ideas](https://tailwindcss.com/docs/what-is-tailwind) which we recommend you check out.**