<script setup lang="ts">
import {ref, onMounted, shallowRef} from "vue";
import {useSelectionStore } from "../../store/SelectionStore";
import StorePage from "../../components/StorePage.vue";
import monacoEditor from "../../components/VueMonacoEditor.vue";



const store = useSelectionStore();
// onMounted( () =>{
// 	store.Get();
// })


const code = ref('// some code...')
const editorRef = shallowRef()
const handleMount = (editor: {} ) => (editorRef.value = editor)

// your action
function formatCode() {
  editorRef.value?.getAction('editor.action.formatDocument').run()
}
const change  = (event: {}) =>
{
	console.log(event, editorRef.value)
}

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
}




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
							<option v-for="(option, index) in store.List.value" :value="option.Value" :key="index">
								{{ option.Text }}
							</option>
						</select>
					</div>
				</div>

			</template>
			<template #codeInjection>
				<div v-for="(f, index) in Object.entries(store.APIRegister.APIRegisterPool)" :key="index" >
					<h4>{{ f[0] }} :{{ f[1].toString().slice(0, f[1].toString().indexOf('{'))  }}</h4>
					<monacoEditor 
	
						:code="f[1].toString()" 
						:inject="(c : Function ) =>{ store.APIRegister[f[0]] =  c }" >
	
					</monacoEditor>
	
				</div>
	
			</template>
	
		</StorePage>


	</div>
</template>
