<template>
  <v-card height="100%" color="primary">
    <v-img :src="bike.image" height="500" dark></v-img>
    <v-card-title>{{ getCardTitle(bike) }}</v-card-title>
    <v-divider class="mx-4"></v-divider>
    <v-row no-gutters>
      <v-col>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-gauge</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ bike.power }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-engine</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ bike.displacement }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon>mdi-palette</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ bike.color }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-col>
      <v-col>
        <v-card-text>
          {{ bike.description }}
        </v-card-text>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    bike: {
      type: Object,
      default: () => ({})
    }
  },
  methods: {
    getCardTitle(bike) {
      return `${bike.manufacturer} - ${bike.model} - ${bike.year}`
    }
  }
}
</script>
