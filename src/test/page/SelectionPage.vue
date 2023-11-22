<script setup lang="ts">
import {ref} from "vue";
import {useSelectionStore } from "../../store/SelectionStore";
import StorePage from "../../components/StorePage.vue";

</script>

<template>
	<div class="container mt-2">
		<StorePage>
			<template #header>
				掛載組件後，從後端取得選項塞入清單
			</template>
			<template #content>
				<div class="row">
					<div class="col-5">
						<select class="form-select form-select-lg mb-3" aria-label="Large select example">
						<option selected>Open this select menu</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
					</div>
				</div>

			</template>
		</StorePage>

	</div>
</template>
