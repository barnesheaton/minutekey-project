<template>
  <v-app>
    <v-app-bar app dense>
      <v-toolbar-title>Adam's Motorcycle Collection</v-toolbar-title>
      <v-spacer />
      <v-checkbox
        :value="$vuetify.theme.dark"
        class="checkbox"
        color="white"
        label="Dark Theme"
        @change="onToggleTheme"
      />
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <!-- Loading State -->
        <v-skeleton-loader v-if="isLoading" class="loader" type="image, article" />
        <!-- Error State -->
        <v-alert v-else-if="error" prominent type="error">
          <v-row align="center">
            <v-col class="grow">
              {{ error }}
            </v-col>
            <v-col class="shrink">
              <v-btn @click="getMotorcycleData">Try Again</v-btn>
            </v-col>
          </v-row>
        </v-alert>
        <!-- Success State -->
        <v-carousel v-else continuous cycle show-arrows hide-delimiters height="100%" elevation="4">
          <v-carousel-item v-for="(bike, index) in bikes" :key="index">
            <bike-slide :bike="bike" />
          </v-carousel-item>
        </v-carousel>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import BikeSlide from './components/BikeSlide'
import { getMotorcycles } from './mockServer.js'

export default {
  components: {
    BikeSlide
  },
  data() {
    return {
      isLoading: false,
      error: null,
      bikes: null
    }
  },
  mounted: function () {
    this.getMotorcycleData()
  },
  methods: {
    getMotorcycleData() {
      this.isLoading = true

      getMotorcycles()
        .then((data) => {
          this.bikes = data
          this.error = null
        })
        .catch((error) => {
          this.error = error
        })
        .finally(() => {
          this.isLoading = false
        })
    },
    onToggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
}
</script>

<style lang="scss">
.checkbox {
  padding-top: 16px !important;
}
.loader {
  height: 100%;
}
.v-skeleton-loader__image {
  height: 70%;
}
.v-card__subtitle {
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.container--fluid {
  padding: 50px;
  height: 100%;
}
</style>
