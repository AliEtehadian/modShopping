<template>
  <div dir="ltr">
    <div class="row d-flex">
      <div class="col-5 d-flex align-items-center justify-content-center px-5 py-1">
        <div class="d-flex flex-column col-9">
          <div class="row mx-auto pb-1">
            <h3 class="text-primary">Sign up</h3>
          </div>

          <vee-form :validation-schema="schema" @submit="register" :initial-values="userData">
            <!-- Name -->
            <div class="mb-3 d-flex flex-column">
              <vee-field
                type="text"
                name="name"
                class="py-2 px-3 text-gray-800 border border-gray-300 border-radius"
                placeholder="Enter Name"
              />
              <ErrorMessage class="text-danger px-3 pt-1" name="name" />
            </div>
            <!-- Email -->
            <div class="mb-3 d-flex flex-column">
              <vee-field
                name="email"
                type="email"
                class="py-2 px-3 text-gray-800 border border-gray-300 border-radius"
                placeholder="Enter Email"
              />
              <ErrorMessage class="text-danger px-3 pt-1" name="email" />
            </div>

            <!-- Password -->
            <div class="mb-3 d-flex flex-column">
              <vee-field name="password" v-slot="{ field, errors }" :bails="false">
                <input
                  class="py-2 px-3 text-gray-800 border border-gray-300 border-radius"
                  v-bind="field"
                  type="password"
                  placeholder="Password"
                />
                <div class="text-danger px-3 pt-1" v-for="error in errors" :key="error">
                  {{ error }}
                </div>
              </vee-field>
            </div>
            <!-- Confirm Password -->
            <div class="mb-3 d-flex flex-column">
              <vee-field
                name="confirmed_password"
                type="password"
                class="py-2 px-3 text-gray-800 border border-gray-300 border-radius"
                placeholder="Confirm Password"
              />
              <ErrorMessage class="text-danger px-3 pt-1" name="confirmed_password" />
            </div>
            <!-- Country -->
            <div class="mb-3 d-flex flex-column">
              <label class="inline-block mb-2">Country</label>
              <vee-field
                as="select"
                name="country"
                class="py-2 px-3 text-gray border border-gray-300 border-radius"
              >
                <option value="USA">USA</option>
                <option value="Mexico">Mexico</option>
                <option value="Germany">Germany</option>
              </vee-field>
              <ErrorMessage class="text-danger px-3 pt-1" name="country" />
            </div>
            <!-- TOS -->
            <div class="mb-3 d-flex flex-column">
              <div class="d-flex align-items-center">
                <vee-field type="checkbox" name="tos" value="1" class="rounded" />
                <label class="px-2">Accept terms of service</label>
              </div>
              <ErrorMessage class="text-danger px-3 pt-1" name="tos" />
            </div>
            <div class="row px-3 pt-2">
              <button
                type="submit"
                class="text-white py-2 border-radius bg-primary"
                style="border: none"
                :disabled="reg_in_submission"
              >
                Submit
              </button>
            </div>
          </vee-form>
        </div>
      </div>

      <div class="row col-7 d-flex justify-content-center align-items-center bg-primary">
        <img class="w-75" :src="require('../assets/Dark mode-pana.png')" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegisterForm',
  data: () => ({
    schema: {
      name: 'required|min:3|max:100|alpha_spaces',
      email: 'required|min:3|max:100|email',
      age: 'required|min_value:18|max_value:100',
      password: 'required|min:3|max:100',
      confirmed_password: 'confirmed:@password',
      country: 'required|excluded:USA',
      tos: 'required',
    },
    userData: { country: 'USA' },
    reg_in_submission: false,
    reg_show_alert: false,
    reg_alert_varient: 'bg-blue-500',
    reg_alert_msg: 'please wait ! your account is being created.',
  }),
  methods: {
    async register(values) {
      this.reg_in_submission = true;
      this.reg_show_alert = true;
      this.reg_alert_varient = 'bg-blue-500';
      this.reg_alert_msg = 'please wait ! your account is being created.';

      try {
        await this.$store.dispatch('register', values);
      } catch (error) {
        console.log(error);
        this.reg_in_submission = false;
        this.reg_alert_varient = 'bg-red-500';
        this.reg_alert_msg = 'An unexpected error occured. please try again later.';
        return;
      }

      this.reg_alert_varient = 'bg-green-500';
      this.reg_alert_msg = 'Success ! your account has been created.';
    },
  },
};
</script>

<style>
.border-radius {
  border-radius: 2rem;
}

.container__form {
  height: 100%;
  position: absolute;
  top: 0;
}
</style>
