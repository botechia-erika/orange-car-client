import styled from "styled-components";

export const AdminCtn = styled.div`
  --azul: #ff8400;
  --blanco: #ffffff;
  --gris-claro: #f5f5f5;
  --gris: #94a3b8;
  --gris-oscuro: #64748b;
  --negro: #000;

  body {
    font-size: 1.6rem;
    font-family: "Lato", sans-serif;
    background-color: var(--gris-claro);
  }
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  .fijar {
    overflow: hidden;
    height: 100vh;
  }

  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 3rem;
  }

  .sombra {
    box-shadow: 0px 9px 10px -10px rgba(0, 0, 0, 0.51);
    -webkit-box-shadow: 0px 9px 10px -10px rgba(0, 0, 0, 0.51);
    -moz-box-shadow: 0px 9px 10px -10px rgba(0, 0, 0, 0.51);
    background-color: var(--blanco);
    padding: 4rem;
    border-radius: 1.2rem;
  }

  header {
    background-color: var(--azul);
    text-align: center;
  }

  header h2 {
    padding: 1rem 0;
    margin: auto;
    color: var(--blanco);
    text-align: center;
    text-transform: uppercase;
  }

  .formulario {
    width: 95%;
    margin: 0 auto;
    padding: 10rem 0;
  }
  @media (min-width: 768px) {
    .formulario {
      padding: 1rem 0;
      width: 60rem;
    }
  }
  .formulario legend {
    font-size: 3.6rem;
    text-align: center;
    display: block;
    text-transform: uppercase;
    color: var(--blanco);
    margin-bottom: 4rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--azul);
  }
  .formulario .campo {
    display: grid;
    margin-bottom: 2rem;
  }

  .formulario label {
    color: var(--azul);
    font-size: 16px;
    text-align: center;
    margin-bottom: 2rem;
  }

  .formulario input[type="text"],
  .formulario input[type="number"] {
    background-color: var(--gris-claro);
    border-radius: 1rem;
    padding: 1rem;
    border: none;
    flex: 1;
    font-size: 15px;
  }
  button {
    background-color: #ff8400;
    border: none;
    text-align: center;
    margin-top: 2rem;
    color: var(--blanco);
    font-weight: 900;
    text-transform: uppercase;
    font-size: 1rem;
    border-radius: 15px;
    padding: 1rem;
    width: 50%;
    transition: background-color 300ms ease;
  }
  @media (min-width: 768px) {
    .formulario input[type="submit"] {
      display: block;
      padding: 1rem 5rem;
    }
  }
  .formulario input[type="submit"]:hover {
    background-color: #042a67;
    cursor: pointer;
  }

  .formulario select {
    flex: 1;
    padding: 1rem;
    border: none;
    border-radius: 1rem;
    text-align: center;
    background-color: var(--gris-claro);
  }

  .alerta {
    padding: 2rem 5rem;
    max-width: 60rem;
    margin: 2rem auto 2rem auto;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 1.8rem;
    text-align: center;
  }
  .alerta.error {
    background-color: var(--blanco);
    border-left: 5px solid #b91c1c;
    color: #b91c1c;
  }
  .alerta.success {
  }

  .contenedor {
    width: 90%;
    max-width: 80rem;
    margin: 0 auto;
  }
  .contenedor-presupuesto {
    margin-top: -5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    transform: translateY(5rem);
  }
  .dos-columnas {
    flex-direction: column;
  }
  .dos-columnas :first-child {
    margin-bottom: 4rem;
  }
  @media (min-width: 768px) {
    .dos-columnas {
      flex-direction: row;
      align-items: center;
      gap: 4rem;
    }
    .dos-columnas > div {
      width: 50%;
    }
    .dos-columnas :first-child {
      margin-bottom: 0;
    }
  }
  .formulario input[type="text"].nuevo-presupuesto,
  .formulario input[type="number"].nuevo-presupuesto {
    font-size: 2.8rem;
    text-align: center;
  }

  .contenedor-presupuesto svg {
    width: 25rem;
  }

  .contenido-presupuesto {
    width: 100%;
  }
  .contenido-presupuesto p {
    font-weight: 400;
    color: var(--gris-oscuro);
    font-size: 2.4rem;
    text-align: center;
  }
  @media (min-width: 768px) {
    .contenido-presupuesto p {
      text-align: left;
    }
  }
  .contenido-presupuesto p.negativo,
  .contenido-presupuesto p.negativo span {
    color: red;
  }
  .contenido-presupuesto span {
    font-weight: 900;
    color: var(--azul);
  }
  .reset-app {
    border: none;
    background-color: #db2777;
    padding: 1rem;
    width: 100%;
    text-align: center;
    color: var(--blanco);
    text-transform: uppercase;
    font-weight: 900;
    border-radius: 1rem;
    transition-property: background-color;
    transition-duration: 300ms;
  }
  .reset-app:hover {
    background-color: #c71465;
    cursor: pointer;
  }

  main {
    padding-top: 10rem;
  }

  .filtros .campo {
    display: flex;
    align-items: center;
    gap: 2rem;
  }
  .filtros label {
    font-size: 3rem;
    font-weight: 900;
    color: var(--gris-oscuro);
  }
  .filtros select {
    flex: 1;
    padding: 1rem;
    border: none;
    border-radius: 1rem;
    text-align: center;
    background-color: var(--gris-claro);
  }

  .listado-gastos {
    margin-top: 5rem;
  }
  .listado-gastos h2 {
    color: var(--gris-oscuro);
    font-weight: 900;
  }
  .no-gastos {
    text-align: center;
    font-size: 2.2rem;
  }

  .gasto {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    margin-bottom: 2rem;
    width: 100%;
  }

  .cantidad-gasto {
    font-size: 2.4rem;
    color: var(--negro);
    font-weight: 900;
  }

  .contenido-gasto {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .contenido-gasto img {
    width: 10rem;
  }

  .descripcion-gasto p {
    margin: 0 0 0.3rem 0;
  }
  .descripcion-gasto .categoria {
    color: var(--gris);
    font-size: 1.6rem;
    font-weight: 900;
    text-transform: uppercase;
  }
  .descripcion-gasto p {
    margin-bottom: 1rem;
  }
  .descripcion-gasto .nombre-gasto {
    color: var(--gris-oscuro);
    font-size: 2.4rem;
    font-weight: 700;
  }
  .descripcion-gasto .nombre-gasto:hover {
    cursor: pointer;
  }
  .descripcion-gasto .fecha-gasto {
    font-size: 1.8rem;
    font-weight: 900;
    color: var(--gris-oscuro);
  }
  .descripcion-gasto .fecha-gasto span {
    font-weight: 400;
  }

  .nuevo-gasto {
    position: fixed;
    bottom: 5rem;
    right: 5rem;
  }

  .nuevo-gasto img {
    width: 5rem;
  }
  .nuevo-gasto img:hover {
    cursor: pointer;
  }

  .modal {
    position: absolute;
    background-color: rgb(0 0 0 / 0.92);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .modal .cerrar-modal {
    position: absolute;
    right: 3rem;
    top: 3rem;
    width: 3rem;
    height: 3rem;
  }
  .modal .cerrar-modal img {
    width: 100%;
  }

  .modal .formulario {
    max-width: 80rem;
    width: 40rem;
    transition-property: all;
    transition-duration: 300ms;
    transition-timing-function: ease-in;
    opacity: 0;
  }
  .modal label {
    color: var(--blanco);
  }
  body .modal {
    overflow: hidden;
  }

  .modal .formulario.animar {
    position: relative;
    opacity: 1;
  }

  .modal .formulario.cerrar {
    opacity: 0;
  }

  .modal label {
    text-align: left;
  }

  .CircularProgressbar .CircularProgressbar-text {
    font-size: 1rem !important;
  }

  /*** SWIPE LIST OVERRIDES **/
  .swipe-action__leading {
    background-color: var(--azul);
    color: var(--blanco);
    margin-bottom: 2rem;
  }

  .swipe-action__trailing {
    background-color: #db2777;
    margin-bottom: 2rem;
    color: var(--blanco);
  }

  .swipeable-list .swipe-action {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.4rem;
    text-align: right;
  }
`;
