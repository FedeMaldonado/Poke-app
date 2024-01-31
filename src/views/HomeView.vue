<script setup></script>

<template>
  <article class="justify-content-center text-align-center text-center mt-5">
    <h1 class="mb-4">Welcome to Poke app</h1>
    <h3 class="mt-5 opacity-50">
      In this application you can see the statistics of the pokemon and add your
      favorite pokemon to your list.
    </h3>
    <br />
    <section class="d-flex justify-content-center mx-auto m-5">
      <h5></h5>
      <div class="card bg-danger shadow" style="width: 20rem">
        <div class="card-body">
          <h5 class="card-title">Developer of this application:</h5>

          <section class="d-flex justify-content-center align-items-center">
            <a
              href="https://github.com/FedeMaldonado"
              target="_blank"
              class="card-link"
            >
              <img
                src="@/icons/github.svg"
                alt="github"
                class="img-fluid"
                style="width: 40px"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/federico-maldonado-213107225/"
              target="_blank"
              class="card-link"
            >
              <img
                src="@/icons/linkedin.svg"
                alt="linkedin"
                class="img-fluid"
                style="width: 50px"
              />
            </a>
          </section>
        </div>
      </div>
    </section>
  </article>
</template>

<style>
.developer {
  display: flex;
  flex-direction: column;
}
</style>
