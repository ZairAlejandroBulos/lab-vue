<template>
    <nav class="navbar bg-dark navbar-expand" data-bs-theme="dark">
        <div class="container-fluid">
            <a class="navbar-brand">TP VUE</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/map" class="nav-link">Donde Estamos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/instrumentos" class="nav-link">Instrumentos</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/grilla" class="nav-link">Grillla Instrumentos</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>