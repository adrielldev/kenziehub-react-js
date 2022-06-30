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

.modal-header{
    text-align: left;
    background-color: var(--g2) ;

    button{
        color: var(--g1);
        padding: 5px;
    }
    padding: 15px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
}

.modal-content{
    background-color: var(--g3);
    width: 310px;
    height: 460px;
    display: flex;
    flex-direction: column;

    .cadastrar-button{
        background-color: var(--primary);
        padding: 15px;
        color: var(--white);
        border-radius: 8px;
        width: 80%;
        margin-top: 40px;
        margin-left: 30px;
    }
}

.modal-body{
    display: flex;
    flex-direction: column;
    padding: 10px;
    h4{
        font-size: 14px;
        color:var(--g0) ;
        margin-bottom: 10px;
    }
}

`