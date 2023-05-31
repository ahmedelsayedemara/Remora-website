import Vue from "vue"
import { ValidationProvider, ValidationObserver } from "vee-validate"
import TextField from "@/components/Shared/Forms/TextField/index.vue"
import TextAreaField from "@/components/Shared/Forms/TextAreaField/index.vue"
import SelectField from "@/components/Shared/Forms/SelectField/index.vue"
import SelectSearch from "@/components/Shared/Forms/SelectSearch/index.vue"
import CheckboxField from "@/components/Shared/Forms/CheckboxField/index.vue"
import RadioButton from "@/components/Shared/Forms/RadioButton/index.vue"
import DateTimePicker from "@/components/Shared/Forms/DateTimePicker/index.vue"
import Button from "@/components/Shared/Forms/Button/index.vue"
import Toast from "@/components/Shared/Toast/index.vue"
import FormValidation from "@/components/Shared/FormValidation/index.vue"
import DefaultLayout from "@/layouts/DefaultLayout/index.vue"
import SimpleCard from "@/components/Shared/Cards/SimpleCard/index.vue"
import Loading from "@/components/Shared/Loading/index.vue"

const components = {
  ValidationProvider,
  ValidationObserver,
  TextField,
  TextAreaField,
  SelectField,
  SelectSearch,
  CheckboxField,
  RadioButton,
  DateTimePicker,
  Button,
  Toast,
  FormValidation,
  DefaultLayout,
  SimpleCard,
  Loading
}

Object.entries(components).forEach(([name, component]) => {
  Vue.component(name, component)
})
