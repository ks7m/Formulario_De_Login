function entrar()  {
    const loading = document.getElementById ("loadingScreen");

    loading.style.display = "flex";

    setTimeout(() => {
        loading.style.display = "none";
        alert("Parabéns Marcelo");
    }, 2000);
}