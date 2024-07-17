<script setup lang="ts">

import { NButton } from 'naive-ui'
import { RouterLink, RouterView } from 'vue-router'


</script>

<template>
	<n-space vertical size="large">
		<n-layout>
			<n-layout-header>Header</n-layout-header>
			<n-layout-content content-style="padding: 24px"> content here </n-layout-content>
			<n-layout-footer>Copyright © 2024 Todos os direitos reservados.</n-layout-footer>
		</n-layout>
		<n-button type="warning" tertiary>botão</n-button>
		<n-layout>
			<n-layout-header>Header</n-layout-header>
			<n-layout-content content-style="padding:24px"> 
				<RouterView /> 
			</n-layout-content>
			<n-layout-footer></n-layout-footer>
		</n-layout>
	</n-space>
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
