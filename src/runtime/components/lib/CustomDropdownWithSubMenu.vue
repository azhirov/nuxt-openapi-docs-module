<template>
  <div class="relative">
    <button
      @click="isOpen = !isOpen"
      type="button"
      class="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-black dark:text-gray-300/75"
      :class="{open: isOpen}"
    >
      <b>{{ selectedText ? selectedText : 'Select Library' }}</b>
      <svg class="w-4 h-4 fill-current rotate-icon" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5"></path>
      </svg>
    </button>

    <transition name="dropdown">
      <ul
        v-if="isOpen"
        class="dropdown-list origin-top-right absolute left-0 mt-2 ml-0 w-56 rounded-md shadow-lg bg-white dark:bg-black dark:text-gray-300/75 ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <li
          v-for="(item, index) in items"
          :key="index"
          @click="handleItemClick(index)"
          role="menuitem"
          class="border block px-4 py-2 m-0 text-sm text-gray-700 hover:bg-white hover:text-gray-800 dark:bg-black dark:hover:bg-gray-800 dark:text-gray-300/75"
        >
          <template v-if="item">
            <div class="flex justify-between cursor-pointer">
              <span class="flex flex-grow">{{ index }}</span>
                <span class="flex flex-grow" style="justify-content: end;">
                <svg class="h-4 w-4 ml-2 self-center" style="display: initial;" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </span>
            </div>

            <ul class="sub-menu" v-if="preSelectedSnippet === index">
              <li
                v-for="(library) in item"
                :key="library"
                @click="handleItemClick(index, library)"
                class="bg-gray-100 hover:bg-gray-200 dark:bg-black dark:hover:bg-gray-800 dark:text-gray-300/75 block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {{ library }}
              </li>
            </ul>
          </template>
          <template v-else>
            {{ item.snippet }}
          </template>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script>

export default {
  props: {
    items: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      preSelectedSnippet: 'javascript',
      selectedSnippet: 'javascript',
      selectedLibrary: 'xmlhttprequest',
    };
  },
  computed: {
    selectedText() {
      return this.selectedSnippet + ' / ' + this.selectedLibrary;
    }
  },
  methods: {
    handleItemClick(snippet, library = null) {
      if (!library) {
        this.preSelectedSnippet = snippet;
      } else {
        this.selectedSnippet = snippet;
        this.selectedLibrary = library;
        this.$emit('select', snippet, library);
        this.isOpen = false;
      }
    },
  },
};
</script>

<style scoped>
  button:focus-visible {
    outline: 2px solid rgba(156, 163, 175, var(--tw-text-opacity));
    outline-offset: 2px;
  }

  ul[role='menu'] {
    z-index: 20;
  }

  .dropdown-enter-active,
  .dropdown-leave-active {
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .dropdown-enter-active {
    opacity: 0;
    transform: translateY(-0.5rem) scale(0.98);
  }

  .dropdown-leave-active {
    opacity: 0;
    transform: translateY(-0.5rem) scale(0.98);
  }

  .dropdown-enter {
    opacity: 0;
    transform: translateY(-0.5rem) scale(0.98);
  }

  .dropdown-leave-to {
    opacity: 0;
    transform: translateY(-0.5rem) scale(0.98);
  }

  .dropdown-list {
    max-height: 300px;
    overflow-x: auto;
  }

  .sub-menu {
    margin: 0;
  }

  .menu-item {
    border: 1px solid #eaeaea;
    cursor: pointer;
  }

  .sub-menu-item {
    background-color: #f6f6f6;
    cursor: pointer;
  }

  .sub-menu-item:hover {
    background-color: #e8e8e8;
  }

  @media (max-width: 639px) {
    .dropdown-enter-active,
    .dropdown-leave-active {
      transition: opacity 0.2s ease-out, transform 0.2s ease-out;
    }

    .dropdown-enter,
    .dropdown-leave-to {
      opacity: 0;
      transform: translate(0, -20px);
    }

    .dropdown-leave-active {
      position: absolute;
      width: 100%;
    }

    .dropdown-list {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #fff;
      z-index: -1;
    }
  }
</style>
