<template>
	<div class="px-8 py-6">
		<h1 class="text-4xl font-bold text-brand-primary">{{ props.titlePage }}</h1>
	</div>
</template>
<script setup lang="ts">
	const props = defineProps<{ titlePage: string }>()
</script>