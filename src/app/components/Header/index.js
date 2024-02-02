import Link from 'next/link'

export default function Header() {
	return (
		<header className="header">
			<Link href="/"><img src="/logo.png" alt="logo"></img></Link>
			<ul>
				<li>
					<Link href="/RotaUm">CLIENTES</Link>
				</li>
				
			</ul>
		</header>
	)
}