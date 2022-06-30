import styled from 'styled-components'


export const Container = styled.div`

.modal{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: center;




}

.modal-content{
    background-color: var(--g3);
    display: flex;
    flex-direction: column;
    padding: 15px;
    text-align: center;
    justify-content: center;
    align-items: center;
    h2{
        font-size: 15px;
    }
    .div-buttons{
        padding: 20px;
        display: flex;
        width: 100%;
        gap: 3rem;
        button{
            border-radius: 5px;
            width: 50px;
        }
        .button-yes{
            background-color: var(--primary-negative);
        }
        .button-no{
            background-color: var(--primary);
        }
    }

}


`