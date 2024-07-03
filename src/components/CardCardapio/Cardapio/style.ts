import styled from 'styled-components'
import { breakPoint, cores } from '../../../styles'
import { ButtonContainer } from '../CardapioLista/styles'

export const Container = styled.section`
  padding: 32px 0;

  .container {
    @media (max-width: ${breakPoint.tablet}) {
      display: block;
    }
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  margin-bottom: 32px;

  @media (max-width: ${breakPoint.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  @media (max-width: ${breakPoint.cel}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`

// export const Modal = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   z-index: 1;
//   display: none;
//   align-items: center;

//   &.visivel {
//     display: flex;
//   }

//   .overlay {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background-color: rgba(0, 0, 0, 0.3);
//   }
// `
// export const ContainerModal = styled.div`
//   background-color: ${cores.rosa};
//   height: 340px;
//   z-index: 1;

//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   position: relative;

//   img {
//     width: 280px;
//     height: 280px;
//     object-fit: cover;
//     margin: 32px;
//     display: block;
//   }

//   h3 {
//     color: ${cores.branca};
//     margin-top: 32px;
//   }

//   p {
//     color: ${cores.branca};
//     width: 600px;
//     heioght: 180px;
//     line-height: 22px;
//     font-size: 14px;
//     margin: 20px 32px 20px 0;
//     display: block;
//   }

//   ${ButtonContainer} {
//     margin-top: 40px;
//     margin-bottom: 40px;
//   }
// `
