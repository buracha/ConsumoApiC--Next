import styles from './card.module.css'

export default async function card() {
	process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    const cards = await fetch('http://localhost:5248/api/Clientes').then(res => res.json());
  console.log(cards)

    return (
        <div className={styles.container}>
        {cards ?.map((card) =>(
            <div key={card.id_cliente} className={styles.card}>  
                <div className={styles.card_header}>
                <div className={styles.perfil}>
                <img src="/perfil.png" ></img>
                </div>
                
                <div className={styles.card_body}>
                    <h1 className={styles.container}>NOME:{card.name}</h1>
					<h1 className={styles.container}>CPF:{card.cpf}</h1>
					<h1 className={styles.container}>TELEFONE:{card.telefone}</h1>
					<h1 className={styles.container}>EMAIL:{card.email}</h1>
					<h1 className={styles.container}>SENHA:{card.senha}</h1>
				
                </div>
                </div>
            </div>
        ))}
    </div>
    )
}