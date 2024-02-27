<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    default: "",
    required: true,
  },
  type: {
    type: String,
    default: "text",
  },
  modelValue: {
    type: [String, Number],
    required: true,
  },
  validator: {
    type: Function,
    required: false,
    default: null,
  },
  errorMessage: {
    type: String,
    required: false,
    default: null,
  },
  required: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});
const errorMessage: Ref<string | null> = ref(null);
const isValid = computed(() => errorMessage.value === null);
const emit = defineEmits([
  "update:modelValue",
  "valid:modelValue", // the valid model value as argument
  "invalid:modelValue", // the error message as argument
]);

watch(
  () => props.modelValue,
  async (newValue) => {
    if (props.validator !== null) {
      const modelValueValidationResult = await props.validator(newValue);

      if (!modelValueValidationResult.isValid) {
        emit("invalid:modelValue", modelValueValidationResult.message);
        errorMessage.value = modelValueValidationResult.message;
      } else {
        emit("valid:modelValue", modelValueValidationResult.result);
        errorMessage.value = null;
      }
    }
  }
);

watch(
  () => props.errorMessage,
  (newValue) => {
    // if the props change, the error also change
    errorMessage.value = newValue;
  }
);
</script>
<template>
  <div class="my-[8px] px-[12px]">
    <div>
      <label
        :for="label"
        class="relative m-auto w-full !overflow-hidden"
      >
        <input
          :id="label"
          :value="modelValue"
          :type="type"
          class="w-full rounded-lg !overflow-hidden border-0 pt-[16px] pr-[12px] pl-[12px] h-[56px] text-base font-normal bg-secondary bg-opacity-20 text-white"
          :class="disabled ? 'bg-third cursor-not-allowed text-white' : ''"
          placeholder="&nbsp;"
          :required="required"
          :disabled="disabled"
          @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        />
        <span
          class="absolute top-[0px] left-[12px] text-base font-light label text-white"
          >{{ label }}</span
        >
        <span
          class="focus-bg absolute top-0 left-0 w-full h-full bg-dark bg-opacity-50 -z-[1] scale-x-0 origin-left"
        />
      </label>
      <p class="text-red-300">{{ errorMessage }}</p>
    </div>
  </div>
</template>
<style scoped>
.label {
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  pointer-events: none;
}
input {
  transition: all 0.15s ease;
}
input:hover {
  background-color: rgb(146 220 229);
}
input:not(:placeholder-shown) + .label {
  top: -6px;
  color: rgba(#000, 0.5);
  transform: translate3d(0, -12px, 0) scale(0.75);
}
input:focus {
  background-color: rgb(146 220 229);
  outline: none;
  color: #000;
}
input:focus .label {
  color: rgba(0, 137, 208);
}
input:focus .focus-bg {
  transform: scaleX(1);
  transition: all 0.1s ease;
}
</style>
