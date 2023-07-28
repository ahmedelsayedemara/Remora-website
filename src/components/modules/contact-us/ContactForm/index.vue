<template>
  <b-container class="contact-form">
    <b-row class="justify-content-center">
      <b-col cols="12" lg="7">
        <b-row class="mb-4">
          <b-col>
            <h3 class="fs-32">{{ $t("CONTACT_US.CONTACT_FORM.TITLE") }}</h3>
          </b-col>
        </b-row>
        <FormValidation @handleSubmit="onSubmit">
          <b-form>
            <!-- <b-row class="mb-4">
            <b-col>
              <SelectSearch
                :customArrow="true"
                id="name"
                v-model="formValues.category"
                type="text"
                :placeholder="$t('CONTACT_US.CONTACT_FORM.CATEGORY_PLACEHOLDER')"
              />
            </b-col>
          </b-row> -->
            <b-row class="mb-4">
              <b-col>
                <TextField
                  id="email"
                  v-model="formValues.email"
                  type="email"
                  :placeholder="$t('CONTACT_US.CONTACT_FORM.EMAIL_PLACEHOLDER')"
                  :name="$t('CONTACT_US.CONTACT_FORM.EMAIL')"
                  rules="required|email"
                />
              </b-col>
            </b-row>
            <b-row class="mb-5">
              <b-col>
                <p class="fs-12 mb-0">
                  {{ $t("CONTACT_US.CONTACT_FORM.FIRST_P") }}
                </p>
              </b-col>
            </b-row>
            <b-row class="mb-4">
              <b-col>
                <TextAreaField
                  no-resize
                  rows="8"
                  id="message"
                  v-model="formValues.message"
                  :placeholder="$t('CONTACT_US.CONTACT_FORM.MESSAGE_PLACEHOLDER')"
                  :name="$t('CONTACT_US.CONTACT_FORM.MESSAGE')"
                  rules="required"
                />
              </b-col>
            </b-row>
            <b-row class="mb-5">
              <b-col>
                <p class="fs-12">
                  {{ $t("CONTACT_US.CONTACT_FORM.SECOND_P") }}
                </p>
              </b-col>
            </b-row>
            <b-row>
              <b-col class="d-flex justify-content-end">
                <Button variant="secondary" customClass="btn-secondary" type="submit">{{
                  $t("CONTACT_US.CONTACT_FORM.BTN")
                }}</Button>
              </b-col>
            </b-row>
          </b-form>
        </FormValidation>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      formValues: {
        // category: "",
        email: "",
        message: ""
      }
    }
  },
  methods: {
    onSubmit() {
      this.$emit("success");
      this.formValues.email = ""
      this.formValues.message = ""
    }
  }
}
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
