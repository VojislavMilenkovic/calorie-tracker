<template>
  <section>
    <h2 class="calculator-title">Please enter parametars</h2>
    <div class="calculator-content">
      <div class="error" v-if="error">
        <h2>To calculate your calories you must fill all the data!</h2>
      </div>
      <div class="calculator-data">
        <label for="age">Age</label>
        <input type="text" id="age" v-model="age" />
      </div>
      <div class="calculator-data">
        <span>Gender</span>
        <input type="radio" id="male" value="male" v-model="gender" />
        <label for="male">Male</label>
        <input type="radio" id="female" value="female" v-model="gender" />
        <label for="female">Female</label>
      </div>
      <div class="calculator-data">
        <label for="height">Height</label>
        <input type="number" id="height" placeholder="cm" v-model="height" />
      </div>
      <div class="calculator-data">
        <label for="weight">Weight</label>
        <input type="number" id="weight" placeholder="kg" v-model="weight" />
      </div>
      <div id="v-model-select" class="calculator-data">
        <label for="">Activity</label>
        <select v-model="activity">
          <option disabled value="">Please select your activity</option>
          <option>Little or No Exercise</option>
          <option>1-3 times per week</option>
          <option>4-5 times per week</option>
          <option>6-7 times per week</option>
          <option>6-7 hard workouts per week</option>
        </select>
      </div>
      <div>
        <button type="button" @click="calculateCalories">Calculate</button>
      </div>
      <div v-if="amr">
        <h2>Your Results</h2>
        <div>
          <span
            >To mantain your weight you need to enter
            {{ Math.round(amr) }}</span
          >
        </div>
        <div>
          <span
            >To lose 0.5 kg of your weight weekly you need to enter
            {{ Math.round(amr - 500) }}</span
          >
        </div>
        <div>
          <span
            >To lose 1 kg of your weight weekly you need to enter
            {{ Math.round(amr - 1000) }}</span
          >
        </div>
        <div>
          <button>Track your weight loss</button>
        </div>
        <div>
          <h3>You want to gain weight insted?</h3>
          <button @click="calculateGainWeight">
            Click here for weight gain calculation
          </button>
        </div>
        <div v-if="gainWeight">
          <div>
            <span
              >To gain 0.5 kg of your weight weekly you need to enter
              {{ Math.round(amr + 500) }}</span
            >
          </div>
          <div>
            <span
              >To gain 1 kg of your weight weekly you need to enter
              {{ Math.round(amr + 1000) }}</span
            >
          </div>
          <div>
            <button>Track your weight gain</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      age: "",
      gender: "",
      height: "",
      weight: "",
      activity: "",
      bmr: "",
      amr: "",
      error: "",
      gainWeight: false,
    };
  },
  methods: {
    calculateBmr() {
      if (this.gender === "female") {
        return (this.bmr =
          655.1 + 9.563 * this.weight + 1.85 * this.height - 4.676 * this.age);
      } else {
        return (this.bmr =
          66.47 + 13.75 * this.weight + 5.003 * this.height - 6.755 * this.age);
      }
    },
    calculateAmr() {
      if (this.activity === "Little or No Exercise") {
        return (this.amr = this.bmr * 1.2);
      } else if (this.activity === "1-3 times per week") {
        return (this.amr = this.bmr * 1.375);
      } else if (this.activity === "4-5 times per week") {
        return (this.amr = this.bmr * 1.55);
      } else if (this.activity === "6-7 times per week") {
        return (this.amr = this.bmr * 1.725);
      } else {
        return (this.amr = this.bmr * 1.9);
      }
    },
    calculateCalories() {
      if (
        this.age === "" ||
        this.gender === "" ||
        this.height === "" ||
        this.weight === "" ||
        this.activity === ""
      ) {
        this.error = true;
      } else {
        this.error = false;
        this.calculateBmr();
        this.calculateAmr();
      }
    },
    calculateGainWeight() {
      this.gainWeight = true;
    },
  },
};
</script>

<style scoped>

</style>