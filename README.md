# Inconsistent @apply Directive Behavior with Dynamically Rendered Components

This repository demonstrates an issue where Tailwind CSS's `@apply` directive does not consistently apply styles to dynamically rendered React components. The styles appear correctly only after a state change forces a re-render.

## Problem

The `@apply` directive is a powerful feature in Tailwind CSS, allowing for the reuse of utility classes.  However, in this example, when a component is dynamically rendered (e.g., based on state changes), the `@apply` directive seems to be ignored upon the component's first render. Styles only appear after an event triggers a subsequent render.

## Solution

The proposed solution involves using a different approach for applying the styles, such as manually importing and applying classes or using a different technique for handling dynamic components to ensure that Tailwind's `@apply` is processed effectively.