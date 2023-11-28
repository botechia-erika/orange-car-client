import styled from 'styled-components'


export const PostsContainer = styled.main`
display: grid;
grid-template-rows: 95px auto 95px;

.inputFeed{
width: 90%;
min-width: 364px;
height: 131px;
flex-shrink: 0;
border-radius: 12px;
background: #EDEDED;
padding: 17px 18px;
}

button{
  display: flex;
width: 359px;
padding: 12px 145px;
justify-content: center;
align-items: center;
border-radius: 12px;
background: linear-gradient(90deg, #FF6489 0%, #F9B24E 100%), #4088CB;
color: #FFF;
font-family: IBM Plex Sans;
font-size: 18px;
font-style: normal;
font-weight: 700;
line-height: normal;
margin: 30px auto;
}


ul{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}

.postBox{
  display: flex;
  width: 364px;
  height: 260px;
  padding: 9px 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 18px;
  border-radius: 12px;
border: 1px solid #E0E0E0;
background: #FBFBFB;
}


.postBox-A, .postBox-B{
  margin: 18px auto;
}
`