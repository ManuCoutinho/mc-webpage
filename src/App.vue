<script setup lang="ts">
	import { RouterView } from 'vue-router'
</script>

<template>
	<RouterView />
</template>

<style scoped>
.n-space {
	padding: 16px;
	background-color: #cc128a;
}
.n-layout {
	display: flex;
	flex-direction: column;
}
.n-layout-header,
.n-layout-footer {
	background: rgba(128, 128, 128, 0.2);
	padding: 24px;
}

.n-layout-sider {
	background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
	background: rgba(128, 128, 128, 0.4);
}
</style>
