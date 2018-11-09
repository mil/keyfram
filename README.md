# Kf - Sass Keyframe Animation Library [![Build Status](https://travis-ci.org/mil/kf-sass.svg?branch=master)](https://travis-ci.org/mil/kf-sass)

**Kf** is a SCSS library which makes composing CSS keyframe-based animations simple.

[![Demo Animation as a GIF](scss/resource/demo_animation.gif)](kf-sass.com)

A single `@import` away; Kf lets you define animations in a simple [SCSS map format](http://kf-sass.com/guide/animation-maps/) and then modify and compose your animations together using a collection of self-explanatory [mixins](http://kf-sass.com/mixins). Kf takes care of the laborious work of translating your animation into CSS keyframes, freeing you up to focus on your animation itself.

You can use Kf for creating anything from simple button hovers to intricately timed and sequenced animations spanning over multiple elements (once only thought feasible by using javascript). Install via [NPM](https://www.npmjs.com/package/kf-sass) or get the [single-file import](https://raw.githubusercontent.com/mil/kf-sass/master/dist/kf-1.0.0.scss) to get started.

**Live demos available at:**
- [Documentation site](http://kf-sass.com)

## Overview of Kf
- Modular / composition-focused SCSS animation library
- Available as a [single SCSS file](https://raw.githubusercontent.com/mil/kf-sass/master/dist/kf-1.0.0.scss) `@import` (no dependencies)
- Great and simple for quickly for creating animations
- Documented through examples at [kf-sass.com](http://kf-sass.com)
- Well-thought out design (mixin-composability, animation-map flexibility etc.)
- Small readable source-code & plently of [unit tests](/test)

## Installation & Basic Usage
Grab the single-file distribution release or install via NPM:
```bash
npm install --save kf-sass
```

Next, include in your SCSS file:
```scss
@import 'relative/path-to/kf.scss';
```

From here the most basic example would look like:
```scss
.sliding-box {
  $animation-map: ('div': ( margin-left: ( 0ms: 0%, 300ms: 30%, 2000ms: 100% ) ));
  @include kf($animation-map);
}
```


## Documentation
Learn more at the [documentation site](http://kf-sass.com).

**Available Mixins:**

| Mixin                                                | Purpose                                                                  |
| -                                                    | -                                                                        |
| [kf](http://kf-sass.com/mixins/kf)                   | Generate animation keyframes from an animation map.                      |
| [kf-chain](http://kf-sass.com/mixins/kf-chain)       | Run multiple animations in order sequentially                            |
| [kf-ease](http://kf-sass.com/mixins/kf-ease)         | Apply easing to an animation                                             | 
| [kf-lag](http://kf-sass.com/mixins/kf-lag)           | Add lag time at the end of an animation                                  |
| [kf-lead](http://kf-sass.com/mixins/kf-lead)         | Add lead time before the start of an animation                           |
| [kf-loop](http://kf-sass.com/mixins/kf-loop)         | Loop an animation a given number of times                                |
| [kf-mirror](http://kf-sass.com/mixins/kf-mirror)     | Run an animation sequentially forward and then in reverse                |
| [kf-parallel](http://kf-sass.com/mixins/kf-parallel) | Run multiple animations in parallel                                      |
| [kf-reverse](http://kf-sass.com/mixins/kf-reverse)   | Run an animation in reverse                                              |
| [kf-sleep](http://kf-sass.com/mixins/kf-sleep)       | Add sleep (do nothing) time to an animation within a kf-chain            |
| [kf-stagger](http://kf-sass.com/mixins/kf-stagger)   | Run multiple animations sequentially staggering the start time of each   |
| [kf-stretch](http://kf-sass.com/mixins/kf-stretch)   | Stretch an animation's timing values over a given time or by a multiplier|
| [kf-debug](http://kf-sass.com/mixins/kf-debug)       | Visually debug an animation                                              |
