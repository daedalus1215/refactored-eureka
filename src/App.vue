<template>
  <div id="app" class="row d-flex justify-content-center">
    <div class="col-md-6 mt-3">
      <div class="card">
        <div class="card-header">Newsletter</div>
        <div class="card-body">
          <form @submit.prevent="submit">
            <div class="form-group">
              <EmojiInput v-model="emoji" :options="{ position: bottom }" />
            </div>
            <div class="mb-2">
              <EmailInput v-model:email="newsletterEmail" />
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import EmailInput from './components/EmailInput.vue';
import EmojiInput from './components/EmojiInput.vue';

export default {
  name: "App",
  components: {
    EmailInput,
    EmojiInput
  },
  data() {
    return {
      newsletterName: "",
      newsletterEmail: "",
      emoji: '',
    };
  },
  methods: {
    submit() {
      console.log("Newletter Submitted", {
        name: this.newsletterName,
        email: this.newsletterEmail,
      });
    },
  },
};
</script>

<style src="bootstrap/dist/css/bootstrap.css"></style>
