<template>
	<div
		class="upload-drop-zone"
		@drop.prevent="onDrop"
		@dragover.prevent
	>
		<div
			class="dotted-container"
		>
			Drop to upload
		</div>
	</div>
</template>

<script>
export default {
	emits: ['drop-file'],
	methods: {
		onDrop(event) {
			if (event.dataTransfer.items) {
				for (const item of event.dataTransfer.items) {
					const file = item.getAsFile();
					this.$emit('drop-file', file);
				}
			} else {
				// eslint-disable-next-line no-console
				console.log(event.dataTransfer.files);
			}
		},
	},
};
</script>

<style scoped>
.upload-drop-zone {
	position: absolute;
	width: 100%;
	height: 100%;
	z-index: 1;
	padding: 32px;
	background-color: rgba(0, 0, 0, 0.25);
}

.dotted-container {
	display: grid;
	place-items: center;
	pointer-events: none;
	width: 100%;
	height: 100%;
	border: 8px dashed #fff;
	border-radius: 32px;

	color: #fff;
	font-family: system-ui;
	text-transform: uppercase;
	font-size: 24px;
	font-weight: bold;
	letter-spacing: 2px;
}
</style>
