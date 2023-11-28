import React from 'react'
import { GridHome } from './styledSigIn'
export function SignIn() {
  return (
    <div>
    <GridHome>
    <div></div>
    <div>
      <div className="box1">
        <svg
          width="84"
          height="85"
          viewBox="0 0 84 85"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.9948 42.0258C41.9948 53.1636 37.5704 63.8451 29.6948 71.7207C21.8193 79.5962 11.1377 84.0207 0 84.0207V42.0258H41.9948Z"
            fill="#F9B24E"
          />
          <path
            d="M84 42.0258C84 47.5407 82.9138 53.0015 80.8034 58.0966C78.6929 63.1916 75.5995 67.8211 71.7 71.7207C67.8004 75.6203 63.1709 78.7136 58.0758 80.824C52.9808 82.9344 47.52 84.0207 42.0051 84.0207V42.0258H84Z"
            fill="#A8BBC6"
          />
          <path
            d="M41.9948 41.9948C41.9935 36.4788 43.0791 31.0165 45.1897 25.9201C47.3003 20.8238 50.3945 16.1933 54.2955 12.2933C58.1964 8.39334 62.8276 5.30028 67.9245 3.19093C73.0214 1.08158 78.4839 -0.00271036 84 5.0877e-06V41.9948H41.9948Z"
            fill="#45525B"
          />
          <path
            d="M1.27212e-06 41.9948C-0.00135632 36.4796 1.0839 31.0182 3.19386 25.9225C5.30382 20.8268 8.39708 16.1968 12.2969 12.297C16.1968 8.39711 20.8268 5.30385 25.9225 3.19389C31.0182 1.08394 36.4796 -0.00135632 41.9948 1.27209e-06V41.9948H1.27212e-06Z"
            fill="#FE7E02"
          />
        </svg>
        <h2>LabCLUB</h2>
        <p>O projeto de club de vantagems para clientes CADASTRADOS feito por alunos</p>
        <div className="boxInput">
          <input />
          <input />
        </div>
        <div className="boxButton">
          <button className="button1">CONTINUAR</button>
          <hr className="hrule" />
          <a href="/sign-up" className="link2">
            Crie Uma Conta!
          </a>
        </div>
      </div>
    </div>
    <div></div>
  </GridHome>
    </div>
  )
}
