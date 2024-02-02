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
                <div className={styles.card_body}>
                    <h1>NOME:{card.name}</h1>
					<h1>CPF:{card.cpf}</h1>
					<h1>TELEFONE:{card.telefone}</h1>
					<h1>EMAIL:{card.email}</h1>
					<h1>SENHA:{card.senha}</h1>
				
                </div>
                </div>
            </div>
        ))}
    </div>
    )
}