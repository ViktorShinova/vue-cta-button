# vue-cta-button

A Vue.js component that displays a call to action form button, and manages the state of the button.

## Installation

```js
npm install --save-dev vue-cta-button
```

### Browser

Include the script file, then install the component with `Vue.use(CtaButton);` e.g.:

```html
<script type="text/javascript" src="node_modules/vuejs/dist/vue.min.js"></script>
<script type="text/javascript" src="node_modules/vue-cta-button/dist/vue-cta-button.min.js"></script>
<script type="text/javascript">
  Vue.use(CtaButton);
</script>
```

### Module

```js
import CtaButton from 'vue-cta-button';
```

## Usage

Once installed, it can be used in a template as simply as:

```html
<vue-cta-button
  type="submit"
  v-bind:loading="isLoading"
  text="Enter Now"
  loadingText="<i class='fa fa-circle-o-notch fa-spin fa-fw'></i> Submitting..."
  class="btn btn-primary"
>
</vue-cta-button>
```
