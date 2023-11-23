<script setup lang="ts">



</script>
<template>
    <div class="row ">
        <div class="d-flex ">

            <h3>
                儲存庫功能 :
            <slot name="header">

            </slot>
            </h3>
            <router-link to="/" class="ms-auto">返回</router-link>
        </div>
        <hr />
        <div >
            <h3>展示 :</h3>
            <slot name="content">

            </slot>
        </div>
        <hr />
        <slot name="codeInjection">

        </slot>
    </div>


</template>
