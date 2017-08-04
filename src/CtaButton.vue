<template>
	<button v-bind:disabled="loading"><span v-html="textRendered"></span></button>
</template>

<script>
	export default {
		data() {
			return {
				textRendered: this.text
			}
		},
		props: {
			loading: {
				type: [Boolean],
				required: true
			},
			text: {
				type: [String],
				required: true
			},
			loadingText: {
				type: [String],
				required: true
			}
		},
		watch: {
			loading (isLoading) {
				this.textRendered = (isLoading) ? this.loadingText : this.text;
			}
		}
	}
</script>
