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

    padding: 15px;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
}

.modal-content{
    background-color: var(--g3);
    width: 310px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4rem;
    


}

.modal-body{
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    padding: 20px;
        button{
            border-radius: 5px;
            border: none;
            padding: 10px;
            color: var(--g0);
            width: 50px;
        }
        .button-yes{
            background-color: var(--primary-negative);
        }
        .button-no{
            background-color: var(--primary);
        }
    }



`