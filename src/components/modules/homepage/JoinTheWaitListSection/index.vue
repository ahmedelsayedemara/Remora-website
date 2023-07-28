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
          <FormValidation @handleSubmit="onSubmit">
            <b-form>
              <div v-for="(input, index) in data.inputs" :key="index" class="mb-3">
                <div v-if="input.type === 'phone-number'">
                  <label for="" class="fs-12 fw-400">{{ input.label }}</label>
                  <vue-tel-input
                    autoDefaultCountry
                    :dropdownOptions="dropdownOptions"
                    v-model="phone"
                  >
                    <template #arrow-icon>
                      <b-icon-chevron-down class="mx-2"></b-icon-chevron-down>
                    </template>
                  </vue-tel-input>
                </div>
                <div v-else-if="input.type === 'checkbox'" class="d-flex align-items-center">
                  <CheckboxField v-model="joinAsLeader" />
                  <label class="checkbox-label fs-16 fw-400 mb-0">{{ input.label }}</label>
                </div>
                <div v-else>
                  <label for="" class="fs-12 fw-400">{{ input.label }}</label>
                  <TextField
                    v-model="email"
                    rules="required|email"
                    :name="input.label"
                    :type="input.type"
                    :placeholder="input.placeholder"
                    class="w-100"
                  />
                </div>
              </div>
              <div class="btn-container">
                <Button customClass="w-100" type="submit" class="w-100 mt-4">{{
                  data.btnText
                }}</Button>
              </div>
            </b-form>
          </FormValidation>
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
    }
  },
  data() {
    return {
      dropdownOptions: {
        showDialCodeInSelection: true,
        showFlags: true
      },
      phone: "",
      joinAsLeader: "",
      email: ""
    }
  },
  methods: {
    onSubmit() {
      this.$emit("success")
      this.email = ""
      this.phone = ""
      this.joinAsLeader = ""
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
