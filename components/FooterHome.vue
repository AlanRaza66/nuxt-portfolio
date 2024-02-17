<script setup lang="ts">
import { useToast } from "vue-toast-notification";
import { errorConfig } from "~/utils/configs/errorConfig";
import { validateEmail } from "~/utils/strings/validateEmail";
import { validateFirstName } from "~/utils/strings/validateFirstNameContact";
import { validateName } from "~/utils/strings/validateNameContact";
import { validateObject } from "~/utils/strings/validateObjetContact";

import facebook from "../assets/images/facebook.png";
import github from "../assets/images/github.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import whatsapp from "../assets/images/whatsapp.png";

const toast = useToast();

const familyname: Ref<string> = ref("");
const firstname: Ref<string> = ref("");
const email: Ref<string> = ref("");
const subject: Ref<string> = ref("");
const message: Ref<string> = ref("");

const errors: any = ref({
  name: null,
  firstName: null,
  email: null,
  tel: null,
  objet: null,
  message: null,
});

const fatalError: Ref<string | null> = ref(null);

const haveError = computed(() => {
  let result = false;

  for (const key in errors.value) {
    if (Object.hasOwnProperty.call(errors.value, key)) {
      if (errors.value[key] !== null) {
        result = true;
        break;
      }
    }
  }

  return result;
});

const isLoading = ref(false);

const submit = async () => {
  if (!haveError.value && !isLoading.value) {
    isLoading.value = true;
    fatalError.value = null;

    const data: any = {
      name: familyname.value,
      firstName: firstname.value,
      email: email.value,
      subject: subject.value,
      body: message.value,
    };

    const formData = new FormData();

    for (const key in data) {
      if (Object.hasOwnProperty.call(data, key)) {
        formData.append(key, data[key]);
      }
    }

    const { error: fetchError } = await useFetch("/api/contact", {
      method: "POST",
      body: formData,
      key: `${Math.random()}`,
    });

    if (fetchError.value === null || fetchError.value === undefined) {
      toast.success("Your message was successfully send", {
        duration: 5000,
      });
    } else {
      if (isNuxtError(fetchError.value)) {
        fatalError.value =
          fetchError.value.data?.message ??
          errorConfig.DEFAULT_UNKNOWN_ERROR_MESSAGE;

        if (fetchError.value.data?.data?.errorMessages) {
          const errorMessages = fetchError.value.data?.data?.errorMessages;

          for (const key in errorMessages) {
            if (Object.hasOwnProperty.call(errorMessages, key)) {
              errors.value[key] = errorMessages[key].message;
            }
          }
        }
      } else {
        fatalError.value = errorConfig.DEFAULT_UNKNOWN_ERROR_MESSAGE;
      }
      toast.error(
        fatalError.value ? fatalError.value : "Something went wrong",
        {
          duration: 5000,
        }
      );
    }

    isLoading.value = false;
  }
};

const sendToast = () => {
  toast.success("Your message was successfully send", {
    duration: 5000,
  });
};

const socialMedia = [
  {
    name: "facebook",
    logo: facebook,
    link: "https://www.facebook.com/alan.raza.587",
    contact: "Alan Raza",
  },
  {
    name: "github",
    logo: github,
    link: "https://github.com/AlanRaza66",
    contact: "AlanRaza66",
  },
  {
    name: "linked",
    logo: linkedin,
    link: "https://www.linkedin.com/in/alan-razafinimanana-9340861a1/",
    contact: "Alan Razafinimanana",
  },
  {
    name: "instagram",
    logo: instagram,
    link: "https://www.instagram.com/alan._.raza/",
    contact: "alan._.raza",
  },
  {
    name: "whatsapp",
    logo: whatsapp,
    link: "https://wa.me/261341027330",
    contact: "+261 34 10 273 30",
  },
];
</script>
<template>
  <div
    class="grid w-full h-full grid-cols-3 grid-rows-4 gap-4 text-light md:grid-rows-4 md:flex md:flex-col md:gap-3"
  >
    <div
      class="relative flex items-center pt-[1rem] justify-center col-span-2 row-span-4 overflow-hidden rounded cursor-pointer overlay-activator bg-third md:col-span-5 md:row-span-2"
    >
      <form
        class="flex flex-wrap w-full h-fit"
        @submit.prevent="submit"
        method="post"
      >
        <h6
          class="w-full mb-2 text-4xl font-bold text-center text-white md:text-2xl"
          @click="sendToast"
        >
          Send a message
        </h6>
        <InputComponent
          class="w-1/2 md:w-full"
          label="Name"
          :model-value="familyname"
          :validator="validateName"
          :error-message="errors.name"
          @update:model-value="(newValue) => (familyname = newValue)"
          required
        /><InputComponent
          class="w-[calc(50%+12px)] md:w-full ml-[-12px] md:ml-0"
          label="Firstname"
          :model-value="firstname"
          :validator="validateFirstName"
          :error-message="errors.firstName"
          @update:model-value="(newValue) => (firstname = newValue)"
          required
        /><InputComponent
          class="w-full md:w-full"
          label="Email"
          :model-value="email"
          :validator="validateEmail"
          :error-message="errors.email"
          @update:model-value="(newValue) => (email = newValue)"
          required
        /><InputComponent
          class="w-full"
          label="Subject"
          :model-value="subject"
          :validator="validateObject"
          :error-message="errors.objet"
          @update:model-value="(newValue) => (subject = newValue)"
          required
        />
        <div class="my-[8px] px-[12px] w-full">
          <div>
            <textarea
              class="h-fit min-h-[250px] w-full rounded-lg !overflow-hidden border-0 pt-[16px] pr-[12px] pl-[12px] text-base font-normal duration-500 bg-secondary bg-opacity-20 hover:bg-secondary focus:bg-secondary focus:text-black md:bg-opacity-100 text-white"
              label="Message"
              type="textarea"
              v-model="message"
              required
              >{{ message }}</textarea
            >
          </div>
        </div>
        <div class="flex items-center justify-end w-full">
          <button
            class="rounded-lg text-xl font-light px-[24px] mb-[24px] mr-[16px] py-[12px] bg-primary duration-500 hover:bg-opacity-70 border-none text-white"
            type="submit"
          >
            Send message
          </button>
        </div>
      </form>
    </div>
    <div
      class="relative flex flex-col items-center justify-center col-span-1 row-span-4 px-6 overflow-hidden rounded cursor-pointer overlay-activator bg-third md:col-span-5 md:row-span-2 md:aspect-auto py-[24px]"
    >
      <NuxtLink
        class="flex items-center w-full py-[6px]"
        v-for="media in socialMedia"
        :key="media.name"
        :href="media.link"
        target="_blank"
      >
        <img :src="media.logo" :alt="media.name" class="aspetc-square object-contain w-[64px] md:w-[50px] mr-3"/>
        <figcaption class="text-white">{{ media.contact }}</figcaption>
      </NuxtLink>
    </div>
  </div>
</template>
