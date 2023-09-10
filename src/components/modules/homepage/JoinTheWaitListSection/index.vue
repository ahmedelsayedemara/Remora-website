<template>
  <b-container fluid class="join-the-waitlist" ref="myDiv">
    <b-row class="w-75 m-auto">
      <b-col class="mb-5 pb-2">
        <h3 class="fs-48 fw-700 text-center mb-4">{{ data.title }}</h3>
        <p class="fs-20 text-center w-75 m-auto">{{ data.text }}</p>
      </b-col>
    </b-row>
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col cols="12" xl="4">
          <ValidationObserver ref="observer" v-slot="{ handleSubmit }">
            <b-form @submit.prevent="handleSubmit(onSubmit)">
              <div v-for="(input, index) in data.inputs" :key="index" class="mb-3">
                <div v-if="input.type === 'phone-number'">
                  <label class="fs-12 fw-400">{{ input.label }}</label>
                  <PhoneField rules="required" v-model="form.phone" :name="input.label" />
                </div>
                <div v-else-if="input.type === 'checkbox'" class="d-flex align-items-center">
                  <CheckboxField v-model="form.joinAsLeader" />
                  <label class="checkbox-label fs-16 fw-400 mb-0">{{ input.label }}</label>
                </div>
                <div v-else>
                  <label class="fs-12 fw-400">{{ input.label }}</label>
                  <TextField
                    v-model="form.email"
                    rules="required|email"
                    :name="input.label"
                    :type="input.type"
                    :placeholder="input.placeholder"
                    class="w-100"
                  />
                </div>
              </div>
              <div class="btn-container">
                <Button customClass="w-100" type="submit" class="w-100 mt-4" :loading="loading">{{
                  data.btnText
                }}</Button>
              </div>
            </b-form>
          </ValidationObserver>
        </b-col>
      </b-row>
    </b-container>
  </b-container>
</template>

<script>
export default {
  name: "JoinTheWaitListSection",
  props: {
    data: {
      type: Object,
      default: () => ({
        title: "",
        text: "",
        btnText: "",
        inputs: [{}]
      })
    },
    loading: {
      type: Boolean,
      default: false
    },
    resetForm: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dropdownOptions: {
        showDialCodeInSelection: true,
        showFlags: true
      },
      form: {
        phone: "",
        joinAsLeader: "",
        email: ""
      }
    }
  },
  watch: {
    resetForm: {
      immediate: true,
      handler(val) {
        if (val) this.handleResetForm()
      }
    }
  },
  methods: {
    onSubmit() {
      this.$emit("handleContactUs", this.form)
    },
    handleResetForm() {
      this.$refs.observer.reset()
      this.form = {
        phone: "",
        joinAsLeader: "",
        email: ""
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
