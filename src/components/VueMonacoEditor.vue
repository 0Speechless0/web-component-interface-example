
  
<script setup lang="ts">
import { ref, shallowRef, defineProps } from 'vue';
import { loader } from "@guolao/vue-monaco-editor"

import * as monaco from "monaco-editor"
import editorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker"
import jsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker"
import cssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker"
import htmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker"
import tsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker"


self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === "json") {
      return new jsonWorker()
    }
    if (label === "css" || label === "scss" || label === "less") {
      return new cssWorker()
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return new htmlWorker()
    }
    if (label === "typescript" || label === "javascript") {
      return new tsWorker()
    }
    return new editorWorker()
  }
}

loader.config({ monaco })

const props = defineProps(["code", "inject"])
const  _code = ref(props.code);
_code.value = _code.value.toString().slice(_code.value.toString().indexOf('{')+1, _code.value.toString().indexOf('}')) 
const paramters = ref(
  props.code.toString().slice(props.code.toString().indexOf('()')+1, props.code.toString().indexOf(')'))
)
console.log("paramters", paramters);
const editorRef = shallowRef()
const handleMount = (editor: {} ) => (editorRef.value = editor)

// your action
function formatCode() {
  editorRef.value?.getAction('editor.action.formatDocument').run()
}

function createFunction(c : string)
{
	return new Function('params','clientInstance', `c`);
}

const MONACO_EDITOR_OPTIONS = {
  automaticLayout: true,
  formatOnType: true,
  formatOnPaste: true,
}
</script>

<template>
  <div>

      <vue-monaco-editor
      v-model:value="_code"
      theme="vs-dark"
      height="200px"
      language="javascript"

      @mount="handleMount"
    />
    <div class="d-flex justify-content-center">
      <button type="button" class="btn btn-secondary mt-2" @click="props.inject(createFunction(_code) )">
        注入
    </button>
    </div>
  </div>

</template>