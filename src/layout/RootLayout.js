import { Link, Outlet } from "react-router-dom";
import styles from "./RootLayout.module.css"

export function RootLayout() {
    return (
        <>
            <header className={styles.header}>
                <h1>Bem-vindo a aplicação de Filmes</h1>
                <h2>Ranking de Filmes Populares</h2>

                <ul>
                    <li><Link to={"/"} style={{ color: 'white' }}>Home</Link></li>
                </ul>

            </header>

            {/* Renderização das páginas */}
            <Outlet />

            <footer className={styles.footer}>
                Copyringth 2050. Todo os direitos reservados
            </footer>


        </>
    )
}