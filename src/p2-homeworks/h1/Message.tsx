import React from 'react';
import styles from './Message.module.css';


type MessageProps = {
    avatar: string
    name: string
    message: string
    time: string

}
function Message(props: MessageProps) {
    return (
        <div className={styles.messageWrapper}>
            <img className={styles.avatar} src={props.avatar} alt="avatar"/>
            <div className={styles.messageData}>
                <div className={styles.messageInner}>
                    <h3 className={styles.userName}>{props.name}</h3>
                    <p className={styles.message}>{props.message} </p>
                </div>
                <span className={styles.date}>{props.time}</span>
            </div>

        </div>
    )
}

export default Message
