<template>
<iframe src="http://localhost:8081" height=1000 width=1000 allow="fullscreen"></iframe>
</template>

<script>
export default {
  name: 'RenderStream',
  props: {
    camera: String
  }
}
</script>