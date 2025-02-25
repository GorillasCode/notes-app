import style from './modal.module.css';


export function Modal({isOpenModal, setOpenModal, description}) {
    if (isOpenModal) {
        return(
            <div className={style.background}>
                <div className={style.modal1}>
                    <p>{description}</p>
                    <button  onClick={() => setOpenModal(!isOpenModal)}>x</button>
                </div>
            </div>
        );
    } else {
        return <></>;
    }
}