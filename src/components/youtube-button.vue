<template>
	<a
		:href="props.href"
		target="_blank"
		role="button"
		rel="noopener noreferrer nofollow"
		class="px-4 py-1 rounded-lg border text-brand-white font-semibold border-brand-secondary/60 bg-red-800 hover:bg-red-700 transition-colors flex items-center gap-1 focus:ring-brand-secondary focus:border-brand-secondary focus-visible:outline -brand-secondary"
	>
		<slot>
			<YoutubeIcon />
			YouTube
		</slot>
	</a>
</template>
<script setup lang="ts">
import YoutubeIcon from './icons/youtube-icon.vue'
const props = defineProps<{ href: string }>()
</script>
