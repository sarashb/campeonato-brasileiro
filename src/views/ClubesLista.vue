<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Classificação</h2>
    <template>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Clubes</th>
              <th class="text-left">Pontos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="clube of clubesLista" :key="clube.id">
              <td>{{ clube.nome }}</td>
              <td>{{ clube.pontos }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </template>
  </v-container>
</template>

<script>
export default {
  name: "ClubesLista",
  data() {
    return {
      clubesLista: [],
    };
  },
  created() {
    fetch("https://hackthon-decola.firebaseio.com/clubes-lista.json")
      .then((resposta) => resposta.json())
      .then((json) => {
        this.clubesLista = json;
      });
  },
};
</script>

<style scoped></style>
