<template>
  <ValidationProvider
    ref="provider"
    v-slot="{ errors }"
    :rules="{ image: true, size: maxSize }"
    :name="name"
  >
    <div class="image-uploader-container">
      <div class="img-wrapper fs-80">
        <div class="inside fs-56">
          <img
            v-if="background"
            :src="background"
            class="input-wrapper"
          >
          <b-icon
            v-else
            class="default-img"
            icon="person-fill"
          />
        </div>

        <div
          v-if="hasError"
          class="error-wrapper fs-10"
        >
          <span class="error-msg">{{ errors[0] }}</span>
        </div>
      </div>
      <div class="file-input-container">
        <input
          ref="attachment"
          class="d-none"
          type="file"
          accept="image/*"
          @change="onFileChange"
        >
        <span
          class="btn-upload"
          @click="$refs.attachment.click()"
        >
          <b-icon
            class="upload-icon fs-14"
            icon="camera"
          />
        </span>
      </div>
    </div>
  </ValidationProvider>
</template>

<script>
import { mapActions } from "vuex"

export default {
  props: {
    maxSize: {
      type: Number,
      default: 1000 * 5 // in kilobytes
    },
    defaultImage: {
      type: String,
      default: ""
    },
    text: {
      type: String,
      default: ""
    },
    extentions: {
      type: Array,
      default: () => {
        return ["png", "jpg", "jpeg"]
      }
    },
    name: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      background: null,
      hasError: false
    }
  },
  created() {
    this.background = this.defaultImage
  },
  methods: {
    ...mapActions(["ShowToast"]),

    async onFileChange(changeEvent) {
      const extension = changeEvent.target.files[0].name.split(".").pop()
      if (!this.extentions.includes(extension)) {
        this.ShowToast({
          title: this.$t("GLOBAL_FAILED"),
          type: "danger",
          message: this.$t("GLOBAL_IMAGE_FORMAT")
        })
        return false
      }

      const uploadedImage = changeEvent.target.files[0] || ""
      const { valid } = await this.$refs.provider.validate(uploadedImage)
      if (!valid) {
        return (this.hasError = true)
      }

      if (!uploadedImage) return false
      this.hasError = false
      const fileReader = new FileReader()
      fileReader.onload = (loadEvent) => {
        this.background = loadEvent.target.result
        this.$emit("image-upload", {
          background: this.background,
          uploadedImage
        })
      }
      fileReader.readAsDataURL(uploadedImage)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "./index";
</style>
