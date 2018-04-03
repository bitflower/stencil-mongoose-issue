# Stencil demo repo to showcase bundling issue with `mongoose`

Although is mainly a server side module it can be used in the browser (e.g. for validation, creating models etc.). Importing it into Stencil is buggy though.

This is presumably due to the "dynamic" flavor of the mongoose imports /requires. Read about it [here](https://github.com/Automattic/mongoose/issues/5365).

**Steps to reproduce:**

1. npm install
2. npm run dev

# Error in Chrome:

![Error in Chrome](https://github.com/bitflower/stencil-mongoose-issue/raw/master/error.png)
