<template>
  <div class="right flex items-center">
    <div class="files pr-4">
      <OpenApiDarkModeToggle :value="isDarkMode" @change="() => $emit('toggleDarkMode')" />
    </div>
    <div class="yaml">
      <button
        @click="downloadYaml"
        type="button"
        class="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 bg-blue dark:bg-blue"
        aria-haspopup="true"
      >
        Yaml
      </button>
    </div>
    <div class="search">
      <OpenApiSearch :current-locale="currentLocale" :file="file" :path="path" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    currentLocale: {
      type: String,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    files: {
      type: Object,
      required: true,
    },
    isDarkMode: {
      type: Boolean,
      required: true,
    },
    locales: {
      type: Object,
      required: true,
    },
  },
  computed: {

  },
  methods: {
    downloadYaml() {
      this.$openapidocBus.$emit('downloadYamlDoc');
    }
  },
};
</script>
<style scoped>
.fixed-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  background-color: white;
  opacity: 0.99;
}

.logo text {
  font-size: 16px;
  fill: #fff;
}

.right {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.files, .locales, .yaml {
  padding-right: 10px;
}
.selected {
  background-color: #ccc;
}
</style>
