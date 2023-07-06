export default function Footer(){

        const getFullYear = new Date().getFullYear()

    return(
        <footer>
            <p>&copy; {getFullYear}
            <br />
            <a href="github.com/samuel-h-dev" target="_blank" rel="norefferer">github</a></p>
        </footer>
    )
}